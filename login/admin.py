# coding=utf-8
from django.contrib import admin

from django.contrib.auth.admin import UserAdmin
from .models import UserInfo
# Register your models here.
class UserInfoAdmin(UserAdmin):
    model = UserInfo
    ordering = ('mail',)  # 使用存在的字段来排序
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('job', 'nationality', 'city', 'birthday', 'address', 'phone_number', 'url', 'c_time')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('job', 'nationality', 'city', 'birthday', 'address', 'phone_number', 'url')}),
    )

admin.site.register(UserInfo, UserInfoAdmin)