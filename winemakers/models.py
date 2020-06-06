from django.db import models

class Winemaker(models.Model):
    name = models.CharField(max_length=50, unique=True)
    region = models.CharField(max_length=50)
    owner = models.CharField(max_length=100)
    avg_yields_per_year_btl = models.IntegerField()

    def __str__(self):
        return f'{self.name} - {self.region}, {self.country}'