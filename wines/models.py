from django.db import models

class Wine(models.Model):
    name = models.CharField(max_length=50)
    colour = models.CharField(max_length=20)
    grape_varieties = models.CharField(max_length=100, blank=True)
    description = models.CharField(max_length=300, blank=True)
    producer = models.ForeignKey(
        'winemakers.Winemaker',
        related_name='wines',
        on_delete=models.CASCADE
    )
    style = models.ManyToManyField(
        'styles.Style',
        related_name='style'
    )

    def __str__(self):
        return f'{self.name}'