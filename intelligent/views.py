from django.shortcuts import render,redirect

# Create your views here.
# def intelligent(request):
#     return render(request, 'html/dash-IntelligentCenter.html')

# intelligent/views.py
from .models import WaterQualityPredict
import json

def intelligent(request):
    water_quality_data = WaterQualityPredict.objects.all()
    temp_data = []
    ph_data = []

    for data1 in water_quality_data:
        temp_data.append(data1.TEMP)
        ph_data.append(data1.PH)

    context = {
        'temp_data': json.dumps(temp_data),  # 使用json.dumps将数据转换为JSON字符串
        'ph_data': json.dumps(ph_data),
    }
    return render(request, 'html/dash-IntelligentCenter.html', context)

from django.http import HttpResponse
from intelligent.models import WaterQualityPredict
import csv

def download_predict_csv(request):
    response = HttpResponse(content_type='text/csv')
    response['Content-Disposition'] = 'attachment; filename="predict_data.csv"'
    writer = csv.writer(response)
    writer.writerow(['Species', 'Weight', 'Length1', 'Length2', 'Length3', 'Height', 'Width'])
    for predict in WaterQualityPredict.objects.all():
        writer.writerow([predict.TEMP, predict.PH, predict.DO, predict.Cond, predict.NTU, predict.Mn, predict.NH3])
    return response