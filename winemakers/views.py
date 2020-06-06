# pylint: disable=no-member, no-self-use

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound
# from rest_framework.permissions import IsAuthenticatedOrReadOnly #! FOR REVIEWS

from .models import Winemaker
from .serializers import WinemakerSerializer, PopulatedWinemakerSerializer

class WinemakerListView(APIView): # GET ALL

    def get(self, _request):
        winemakers = Winemaker.objects.all() 
        serialized = PopulatedWinemakerSerializer(winemakers, many=True)
        return Response(serialized.data, status=status.HTTP_200_OK)

class WinemakerDetailView(APIView): # GET ONE

    def get(self, _request, pk):
        try:
            winemaker = Winemaker.objects.get(pk=pk)
            serialized = PopulatedWinemakerSerializer(winemaker)
            return Response(serialized.data, status=status.HTTP_200_OK)
        except Winemaker.DoesNotExist:
            raise NotFound()