from django.urls import path

from . import views


app_name = 'portfolio'

urlpatterns = [
    path('', views.home, name='home'),
    path('api/portfolio/', views.PortfolioListCreateView.as_view(), name='portfolio-list'),
    path('api/portfolio/<int:pk>/', views.PortfolioDetailView.as_view(), name='portfolio-detail'),
    path('api/test-media/', views.test_media, name='test-media'),  # Add this
]
