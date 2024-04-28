# coding=utf-8
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth.models import BaseUserManager
class CustomUserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, mail, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Regular user must have is_staff=False.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Regular user must have is_superuser=False.')

        return self._create_user(mail, password, **extra_fields)

    def create_superuser(self, mail, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self._create_user(mail, password, **extra_fields)

    #这是一个辅助方法，用于避免在 create_user 和 create_superuser 方法中重复代码。
    def _create_user(self, mail, password, **extra_fields):
        """
        Create and save a user with the given mail and password.
        """
        if not mail:
            raise ValueError('The given mail must be set')
        mail = self.normalize_email(mail)
        user = self.model(mail=mail, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

class UserInfo(AbstractUser):
    username = None  # Django默认的username字段可以不使用
    name = models.CharField(max_length=100)
    job = models.CharField(max_length=100)
    nationality = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    birthday = models.DateField()
    address = models.CharField(max_length=255)
    mail = models.EmailField(unique=True)  # 确保邮箱唯一
    phone_number = models.CharField(max_length=20)
    url = models.URLField(blank=True, null=True)
    c_time = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = 'mail'
    REQUIRED_FIELDS = ['name', 'job', 'nationality', 'city', 'birthday', 'address', 'phone_number', 'url']  # email 和 password 默认已包含

    objects = CustomUserManager()
    def __str__(self):
        return self.mail