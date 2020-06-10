# Generated by Django 3.0.7 on 2020-06-08 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wines', '0003_auto_20200608_1239'),
    ]

    operations = [
        migrations.AddField(
            model_name='wine',
            name='vintage',
            field=models.IntegerField(blank=True, default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='wine',
            name='colour',
            field=models.CharField(choices=[(' ', ' '), ('White', 'White'), ('Red', 'Red'), ('Orange', 'Orange'), ('Rosé', 'Rosé')], default=' ', max_length=10),
        ),
    ]
