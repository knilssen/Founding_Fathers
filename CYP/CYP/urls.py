"""CYP URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.views.generic import DetailView
from django.contrib import admin
# from django.conf.urls import path, include
from . import views
from News import models


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', views.index),
    url(r'^aboutUS/$', views.aboutUs),
    url(r'^state$/$', views.state),
    url(r'^recent_news/$', views.recent_news),
    url(r'^splash_page/$', views.splash_page),
    url(r'^service.html$', views.service),
    url(r'^article/$', views.article),
    url(r'^article/(?P<pk>\d+)$', views.article),
    url(r'^person/$', views.person),
    url(r'^person/(?P<pk>\d+)$', views.person),

    url(r'^state/(?P<state>[-\w]+)/$', views.state),
    url(r'^state/(?P<pk>\d+)$', views.state),



    # url(r'^(?P<pk>\d+)$', DetailView.as_view(model=models.Articles, template_name='News/Article.html'))
    # url(r'^login/$', views.login, name = 'login'),
    #url(r'^accounts/login$', views.login, name = 'login'),
    #url(r'^accounts/auth$', views.auth_view, name = 'auth_view'),
    #url(r'^accounts/logout$', views.logout, name = 'logout'),
    #url(r'^accounts/loggedin$', views.loggedin, name = 'loggedin'),
    #url(r'^accounts/invalid$', views.invalid, name = 'invalid'),
    #url(r'^accounts/register$', views.UserFormView, name ='register')


    # url(r'^(?P<pk>\d+)$', views.article, name = 'Article'),

]
