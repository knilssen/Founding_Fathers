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
        cursor.execute("SELECT url, source, post_date, title FROM cyp.News_articles JOIN cyp.News_article_person on cyp.News_articles.id = cyp.News_article_person.articles_id_id WHERE cyp.News_article_person.people_id_id = 110 ORDER BY cyp.News_article_person.weight LIMIT 9")
        scrolls = cursor.fetchall()
        scroll=[]
        scroll.append({'url': scrolls[0][0], 'source': scrolls[0][1], 'post_date': scrolls[0][2], 'title': scrolls[0][3]})
        scroll.append({'url': scrolls[1][0], 'source': scrolls[1][1], 'post_date': scrolls[1][2], 'title': scrolls[1][3]})
        scroll.append({'url': scrolls[2][0], 'source': scrolls[2][1], 'post_date': scrolls[2][2], 'title': scrolls[2][3]})
        scroll.append({'url': scrolls[3][0], 'source': scrolls[3][1], 'post_date': scrolls[3][2], 'title': scrolls[3][3]})
        scroll.append({'url': scrolls[4][0], 'source': scrolls[4][1], 'post_date': scrolls[4][2], 'title': scrolls[4][3]})
        scroll.append({'url': scrolls[5][0], 'source': scrolls[5][1], 'post_date': scrolls[5][2], 'title': scrolls[5][3]})
        scroll.append({'url': scrolls[6][0], 'source': scrolls[6][1], 'post_date': scrolls[6][2], 'title': scrolls[6][3]})
        scroll.append({'url': scrolls[7][0], 'source': scrolls[7][1], 'post_date': scrolls[7][2], 'title': scrolls[7][3]})
        scroll.append({'url': scrolls[8][0], 'source': scrolls[8][1], 'post_date': scrolls[8][2], 'title': scrolls[8][3]})
    return render_to_response('News/news_scroll_one.html', {'scrolls': scroll})

def news_scroll_two(request):
    with connection.cursor() as cursor:
        cursor.execute("SELECT url, source, post_date, title FROM cyp.News_articles JOIN cyp.News_article_person on cyp.News_articles.id = cyp.News_article_person.articles_id_id WHERE cyp.News_article_person.people_id_id = 105 ORDER BY cyp.News_article_person.weight LIMIT 9")
        scrolls = cursor.fetchall()
        scroll=[]
        scroll.append({'url': scrolls[0][0], 'source': scrolls[0][1], 'post_date': scrolls[0][2], 'title': scrolls[0][3]})
        scroll.append({'url': scrolls[1][0], 'source': scrolls[1][1], 'post_date': scrolls[1][2], 'title': scrolls[1][3]})
        scroll.append({'url': scrolls[2][0], 'source': scrolls[2][1], 'post_date': scrolls[2][2], 'title': scrolls[2][3]})
        scroll.append({'url': scrolls[3][0], 'source': scrolls[3][1], 'post_date': scrolls[3][2], 'title': scrolls[3][3]})
        scroll.append({'url': scrolls[4][0], 'source': scrolls[4][1], 'post_date': scrolls[4][2], 'title': scrolls[4][3]})
        scroll.append({'url': scrolls[5][0], 'source': scrolls[5][1], 'post_date': scrolls[5][2], 'title': scrolls[5][3]})
        scroll.append({'url': scrolls[6][0], 'source': scrolls[6][1], 'post_date': scrolls[6][2], 'title': scrolls[6][3]})
        scroll.append({'url': scrolls[7][0], 'source': scrolls[7][1], 'post_date': scrolls[7][2], 'title': scrolls[7][3]})
        scroll.append({'url': scrolls[8][0], 'source': scrolls[8][1], 'post_date': scrolls[8][2], 'title': scrolls[8][3]})
    return render_to_response('News/news_scroll_two.html', {'scrolls': scroll})

def news_scroll_three(request):
    with connection.cursor() as cursor:
        cursor.execute("SELECT url, source, post_date, title FROM cyp.News_articles JOIN cyp.News_article_person on cyp.News_articles.id = cyp.News_article_person.articles_id_id WHERE cyp.News_article_person.people_id_id = 106 ORDER BY cyp.News_article_person.weight LIMIT 9")
        scrolls = cursor.fetchall()
        scroll=[]
        scroll.append({'url': scrolls[0][0], 'source': scrolls[0][1], 'post_date': scrolls[0][2], 'title': scrolls[0][3]})
        scroll.append({'url': scrolls[1][0], 'source': scrolls[1][1], 'post_date': scrolls[1][2], 'title': scrolls[1][3]})
        scroll.append({'url': scrolls[2][0], 'source': scrolls[2][1], 'post_date': scrolls[2][2], 'title': scrolls[2][3]})
        scroll.append({'url': scrolls[3][0], 'source': scrolls[3][1], 'post_date': scrolls[3][2], 'title': scrolls[3][3]})
        scroll.append({'url': scrolls[4][0], 'source': scrolls[4][1], 'post_date': scrolls[4][2], 'title': scrolls[4][3]})
        scroll.append({'url': scrolls[5][0], 'source': scrolls[5][1], 'post_date': scrolls[5][2], 'title': scrolls[5][3]})
        scroll.append({'url': scrolls[6][0], 'source': scrolls[6][1], 'post_date': scrolls[6][2], 'title': scrolls[6][3]})
        scroll.append({'url': scrolls[7][0], 'source': scrolls[7][1], 'post_date': scrolls[7][2], 'title': scrolls[7][3]})
        scroll.append({'url': scrolls[8][0], 'source': scrolls[8][1], 'post_date': scrolls[8][2], 'title': scrolls[8][3]})
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
