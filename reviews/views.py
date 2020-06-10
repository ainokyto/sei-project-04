from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import NotFound, PermissionDenied
#! from rest_framework.permissions import IsAuthenticated


from .models import Review
from .serializers import ReviewSerializer, PopulatedReviewSerializer

class ReviewListView(APIView):

    #! permission_classes = (IsAuthenticated, )

    def get(self, _request):
        reviews = Review.objects.all()
        serialized = PopulatedReviewSerializer(reviews, many=True)
        return Response(serialized.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data['owner'] = request.user.id
        created_review = ReviewSerializer(data=request.data)
        if created_review.is_valid():
            created_review.save()
            return Response(created_review.data, status=status.HTTP_201_CREATED)
        return Response(created_review.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class ReviewDetailView(APIView):

    #! permission_classes = (IsAuthenticated, )

    def get_review(self, pk):
        try:
            return Review.objects.get(pk=pk)
        except Review.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        review = self.get_review(pk) 
        serialized = PopulatedReviewSerializer(review)
        return Response(serialized.data)

    def is_review_owner(self, review, user): #pass the review you're trying to edit or delete, if they're not the same person, return permission denied
        if review.owner.id != user.id:
            raise PermissionDenied()

    def delete(self, request, pk):
        review_to_delete = self.get_review(pk)
        self.is_review_owner(review_to_delete, request.user)
        review_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        review_to_edit = self.get_review(pk)
        self.is_review_owner(review_to_edit, request.user)
        request.data['owner'] = request.user.id
        edited_review = ReviewSerializer(review_to_edit, data=request.data)
        if edited_review.is_valid():
            edited_review.save()
            return Response(edited_review.data, status=status.HTTP_202_ACCEPTED)
        return Response(edited_review.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
