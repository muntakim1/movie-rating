# Generated by Django 3.1.6 on 2021-02-12 08:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210212_0800'),
    ]

    operations = [
        migrations.AlterField(
            model_name='moviesearchhistory',
            name='genre',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
