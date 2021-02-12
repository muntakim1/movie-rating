# Generated by Django 3.1.6 on 2021-02-12 06:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MovieSearchHistory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('released', models.DateField()),
                ('genre', models.CharField(max_length=255)),
                ('director', models.CharField(max_length=255)),
                ('imdbrating', models.CharField(max_length=4)),
                ('Production', models.CharField(max_length=255)),
                ('Language', models.CharField(max_length=255)),
                ('writer', models.TextField()),
                ('plot', models.TextField()),
                ('poster', models.CharField(max_length=255)),
                ('favourite', models.BooleanField(default=False)),
                ('year', models.CharField(max_length=10)),
            ],
        ),
    ]