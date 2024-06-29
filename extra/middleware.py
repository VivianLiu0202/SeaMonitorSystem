from django.http import HttpResponse
from django.shortcuts import render
from django.http import Http404
from django.utils.deprecation import MiddlewareMixin


class RestrictAccessMiddleware(MiddlewareMixin):
    def process_view(self, request, view_func, view_args, view_kwargs):
        restricted_users = ['test@gmail.com', 'test2@gamil.com']  # 被限制访问的用户列表
        restricted_urls = ['/intelligent/','/chat/']  # 被限制访问的 URL 列表

        if request.user.is_authenticated:
            if request.user.email in restricted_users and request.path in restricted_urls:
                print(1)
                return render(request, 'my_protected.html')
        return None
