from django.shortcuts import render,redirect

# Create your views here.
def calendar(request):
    return render(request, 'html/app-calendar.html')

def chat(request):
    return render(request, 'html/app-chat.html')

def todoList(request):
    return render(request, 'html/app-todoList.html')