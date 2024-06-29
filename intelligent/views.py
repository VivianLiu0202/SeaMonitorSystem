# coding=utf-8
from django.shortcuts import render,redirect
from django.http import HttpResponse, JsonResponse
import pandas as pd
# Create your views here.
# def intelligent(request):
#     return render(request, 'html/dash-IntelligentCenter.html')

# intelligent/views.py
from .models import WaterQualityPredict
from login.models import UserInfo
import json

# from waterqualitypredict.lstm import process_data, create_dataset, get_train_set, train, get_forecast_input

def intelligent(request):
    water_quality_data = WaterQualityPredict.objects.all()
    temp_data = []
    ph_data = []

    for data1 in water_quality_data:
        temp_data.append(data1.TEMP)
        ph_data.append(data1.PH)

    user_info = UserInfo.objects.get(job=request.user.job)

    context = {
        'temp_data': json.dumps(temp_data),  # 使用json.dumps将数据转换为JSON字符串
        'ph_data': json.dumps(ph_data),
        'user_info': user_info,
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


def lstm_interface(request):
    return render(request, 'html/lstm.html')


def upload_csv(request):
    if request.method == 'POST':
        file = request.FILES.get('file')
        if file:
            df = pd.read_csv(file)
            # 假设你有TEMP和PH列，你可以执行一些数据处理或者分析
            temp_data = df['TEMP'].tolist()
            ph_data = df['PH'].tolist()
            # 数据处理 TODO: 这里可以添加更多的数据处理代码

            # 返回处理后的数据
            print("data returning")
            return JsonResponse({
                'temp_data': temp_data,
                'ph_data': ph_data
            })
        else:
            return JsonResponse({'error': 'No file provided'}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)
