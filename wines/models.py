from django.db import models

COLOUR_CHOICES = (
    (' ', ' '),
    ('White', 'White'),
    ('Red', 'Red'),
    ('Orange', 'Orange'),
    ('Rosé', 'Rosé'),
)

class Wine(models.Model):
    name = models.CharField(max_length=50)
    image = models.CharField(max_length=400, blank=True)
    colour = models.CharField(choices=COLOUR_CHOICES, default=' ', max_length=10)
    vintage = models.IntegerField(blank=True)
    grape_varieties = models.CharField(max_length=100, blank=True)
    description = models.TextField(max_length=300, blank=True)
    producer = models.ForeignKey('winemakers.Winemaker', related_name='wines', on_delete=models.CASCADE)
    style = models.ManyToManyField('styles.Style', related_name='style', blank=True)
    # likes = models.ManyToManyField('jwt_auth.User', related_name='wine_likes', blank=True)

    def __str__(self):
        return f'{self.name}'