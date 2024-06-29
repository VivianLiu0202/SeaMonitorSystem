from django.shortcuts import render,redirect
from login.models import UserInfo

# Create your views here.
def user_profile(request):
    user_info = UserInfo.objects.get(job=request.user.job)
    context = {
        'user_info': user_info,
    }
    return render(request, 'html/user-profile.html',context)

def user_settings(request):
    user_info = UserInfo.objects.get(job=request.user.job)
    context = {
        'user_info': user_info,
    }
    return render(request, 'html/user-account-settings.html',context)