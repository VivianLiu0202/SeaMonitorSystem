# coding=utf-8
import json

from django.db.models.query_utils import Q
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

    context = {
        'size_class_names': size_class_names,
        'size_class_counts': size_class_counts,
        'latin_names_names': latin_names_names,
        'latin_names_counts': latin_names_counts,
    }

    return render(request, 'html/dash-DataCenter.html', context)


def ohio_api(request):
    search_query = request.GET.get('search', '')  # 确保这里使用的参数名与前端一致
    # 查询并排序，根据需要选择合适的字段排序，这里假设按照常见名字排序
    data = list(Ohio.objects.filter(
        Q(common_name__icontains=search_query) |
        Q(latin_name__icontains=search_query)
    ).order_by('common_name')[:5].values(
        'common_name', 'latin_name', '_3cm_size_class', 'length_cm', 'weight_kg'
    ))
    return JsonResponse(data, safe=False)


# 下载CSV文件视图：将Ohio数据导出为CSV文件
def download_ohio_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="datacenter_ohio_data.csv"'
    writer = csv.writer(response)
    writer.writerow(['_3cm_Size_Class', 'Weight_kg', 'Latin_Name'])

    for ohio in Ohio.objects.all():
        writer.writerow([ohio._3cm_size_class, ohio.weight_kg, ohio.latin_name])

    return response


# 鱼类匹配
# def search_species(request):
#     search_query = request.GET.get('search', '')  # 确保这里使用的参数名与前端一致
#     # 查询并排序，根据需要选择合适的字段排序，这里假设按照常见名字排序
#     data = list(Ohio.objects.filter(
#         Q(common_name__icontains=search_query) |
#         Q(latin_name__icontains=search_query)
#     ).order_by('_3cm_size_class')[:5].values(
#         'common_name', 'latin_name', '_3cm_size_class', 'length_cm', 'weight_kg'
#     ))
#     return JsonResponse(data, safe=False)

def search_species(request):
    search_query = request.GET.get('search', '')  # 确保这里使用的参数名与前端一致
    # 过滤出符合条件的记录，并按常见名称排序
    data = list(Ohio.objects.filter(
        Q(common_name__icontains=search_query) |
        Q(latin_name__icontains=search_query)
    ).exclude(
        Q(common_name__isnull=True) | Q(common_name__exact='') |
        Q(latin_name__isnull=True) | Q(latin_name__exact='') |
        Q(_3cm_size_class__isnull=True) | Q(_3cm_size_class__exact='') |
        Q(weight_kg__isnull=True) | Q(weight_kg=0)
    ).order_by('common_name')[:5].values(
        'common_name', 'latin_name', '_3cm_size_class', 'length_cm', 'weight_kg', 'date', 'count'
    ))
    return JsonResponse(data, safe=False)
