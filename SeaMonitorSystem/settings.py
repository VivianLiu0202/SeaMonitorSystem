# coding=utf-8
"""
Django settings for SeaMonitorSystem project.

Generated by 'django-admin startproject' using Django 4.1.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""
import os
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = "django-insecure-2*33fm6uz45%d=r)f!ntt^&@kb@2t*9^-p$5_2jkar20bb*icr"

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []

# Application definition

INSTALLED_APPS = [
    'simpleui',
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "login",
    'captcha',
    'maininfo',
    'corsheaders',
    'intelligent',
    'underwater',
    'datacenter',
]

# 验证码相关
CAPTCHA_LENGTH = 4  # 验证码长度
CAPTCHA_FONT_SIZE = 30  # 验证码字体大小
CAPTCHA_CHALLENGE_FUNCT = 'captcha.helpers.random_char_challenge'  # 验证码为随机字符串
CAPTCHA_TIMEOUT = 30
CAPTCHA_TEXT_FIELD_TEMPLATE = BASE_DIR + '/template/html/captcha/text_field.html'
CAPTCHA_OUTPUT_FORMAT = u'%(text_field)s %(image)s %(hidden_field)s'

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    #"django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

CORS_ALLOW_ALL_ORIGINS = True  # 生产环境中你可能需要调整此设置

ROOT_URLCONF = "SeaMonitorSystem.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, 'template')],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "SeaMonitorSystem.wsgi.application"

# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'SeaSystem',
        'USER': 'root',
        'PASSWORD': 'Vivian0202',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    }
}

# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = "zh-hans"

TIME_ZONE = "Asia/Shanghai"

USE_I18N = True

USE_L10N = True

USE_TZ = False

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/


STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'template'),
]

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# 修改用户模型，指示 Django 使用你的自定义用户模型
AUTH_USER_MODEL = 'login.UserInfo'

# ------------------------------SimpleUI 配置------------------------------
SIMPLEUI_HOME_INFO = False
SIMPLEUI_LOGO = '/static/admin/src/img/favicon.ico'

SIMPLEUI_CONFIG = {
    # 是否使用系统默认菜单。
    'system_keep': True,
    'menus': [
        # 这里可以包含你想保留的其他菜单项
        {
            'name': '检查用户页面',  # 这里是菜单项显示的名字
            'url': '/index/',  # 这里是点击后跳转的相对路径
            'icon': 'fas fa-link',  # 这里可以设置一个图标，使用 Font Awesome 图标类
        },
    ],
}
