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
from django.conf.urls import include
from django.contrib import admin
from django.urls import path, include
from login import views as login_views
from maininfo import views as maininfo_views
from userpage import views as userpage_views
from intelligent import views as intelligent_views
from underwater import views as underwater_views
from datacenter import views as datacenter_views
from extra import views as apps_views
from allcharts import views as allcharts_views
from django.urls import path
from underwater.views import download_fish_csv, download_waterquality_csv, download_sensor_csv
from underwater.views import load_river_basins, load_section_names
from intelligent.views import download_predict_csv, upload_csv
from datacenter.views import download_ohio_csv, ohio_api, search_species

urlpatterns = [
    path('captcha/', include('captcha.urls')),  # 验证码相关URL
    path("", login_views.signin_view, name="signin"),  # 使用 signin_view 处理根 URL
    path("signup/", login_views.signup_view, name="signup"),
    path("password_reset/", login_views.password_reset_view, name="password_reset"),
    path("lockscreen/", login_views.lockscreen_view, name="lockscreen"),
    path("two_step_verification/", login_views.two_step_verification_view, name="two_step_verification"),

    # 主要信息界面的url路由
    path("index/", maininfo_views.index, name="index"),

    # 智能分析界面的url路由
    path("intelligent/", intelligent_views.intelligent, name="intelligent"),

    # 水下系统界面的url路由
    path("underwater/", underwater_views.underwater, name="underwater"),

    # 数据中心界面的url路由
    path("datacenter/", datacenter_views.datacenter, name="datacenter"),

    # 图表展示界面的url路由
    path("allcharts/", allcharts_views.allcharts, name="allcharts"),

    # 三个应用的url路由
    path("chat/", apps_views.chat, name="chat"),
    path("calendar/", apps_views.calendar, name="calendar"),
    path("todolist/", apps_views.todoList, name="todolist"),

    # 用户信息与设置界面的url路由
    path("user_profile/", userpage_views.user_profile, name="user_profile"),
    path("user_account_settings/", userpage_views.user_settings, name="user_settings"),

    # 确保管理员URL配置正确
    path("admin/", admin.site.urls),

    path('get_water_quality_statistics/', maininfo_views.get_water_quality_statistics,
         name='get_water_quality_statistics'),

    # 额外功能的url
    # 额外功能的url，子模块的url全集成过来
    path('extra/', include('extra.urls')),

    path('api/ohio/', ohio_api, name='ohio-api'),
    path('search_species/', search_species, name='search_species'),
    # 数据上传和下载
    path('download-fish-csv/', download_fish_csv, name='download_fish_csv'),
    path('download-waterquality-csv/', download_waterquality_csv, name='download_waterquality_csv'),
    path('download-sensor-csv/', download_sensor_csv, name='download_sensor_csv'),
    path('download-predict-csv/', download_predict_csv, name='download_predict_csv'),
    path('download-ohio-csv/', download_ohio_csv, name='download_ohio_csv'),
    path('upload-csv/', upload_csv, name='upload_csv'),

    # 搜索表格
    path('ajax/load-river-basins/', load_river_basins, name='ajax_load_river_basins'),
    path('ajax/load-section-names/', load_section_names, name='ajax_load_section_names'),
    # 其他 URL 配置
    path('login/', include('login.urls')),  # 确保包含login应用的urls



    # 动态展示


]
