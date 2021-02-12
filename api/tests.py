from django.http import response
from rest_framework.test import APITestCase
from rest_framework import status
from api.serializer import MoviesSerializer
from api.models import MovieSearchHistory
from users.models import NewUser
from rest_framework.test import APIClient
from django.urls import reverse
from rest_framework.authtoken.models import Token


class MovieHistorySearchTest(APITestCase):
    def setUp(self):

        self.client = APIClient()
        u = NewUser.objects.create_user(
            user_name='user', first_name="user", email='user@foo.com', password='pass')
        u.is_active = True
        u.save()
        resp = self.client.post(
            "/api/token/", {'email': 'user@foo.com', 'password': 'pass'}, format='json')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertTrue('access' in resp.data)
        self.token = resp.data['access']

    def testcase(self):
        response = self.client.get(
            "/api/movies/", HTTP_AUTHORIZATION='JWT {}'.format(self.token))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
