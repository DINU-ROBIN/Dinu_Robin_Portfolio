from django.urls import path
from .views import ResumeDownloadView

app_name = 'resume'

urlpatterns = [
    path('download/', ResumeDownloadView.as_view(), name='download_resume'),
]
