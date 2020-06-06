from django.urls import path
from .views import WinemakerListView, WinemakerDetailView

urlpatterns = [
    path('', WinemakerListView.as_view()),
    path('<int:pk>/', WinemakerDetailView.as_view()),

]