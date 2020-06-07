from django.urls import path
from .views import WineListView, WineDetailView

urlpatterns = [
    path('', WineListView.as_view()),
    path('<int:pk>/', WineDetailView.as_view()),
]