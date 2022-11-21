# Generated by Django 4.1.3 on 2022-11-21 19:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forms', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Forms_Bio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('forms_name', models.CharField(max_length=100)),
                ('forms_admin', models.CharField(max_length=100)),
                ('date_limit', models.DateField()),
                ('forms_url', models.URLField()),
            ],
        ),
        migrations.DeleteModel(
            name='Post',
        ),
    ]
