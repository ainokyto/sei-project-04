from django.db import models

LIKE_CHOICES = (
    ('Like', 'Like'),
    ('Unlike', 'Unlike'),
)

class Like(models.Model):
    user = models.ForeignKey('jwt_auth.User', on_delete=models.CASCADE)
    wine = models.ForeignKey('wines.Wine', on_delete=models.CASCADE)
    value = models.CharField(choices=LIKE_CHOICES, default='Like', max_length=10)

    def __str__(self):
        return f'{self.user}'