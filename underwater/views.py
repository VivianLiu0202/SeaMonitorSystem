from django.shortcuts import render,redirect
from django.db.models import Max, Min, Count
from .models import Fish,WaterQuality,Sensor
import json
from datetime import datetime

WATER_QUALITY_STANDARDS = {
    'Ⅰ' :{
        'ph_min': 6,
        'ph_max': 9,
        'dissolved_oxygen':7.5,           
        'permanganate_index':2,          
        'ammonia_nitrogen':0.15,           
        'total_phosphorus':0.02              
    },
    'Ⅱ': {
        'ph_min': 6,
        'ph_max': 9,
        'dissolved_oxygen':6,           #>=6
        'permanganate_index':4,          #高锰酸钾<=4
        'ammonia_nitrogen':0.5,              #氨氮<=0.5
        'total_phosphorus':0.1              #总磷<=0.1
    },
    'Ⅲ': {
        'ph_min': 6,
        'ph_max': 9,
        'dissolved_oxygen':5,          
        'permanganate_index':6,          
        'ammonia_nitrogen':1.0,              
        'total_phosphorus':0.2             
    },
    'Ⅳ':{
        'ph_min': 6,
        'ph_max': 9,
        'dissolved_oxygen':3,           
        'permanganate_index':10,        
        'ammonia_nitrogen':1.5,             
        'total_phosphorus':0.3           
    },
    'Ⅴ':{
        'ph_min': 6,
        'ph_max': 9,
        'dissolved_oxygen':2,          
        'permanganate_index':15,         
        'ammonia_nitrogen':2.0,              
        'total_phosphorus':0.4             
    },
}

