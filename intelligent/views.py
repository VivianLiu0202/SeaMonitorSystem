from django.shortcuts import render,redirect

# Create your views here.
def intelligent(request):
    return render(request, 'html/dash-IntelligentCenter.html')