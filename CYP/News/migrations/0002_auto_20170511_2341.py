# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-05-11 23:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('News', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='top_image',
            field=models.URLField(max_length=500, null=True),
        ),
    ]
