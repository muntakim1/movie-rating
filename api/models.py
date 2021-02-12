from django.db import models
from django.conf import settings


class MovieSearchHistory(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    released = models.DateField(blank=True)
    genre = models.CharField(max_length=255, blank=True, null=True)
    director = models.CharField(max_length=255)
    imdbrating = models.CharField(max_length=4)
    Production = models.CharField(max_length=255)
    Language = models.CharField(max_length=255)
    writer = models.TextField()
    plot = models.TextField()
    poster = models.CharField(max_length=255)
    favourite = models.BooleanField(default=False)
    year = models.CharField(max_length=10)
