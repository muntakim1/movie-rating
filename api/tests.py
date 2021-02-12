from django.http import response
from rest_framework.test import APITestCase
from rest_framework import status
from api.serializer import MoviesSerializer
from api.models import MovieSearchHistory


class MovieHistorySearchTest(APITestCase):
    def test_add(self):

        response = self.client.get(
            "/api/movies/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class MovieHistoryPostTest(APITestCase):
    def test_add(self):

        response = self.client.post(
            "/api/movies/", data={
                "title": "Wonder",
                "released": "1901-01-01",
                "genre": "Short, Drama, Fantasy",
                "director": "Mark Brown",
                "imdbrating": "N/A",
                "Production": "N/A",
                "Language": "English",
                "writer": "Mark Brown",
                "plot": "'Wonder', in its most concise terms, is a 2.5 minute short story",
                "favourite": False,
                "year": "2013",
                "user": 1
            })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class MovieHistoryPutTest(APITestCase):
    def test_add(self):
        data = {
            "title": "Wonder",
            "released": "1901-01-01",
            "genre": "Short, Drama, Fantasy",
            "director": "Mark Brown",
            "imdbrating": "N/A",
            "Production": "N/A",
            "Language": "English",
            "writer": "Mark Brown",
            "plot": "'Wonder', in its most concise terms, is a 2.5 minute short story capturing and embellishing the pure awe felt for the natural world as a child. It is a story with a simple goal; to stir ...",
            "poster": "N/A",
            "favourite": True,
            "year": "2013",
            "user": 1
        }
        response = self.client.put(
            "/api/movies/1/", data=data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
