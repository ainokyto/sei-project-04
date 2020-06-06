from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('api/admin/', admin.site.urls),
    path('api/auth/', include('jwt_auth.urls')),
    path('api/winemakers/', include('winemakers.urls')),
]
