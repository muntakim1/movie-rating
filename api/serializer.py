from .models import MovieSearchHistory
from rest_framework import serializers


class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieSearchHistory
        fields = "__all__"


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieSearchHistory
        fields = "__all__"
