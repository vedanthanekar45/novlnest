from django.shortcuts import render
from django.http import JsonResponse
import requests

# Create your views here.

def search_books (request):
    query = request.GET.get('q', '')
    if not query:
        return JsonResponse({"error": "No query provided"}, status=400)
    
    url = f"https://openlibrary.org/search.json?q={query}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        return JsonResponse(data)
    else:
        return JsonResponse({"error": "Failed to get data from open library"}, status=500)