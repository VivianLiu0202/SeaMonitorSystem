# coding=utf-8
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import UserInfo

class UserInfoAdmin(UserAdmin):
    model = UserInfo
    ordering = ('email',)  # 更新字段名为 'email'
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('job', 'nationality', 'city', 'birthday', 'address', 'phone_number', 'url', 'c_time')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('job', 'nationality', 'city', 'birthday', 'address', 'phone_number', 'url')}),
    )

admin.site.register(UserInfo, UserInfoAdmin)
