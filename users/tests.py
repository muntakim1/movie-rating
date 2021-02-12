from django.http import response
from rest_framework.test import APITestCase
from rest_framework import status
from .models import NewUser

from django.test import Client


class MovieHistoryUserSearchTest(APITestCase):

    def test_add(self):
        self.client = Client()
        response = self.client.login(
            email="muntakim1104001@gmail.com", password="172472")

        self.assertEqual(response, False)
