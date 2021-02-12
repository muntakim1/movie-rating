from rest_framework import routers
from .viewsets import MovieViewset, MovieLookupViewset

router = routers.DefaultRouter()
router.register(r'movies', MovieViewset, basename='mymodel')
router.register(r'single-movie', MovieLookupViewset, basename='MyModel')
