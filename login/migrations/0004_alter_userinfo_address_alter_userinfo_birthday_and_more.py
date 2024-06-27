# Generated by Django 4.2 on 2024-06-27 11:21

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("login", "0003_alter_userinfo_address_alter_userinfo_birthday_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="userinfo",
            name="address",
            field=models.CharField(
                blank=True, max_length=255, null=True, verbose_name="地址"
            ),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="birthday",
            field=models.DateField(blank=True, null=True, verbose_name="生日"),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="c_time",
            field=models.DateTimeField(auto_now_add=True, verbose_name="创建时间"),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="city",
            field=models.CharField(
                blank=True, max_length=50, null=True, verbose_name="城市"
            ),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="email",
            field=models.EmailField(max_length=254, unique=True, verbose_name="邮箱"),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="job",
            field=models.CharField(
                blank=True, max_length=100, null=True, verbose_name="职业"
            ),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="name",
            field=models.CharField(
                blank=True, max_length=100, null=True, verbose_name="姓名"
            ),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="nationality",
            field=models.CharField(
                blank=True, max_length=50, null=True, verbose_name="国籍"
            ),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="phone_number",
            field=models.CharField(
                blank=True, max_length=20, null=True, verbose_name="电话"
            ),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="url",
            field=models.URLField(blank=True, null=True, verbose_name="个人网站"),
        ),
    ]
