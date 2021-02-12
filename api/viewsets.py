from django.db.models.query import QuerySet
from rest_framework import viewsets
from rest_framework import permissions
from .serializer import MovieSerializer, MoviesSerializer
from .models import MovieSearchHistory
from users.models import NewUser
import requests
import json
import datetime
import re


class MovieViewset(viewsets.ModelViewSet):

    serializer_class = MoviesSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = MovieSearchHistory.objects.filter(
            user=self.request.user.pk).order_by('released').distinct()
        return queryset


class MovieLookupViewset(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):

        title = self.request.query_params.get('title')
        year = self.request.query_params.get('year')
        check = MovieSearchHistory.objects.filter(
            title__regex=r'^{}'.format(title.split()), year=year).exists()

        print(check)
        if check == False:
            movie = MovieSearchHistory()
            data = requests.get(
                "http://www.omdbapi.com/?t={}&y={}&apikey=8408502b".format(title.replace(" ", "+"), year))
            data = json.loads(data.text)
            movie.title = data['Title']
            movie.user = NewUser.objects.get(pk=self.request.user.pk)
            if data['Released'] != "N/A":
                movie.released = datetime.datetime.strptime(
                    re.sub(r"(st|th|rd)", "", data['Released']), "%d %b %Y").strftime("%Y-%m-%d")
            else:
                movie.released = "1901-1-1"
            movie.genre = data['Genre']
            movie.director = data['Director']
            movie.imdbrating = data['imdbRating']
            movie.Production = data['Production']
            movie.Language = data['Language']
            movie.writer = data['Writer']
            movie.plot = data['Plot']
            movie.poster = data['Poster']
            movie.year = data['Year']
            movie.save()
        queryset = MovieSearchHistory.objects.filter(year=year).filter(
            title__regex=r'{}'.format(title.split())).order_by('released')[:1]
        return queryset
