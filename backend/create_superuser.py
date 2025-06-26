import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')  # adjust if your settings module is different

try:
    django.setup()
except Exception as e:
    print('Django setup failed:', e)

from django.contrib.auth import get_user_model

User = get_user_model()
username = "robin"
password = "210703"

if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(username=username, password=password)
    print("Superuser 'robin' created!")
else:
    print("Superuser 'robin' already exists.") 