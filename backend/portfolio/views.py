from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Portfolio
from .serializers import PortfolioSerializer

class PortfolioListCreateView(generics.ListCreateAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

class PortfolioDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

@api_view(['GET'])
def test_media(request):
    """Test endpoint to check media files"""
    portfolios = Portfolio.objects.all()
    data = []
    for p in portfolios:
        data.append({
            'id': p.id,
            'title': p.title,
            'has_image': bool(p.image),
            'image_path': str(p.image) if p.image else None,
            'image_url': f"http://127.0.0.1:8000{p.image.url}" if p.image else None,
        })
    return Response(data)
