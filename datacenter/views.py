# coding=utf-8
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from datacenter.models import Ohio
import csv


# Create your views here.
def datacenter(request):
    # 获取尺寸类别的统计信息
    top_8_size_classes = Ohio.objects.get_top_8_size_classes()
    size_class_names = [size_class['_3cm_size_class'] for size_class in top_8_size_classes]
    size_class_counts = [size_class['count'] for size_class in top_8_size_classes]

    # 获取拉丁名统计信息
    latin_names_classes = Ohio.objects.get_6_latin()
    latin_names_names = [latin['latin_name'] for latin in latin_names_classes]
    latin_names_counts = [latin['count'] for latin in latin_names_classes]

    # 将数据传递到模板
    context = {
        'size_class_names': size_class_names,
        'size_class_counts': size_class_counts,
        'latin_names_names': latin_names_names,
        'latin_names_counts': latin_names_counts,
    }

    return render(request, 'html/dash-DataCenter.html', context)


def ohio_data_api(request):
    # 查询数据库
    data = Ohio.objects.all().values(
        'common_name', 'latin_name', '_3cm_size_class', 'length_cm', 'weight_kg'
    )

    # 将QuerySet转换为列表，因为QuerySet不是直接可序列化的
    data_list = list(data)

    # 返回JSON响应
    return JsonResponse(data_list, safe=False)


# 下载CSV文件视图：将Ohio数据导出为CSV文件
def download_ohio_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="datacenter_ohio_data.csv"'
    writer = csv.writer(response)
    writer.writerow(['_3cm_Size_Class', 'Weight_kg', 'Latin_Name'])

    for ohio in Ohio.objects.all():
        writer.writerow([ohio._3cm_size_class, ohio.weight_kg, ohio.latin_name])

    return response


def search_species(request):
    query = request.GET.get('query', '')
    if query:
        species = Ohio.objects.filter(common_name__icontains=query)[:5]
        data = [{
            'latin_name': sp.latin_name,
            'length_cm': sp.length_cm,
            'weight_kg': sp.weight_kg
        } for sp in species]
    else:
        data = []
    return JsonResponse(data, safe=False)
