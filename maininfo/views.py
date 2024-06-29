from django.shortcuts import render,redirect
from login.models import UserInfo
# coding=utf-8
from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.db.models import Count, Avg, Case, When, Value, IntegerField, CharField, FloatField, Q, F
from django.db.models.functions import Coalesce
from .models import WaterQuality
import json
import os
from .models import WaterQualityRecordForMonth

# 省份名称映射字典
province_name_mapping = {
    '北京市': '北京',
    '天津市': '天津',
    '河北省': '河北',
    '山西省': '山西',
    '内蒙古自治区': '内蒙古',
    '辽宁省': '辽宁',
    '吉林省': '吉林',
    '黑龙江省': '黑龙江',
    '上海市': '上海',
    '江苏省': '江苏',
    '浙江省': '浙江',
    '安徽省': '安徽',
    '福建省': '福建',
    '江西省': '江西',
    '山东省': '山东',
    '河南省': '河南',
    '湖北省': '湖北',
    '湖南省': '湖南',
    '广东省': '广东',
    '广西壮族自治区': '广西',
    '海南省': '海南',
    '重庆市': '重庆',
    '四川省': '四川',
    '贵州省': '贵州',
    '云南省': '云南',
    '西藏自治区': '西藏',
    '陕西省': '陕西',
    '甘肃省': '甘肃',
    '青海省': '青海',
    '宁夏回族自治区': '宁夏',
    '新疆维吾尔自治区': '新疆',
    '台湾省': '台湾',
    '香港特别行政区': '香港',
    '澳门特别行政区': '澳门'
}


# Create your views here.
def index(request):
    user_info = UserInfo.objects.get(job=request.user.job)

    # 将数据传递到模板
    context = {
        'user_info': user_info,
    }
    # print("contxt:", context)
    return render(request, 'html/dash-MainInfo.html', context)


def get_water_quality_statistics(request):
    # 定义水质类别到数值的映射
    quality_to_number = {
        # 这里需要注意全角和半角字符
        'Ⅰ': 1, 'Ⅱ': 2, 'Ⅲ': 3, 'Ⅳ': 4, 'Ⅴ': 5, '劣Ⅴ': 6
    }

    # 将水质类别转换为数值
    cases = [When(water_quality_category=k, then=Value(v)) for k, v in quality_to_number.items()]
    # 生成一个注释查询，以便检查映射是否正确
    test_results = WaterQuality.objects.annotate(
        quality_as_number=Case(*cases, output_field=IntegerField())
    ).values('water_quality_category', 'quality_as_number')


    # 聚合查询，按省份和流域分组
    results = WaterQuality.objects.exclude(
        water_quality_category__isnull=True).exclude(
        water_temperature__isnull=True
    ).annotate(
        quality_as_number=Case(*cases, output_field=IntegerField())
    ).values('province', 'watershed').annotate(
        total_maintenance=Count('id', filter=Q(station_condition='维护')),
        average_quality=Avg('quality_as_number'),
        average_temperature=Avg('water_temperature')
    ).order_by('province', 'watershed')

    # 映射省份名称
    for result in results:
        result['province'] = province_name_mapping.get(result['province'],
                                                       result['province'])  # 用映射字典更新省份名称，如果没有匹配，则使用原名称

    # 使用JsonResponse返回结果
    return JsonResponse(list(results), safe=False)


def load_data(request):
    with open('/Users/liuvivian/Desktop/time/2021-04/2021-04-01.json', 'r') as file:
        data = json.load(file)
        for item in data['tbody']:
            WaterQualityRecordForMonth.objects.create(
                province=item[0],
                basin=item[1],
                section_name=item[2],
                monitoring_time=None if item[3] == 'null' else item[3],
                water_category=item[4],
                water_temperature=item[5],
                ph=item[6],
                dissolved_oxygen=item[7],
                electrical_conductivity=item[8],
                turbidity=item[9],
                permanganate_index=item[10],
                ammonia_nitrogen=item[11],
                total_phosphorus=item[12],
                total_nitrogen=item[13],
                chlorophyll_a=item[14],
                algal_density=item[15],
                site_condition=item[16]
            )
    return render(request, 'display_data.html', {'records': WaterQualityRecordForMonth.objects.all()})