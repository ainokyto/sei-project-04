from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Review(models.Model):

    rating = models.PositiveSmallIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    content = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(
        'jwt_auth.User', 
        related_name='reviews', 
        on_delete=models.CASCADE
    )
    wine = models.ForeignKey(
        'wines.Wine',
        related_name='reviews',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return f'Review {self.id} - Wine {self.wine}'