from django.shortcuts import render, render_to_response, redirect
from django.http import HttpResponseRedirect
from django.contrib import auth
from django.views.generic import View
from .forms import UserForm
from django.db import connection

# from django.core.context_processors import csrf


# Create your views here.
def index(request):
    return render(request, 'News/home.html')

def aboutUs (request):
    return render(request, 'News/about.html')

def news_scroll_one(request):
    with connection.cursor() as cursor:
        cursor.execute("SELECT News_articles.id, url, source, post_date, title FROM cyp.News_articles JOIN cyp.News_article_person on cyp.News_articles.id = cyp.News_article_person.articles_id_id WHERE cyp.News_article_person.people_id_id = 110 ORDER BY cyp.News_article_person.weight DESC")
        scrolls = cursor.fetchall()
        scroll=[{},{},{},{},{},{},{},{},{}]
        if len(scrolls) < 9:
            article_pool_size = len(scrolls)
        else:
            article_pool_size = 9
        for x in range(0,article_pool_size):
            scroll[x].update({'id': ("/" + str(scrolls[x][0])), 'url': scrolls[x][1], 'source': scrolls[x][2], 'post_date': scrolls[x][3], 'title': scrolls[x][4]})
    return render_to_response('News/news_scroll_one.html', {'scrolls': scroll})

def news_scroll_two(request):
    with connection.cursor() as cursor:
        cursor.execute("SELECT url, source, post_date, title FROM cyp.News_articles JOIN cyp.News_article_person on cyp.News_articles.id = cyp.News_article_person.articles_id_id WHERE cyp.News_article_person.people_id_id = 105 ORDER BY cyp.News_article_person.weight DESC")
        scrolls = cursor.fetchall()
        scroll=[{},{},{},{},{},{},{},{},{}]
        if len(scrolls) < 9:
            article_pool_size = len(scrolls)
        else:
            article_pool_size = 9
        for x in range(0,article_pool_size):
            scroll[x].update({'url': scrolls[x][0], 'source': scrolls[x][1], 'post_date': scrolls[x][2], 'title': scrolls[x][3]})
    return render_to_response('News/news_scroll_two.html', {'scrolls': scroll})

def news_scroll_three(request):
    with connection.cursor() as cursor:
        cursor.execute("SELECT url, source, post_date, title FROM cyp.News_articles JOIN cyp.News_article_person on cyp.News_articles.id = cyp.News_article_person.articles_id_id WHERE cyp.News_article_person.people_id_id = 106 ORDER BY cyp.News_article_person.weight DESC")
        scrolls = cursor.fetchall()
        scroll=[{},{},{},{},{},{},{},{},{}]
        if len(scrolls) < 9:
            article_pool_size = len(scrolls)
        else:
            article_pool_size = 9
        for x in range(0,article_pool_size):
            scroll[x].update({'url': scrolls[x][0], 'source': scrolls[x][1], 'post_date': scrolls[x][2], 'title': scrolls[x][3]})
    return render_to_response('News/news_scroll_three.html', {'scrolls': scroll})


#def login(request):
    # c = {}
    # c.update(csrf(request))
    #return render_to_response('CYP/Login.html')

def auth_view(request):
    username = request.POST.get('username','')
    password = request.POST.get('password', '')
    user = auth.authenticate(username = username, password=password)
    if user is not None:
        auth.login(request, user)
        return HttpResponseRedirect('accounts/loggedin')
        # This is were we will swith to the other app
    else:
        return HttpResponseRedirect('accounts/invalid')
def loggedin(request):
    return render_to_response('news/home.html', {'fullname' : request.user.username})

def logout(request):
    auth.logout(request)
    return render_to_response('CYP/home.html')

def invalid(request):
    return render_to_response('CYP/invalid_login.html')

class UserFormView(View):
    for_class = UserForm
    template_name = 'CYP/Registartion.html'
    # c = {}
    # c.update(csrf(request))
    #display blank form
    def get(self, request):
        form = self.form_class(None)
        return render(request, self.template_name, {'form' : form})

    def post(self, request):
        form = self.form_class(request.POST)

        if form.is_valid():
            user = form.save(commit = False)
            #normalizing data
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user.set_password(password)
            user.save()
            user = auth.authenticate(username = username, password=password)
            if user is not None:
                if user.is_active:
                    auth.login(request, user)
                    return redirect('News/home.html')
