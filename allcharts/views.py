from django.shortcuts import render,redirect
from login.models import UserInfo

# Create your views here.
def allcharts(request):
    user_info = UserInfo.objects.get(job=request.user.job)
    context = {
        'user_info': user_info,
    }
    return render(request, 'html/dash-charts-apex.html',context)
