# Generated by Django 3.0.7 on 2020-06-06 21:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('styles', '0001_initial'),
        ('wines', '0004_auto_20200606_2133'),
    ]

    operations = [
        migrations.AddField(
            model_name='wine',
            name='style',
            field=models.ManyToManyField(related_name='wines', to='styles.Style'),
        ),
    ]
