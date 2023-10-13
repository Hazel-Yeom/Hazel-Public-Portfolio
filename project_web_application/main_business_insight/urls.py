# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.ds_home, name='ds_home_page'),
#     # 다른 URL 패턴을 추가할 수 있습니다.
# ]

from django.urls import path
from . import views

urlpatterns = [
    path('datascience_portfolio', views.ds_home, name='ds_home'),

    # path('', views.ds_home, name='ds_home'),
    # path('ani', views.ani_mountain, name='home_ani'),
]

