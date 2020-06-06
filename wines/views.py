from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound

from .models import Wine
from .serializers import PopulatedWineSerializer

class WineListView(APIView):

    def get(self, _request):
        wines = Wine.objects.all()
        serialized = PopulatedWineSerializer(wines, many=True)
        return Response(serialized.data, status=status.HTTP_200_OK)

class WineDetailView(APIView): # GET ONE

    def get(self, _request, pk):
        try:
            wine = Wine.objects.get(pk=pk)
            serialized = PopulatedWineSerializer(wine)
            return Response(serialized.data, status=status.HTTP_200_OK)
        except Wine.DoesNotExist:
            raise NotFound()