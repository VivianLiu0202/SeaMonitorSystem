# Generated by Django 4.1 on 2024-04-29 21:54

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("login", "0002_alter_userinfo_options_alter_userinfo_managers_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="userinfo",
            name="address",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="birthday",
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="city",
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="job",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="name",
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="nationality",
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name="userinfo",
            name="phone_number",
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
