from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Portfolio
from .serializers import PortfolioSerializer
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response

class PortfolioListCreateView(APIView):
    def get(self, request):
        portfolios = Portfolio.objects.all()
        print(f"Found {portfolios.count()} portfolio items")  # Debug print
        serializer = PortfolioSerializer(portfolios, many=True, context={'request': request})
        return Response(serializer.data)

class PortfolioDetailView(APIView):
    def get(self, request, pk):
        return Response({})

@api_view(['GET'])
def test_media(request):
    return HttpResponse("Test Media")

@api_view(['GET'])
def test_api(request):
    """Test endpoint to check if API is working"""
    return Response({
        'message': 'API is working!',
        'portfolio_count': Portfolio.objects.count(),
        'sample_portfolios': list(Portfolio.objects.values('id', 'title')[:5])
    })

# def test_media(request):
#     """Test endpoint to check media files"""
#     portfolios = Portfolio.objects.all()
#     data = []
#     for p in portfolios:
#         data.append({
#             'id': p.id,
#             'title': p.title,
#             'has_image': bool(p.image),
#             'image_path': str(p.image) if p.image else None,
#             'image_url': f"http://127.0.0.1:8000{p.image.url}" if p.image else None,
#         })
#     return Response(data)
def home(request):
    return HttpResponse("Portfolio Home")