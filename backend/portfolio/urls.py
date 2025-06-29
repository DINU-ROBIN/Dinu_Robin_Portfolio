from django.urls import path

from . import views


app_name = 'portfolio'

urlpatterns = [
    path('', views.home, name='home'),
    path('portfolio/', views.PortfolioListCreateView.as_view(), name='portfolio-list'),
    path('portfolio/<int:pk>/', views.PortfolioDetailView.as_view(), name='portfolio-detail'),
    path('test-media/', views.test_media, name='test-media'),  # Add this
    path('test/', views.test_api, name='test-api'),  # Add this
]
