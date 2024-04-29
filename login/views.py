# coding=utf-8
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect

from login.models import UserInfo


# 处理登陆请求，对应的html文件为auth-cover-signin.html
# 通过唯一的用户名，使用Django的ORM去数据库中查询用户数据
# 如果有匹配项，则进行密码对比，如果没有匹配项，说明用户名不存在。如果密码对比错误，说明密码不正确。
def signin_view(request):
    if request.method == 'POST':
        email = request.POST.get('email', None)
        password = request.POST.get('password', None)
        if not email or not password:
            # 如果邮件或密码未填写，返回错误信息
            return render(request, 'html/login/auth-cover-signin.html', {
                "message": "所有字段都必须填写！"
            })

        # 使用strip()方法去除可能的首尾空格
        email = email.strip()
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            if user.is_superuser:
                return redirect('admin:index')  # 如果是管理员，重定向到管理员控制面板
            return redirect('index')  # 对于普通用户，重定向到用户信息页面
        else:
            # 如果认证失败，返回错误信息
            return render(request, 'html/login/auth-cover-signin.html', {
                "message": "用户名或密码不正确！"
            })
    # 对于请求，只显示登录表单
    return render(request, 'html/login/auth-cover-signin.html')

def signup_view(request):
    if request.method == 'POST':
        mail = request.POST.get('email')
        password = request.POST.get('password')
        name = request.POST.get('name')
        job = request.POST.get('job')
        nationality = request.POST.get('nationality')
        city = request.POST.get('city')
        birthday = request.POST.get('birthday')
        address = request.POST.get('address')
        phone_number = request.POST.get('phone_number')
        url = request.POST.get('url')

        # Validate data here (optional)

        try:
            user = UserInfo.objects.create_user(
                mail=mail, password=password, name=name, job=job, nationality=nationality,
                city=city, birthday=birthday, address=address, phone_number=phone_number, url=url
            )
            user.save()
            login(request, user)  # Log in the new user
            return redirect('index')
        except Exception as e:
            return render(request, 'html/login/auth-cover-signup.html', {
                "message": "注册失败！" + str(e)
            })
    return render(request, 'html/login/auth-cover-signup.html')
def password_reset_view(request):
    return render(request, 'html/login/auth-cover-password-reset.html')

def lockscreen_view(request):
    return render(request, 'html/login/auth-cover-lockscreen.html')

def two_step_verification_view(request):
    return render(request, 'html/login/auth-cover-two-step-verification.html')

def index(request):
    return render(request, 'html/dash-MainInfo.html')
