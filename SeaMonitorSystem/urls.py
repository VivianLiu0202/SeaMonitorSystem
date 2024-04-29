# coding=utf-8
"""SeaMonitorSystem URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from login import views
urlpatterns = [
    path("", views.signin_view, name="signin"),  # 使用 signin_view 处理根 URL
    path("index/", views.index, name="index"),
    path("signup/", views.signup_view, name="signup"),
    path("password_reset/", views.password_reset_view, name="password_reset"),
    path("lockscreen/", views.lockscreen_view, name="lockscreen"),
    path("two_step_verification/", views.two_step_verification_view, name="two_step_verification"),
    # 确保管理员URL配置正确
    path("admin/", admin.site.urls),
]
