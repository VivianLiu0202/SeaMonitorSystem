from django.shortcuts import render, redirect
from login.models import UserInfo

from django.http import JsonResponse
from .forms import InputForm
from .bunny import conduct_inference
from .detect import detect_single_image
from PIL import Image

import cv2
import base64
import numpy as np

def call_model(text, image):
    return conduct_inference(text, image)

def my_protected_view(request):
    # 这里是视图逻辑
    return render(request, 'html/my_protected.html')


def chat_api(request):
    print(1)
    if request.method == 'POST':
        print("request.POST:", request.POST)
        print("request.FILES:", request.FILES)  # 添加这行来检查文件数据
        form = InputForm(request.POST, request.FILES)
        if form.is_valid():
            text_input = form.cleaned_data['text_input']
            image_input = form.cleaned_data.get('file')
            image=None

            print("text_input", text_input)
            print("file", image_input)
            if image_input is not None:
                # 将 PIL Image 转换为模型可接受的格式
                image = Image.open(image_input)
            # 调用模型处理函数
            response = call_model(text_input, image)
            # response="模拟输出"
            print("response:", response)

            return JsonResponse({'response': response})
        else:
            return JsonResponse({'error': form.errors}, status=400)
    else:
        return JsonResponse({'error': 'Only POST method is allowed'}, status=405)

def detect_image(request):
    if request.method == 'POST':
        form = InputForm(request.POST, request.FILES)
        print(1)
        if form.is_valid():
            print(2)
            file=request.FILES['file']
            img_array = np.frombuffer(file.read(), np.uint8)
            image = cv2.imdecode(img_array, cv2.IMREAD_COLOR)

            result_image = detect_single_image(image)

            _, buffer = cv2.imencode('.jpg', result_image)
            image_base64 = base64.b64encode(buffer).decode('utf-8')

            return JsonResponse({'image': image_base64})
        return JsonResponse({'error': form.errors}, status=400)

def calendar(request):
    user_info = UserInfo.objects.get(job=request.user.job)
    context = {
        'user_info': user_info,
    }
    return render(request, 'html/app-calendar.html', context)


def chat(request):
    user_info = UserInfo.objects.get(job=request.user.job)
    context = {
        'user_info': user_info,
    }
    return render(request, 'html/app-chat.html', context)


def todoList(request):
    user_info = UserInfo.objects.get(job=request.user.job)
    context = {
        'user_info': user_info,
    }
    return render(request, 'html/app-todoList.html', context)
