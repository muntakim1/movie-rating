from django.http import response
from rest_framework.test import APITestCase
from rest_framework import status
from api.serializer import MoviesSerializer
from api.models import MovieSearchHistory


class MovieHistorySearchTest(APITestCase):
    def test_add(self):

        response = self.client.post(
            "/api/token/", {"email": "muntakim1104001@gmail.com", "password": "172472"})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
