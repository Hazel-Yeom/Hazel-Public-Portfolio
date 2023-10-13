from django.urls import path, include
from . import views


# urlpatterns = [
#     path('', views.cross_sell, name='cross_sell'),
#     # path('cross-sell/', include('main_crosssell.urls')),
# ]


urlpatterns = [
    path('cross_sell/', views.cross_sell, name='cross_sell'),
]