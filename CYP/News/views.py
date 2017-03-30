from django.shortcuts import render

def newsHome(request):
    return render(request, 'news/home.html')