# Create your views here.
def underwater(request):
    # 不同种类鱼的列表
    species_list = Fish.objects.values_list('species', flat=True).distinct()
    #species_list = ['Bream', 'Roach', 'Whitefish', 'Parkki', 'Perch', 'Pike', 'Smelt']
    total_fish_count =0

    # 初始化存储所有种类鱼的重量、尺寸和宽度范围和数量统计的字典
    all_species_data = {}

    for species in species_list:
        # 获取名字为 species 的鱼的重量、长度和宽度的最大值和最小值
        weight_stats = Fish.objects.filter(species=species).aggregate(Max('weight'), Min('weight'))
        length_stats = Fish.objects.filter(species=species).aggregate(Max('length3'), Min('length3'))
        width_stats = Fish.objects.filter(species=species).aggregate(Max('width'), Min('width'))

        max_weight = weight_stats['weight__max']
        min_weight = weight_stats['weight__min']
        max_length = length_stats['length3__max']
        min_length = length_stats['length3__min']
        max_width = width_stats['width__max']
        min_width = width_stats['width__min']

        # 计算重量、长度和宽度的范围和步长
        weight_range = max_weight - min_weight
        length_range = max_length - min_length
        width_range = max_width - min_width

        weight_step = weight_range / 5
        length_step = length_range / 5
        width_step = width_range / 5

        # 初始化每个组的区间信息和数量统计
        weight_group_ranges = []
        weight_group_counts = []
        length_group_ranges = []
        length_group_counts = []
        width_group_ranges = []
        width_group_counts = []

        # 计算每个组的重量、长度和宽度区间和鱼的数量
        for i in range(5):
            weight_group_min = round(min_weight + i * weight_step,1)
            weight_group_max = round(min_weight + (i + 1) * weight_step,1)
            weight_count = Fish.objects.filter(species=species, weight__gte=weight_group_min, weight__lt=weight_group_max).count()
            weight_group_ranges.append((weight_group_min, weight_group_max))
            weight_group_counts.append(weight_count)

            length_group_min =round(min_length + i * length_step,1)
            length_group_max = round(min_length + (i + 1) * length_step,1)
            length_count = Fish.objects.filter(species=species, length3__gte=length_group_min, length3__lt=length_group_max).count()
            length_group_ranges.append((length_group_min, length_group_max))
            length_group_counts.append(length_count)

            width_group_min = round(min_width + i * width_step,1)
            width_group_max = round(min_width + (i + 1) * width_step,1)
            width_count = Fish.objects.filter(species=species, width__gte=width_group_min, width__lt=width_group_max).count()
            width_group_ranges.append((width_group_min, width_group_max))
            width_group_counts.append(width_count)

        # 统计每种鱼类的总数量
        total_count = Fish.objects.filter(species=species).count()
        total_fish_count += total_count

        # 存储每种鱼类的数据到字典中
        all_species_data[species] = {
            'weight_ranges': weight_group_ranges,
            'weight_counts': weight_group_counts,
            'length_ranges': length_group_ranges,
            'length_counts': length_group_counts,
            'width_ranges': width_group_ranges,
            'width_counts': width_group_counts,
            'total_count': total_count,
        }
    


    results = []
    results_init=[]
    alerts = []

    #初始化表格的数据
    results_init = WaterQuality.objects.filter(
                    monitoring_time__month=4,
                    monitoring_time__day=1,
                    section_name='大红桥'
                )
    
    if request.method == 'POST':
        month = request.POST.get('month')
        day = request.POST.get('date')
        area = request.POST.get('area')
        print(f"Received data - Month: {month}, Day: {day}, Area: {area}") 

        # 验证表单数据
        if month and day and area:
            try:
                month = int(month)
                day = int(day)

                # 获取当前年份
                current_year = datetime.now().year

                # 使用 month 和 day 进行过滤
                results = WaterQuality.objects.filter(
                    monitoring_time__month=month,
                    monitoring_time__day=day,
                    section_name=area
                )
                # 检查每个结果是否符合标准
                for result in results:
                    category = result.water_quality_category
                    standards = WATER_QUALITY_STANDARDS.get(category)
                    if standards:
                        if not (standards['ph_min'] <= result.pH <= standards['ph_max']):
                            ph_diff = result.pH - standards['ph_max'] if result.pH > standards['ph_max'] else result.ph - standards['ph_min']
                            alerts.append(f"PH value out of range for {category} in {area} on {result.monitoring_time} 超出范围： {ph_diff:.2f}")
                        if result.dissolved_oxygen < standards['dissolved_oxygen']:
                            do_diff = standards['dissolved_oxygen'] - result.dissolved_oxygen
                            alerts.append(f"Dissolved Oxygen below minimum for {category} in {area} on {result.monitoring_time} 超出范围： -{do_diff:.2f}")
                        if result.permanganate_index > standards['permanganate_index']:
                            pi_diff = result.permanganate_index - standards['permanganate_index']
                            alerts.append(f"Permanganate Index above maximum for {category} in {area} on {result.monitoring_time} 超出范围： +{pi_diff:.2f}")
                        if result.ammonia_nitrogen > standards['ammonia_nitrogen']:
                            an_diff = result.ammonia_nitrogen - standards['ammonia_nitrogen']
                            alerts.append(f"Ammonia Nitrogen above maximum for {category} in {area} on {result.monitoring_time} 超出范围： +{an_diff:.2f}")
                        if result.total_phosphorus > standards['total_phosphorus']:
                            tp_diff = result.total_phosphorus - standards['total_phosphorus']
                            alerts.append(f"Total Phosphorus above maximum for {category} in {area} on {result.monitoring_time} 超出范围： +{tp_diff:.2f}")


            except ValueError:
                # 处理无效的月份和日期输入
                pass

    sensors = Sensor.objects.all()

    context = {
        'all_species_data': json.dumps(all_species_data),
        'total_species_count': len(species_list),
        'total_fish_count': total_fish_count,
        'results': results,
        'alerts': json.dumps(alerts),
        'sensors': sensors,
    }

    return render(request, 'html/dash-UnderwaterSystem.html', context)

'''

def monitor_waterquality(request):
    results = []
    if request.method == 'POST':
        month = request.POST.get('month')
        day = request.POST.get('date')
        area = request.POST.get('area')
        print(f"Received data - Month: {month}, Day: {day}, Area: {area}") 

        # 验证表单数据
        if month and day and area:
            try:
                month = int(month)
                day = int(day)

                # 获取当前年份
                current_year = datetime.now().year

                # 使用 month 和 day 进行过滤
                results = WaterQuality.objects.filter(
                    monitoring_time__month=month,
                    monitoring_time__day=day,
                    section_name=area
                )
            except ValueError:
                # 处理无效的月份和日期输入
                pass

    return render(request, 'html/dash-UnderwaterSystem.html', {'results': results})
'''
