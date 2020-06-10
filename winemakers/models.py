from django.db import models

class Winemaker(models.Model):
    name = models.CharField(max_length=50, unique=True)
    image = models.CharField(max_length=400, blank=True)
    region = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    owner = models.CharField(max_length=100)
    avg_yields_per_year_btl = models.IntegerField(blank=True)

    def __str__(self):
        return f'{self.name} - {self.region}, {self.country}'