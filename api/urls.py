from django.urls import include, path, re_path
from .router import router
urlpatterns = [
    path('', include(router.urls)),

]
