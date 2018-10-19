from django.shortcuts import render, render_to_response, redirect
from django.http import HttpResponseRedirect
from django.contrib import auth
from django.views.generic import View
from .forms import UserForm
from django.db import connection

# from django.core.context_processors import csrf


# Create your views here.
def index(request):
    return render(request, 'News/splash_page.html')

def article(request):
    if (request.GET.get('id')):
        people_dict_list = []
        id_num = request.GET.get('id')
        with connection.cursor() as cursor:
            cursor.execute(("SELECT url, source, post_date, title, author, text, id FROM cyp.News_articles WHERE cyp.News_articles.id = '%s'") % (int(id_num)))
            scrolls = cursor.fetchall()[0]

        with connection.cursor() as cursor_link:
            cursor_link.execute(("SELECT people_id_id, name_mentions FROM cyp.News_article_person WHERE cyp.News_article_person.articles_id_id  = '%s'") % (int(id_num)))
            people_linked = cursor_link.fetchall()

        with connection.cursor() as people_cursor:
            for link in people_linked:
                people_cursor.execute(("SELECT first_name, last_name, party, role, district, counties, state, image FROM cyp.News_people WHERE cyp.News_people.id  = '%s'") % (int(link[0])))
                person_data = people_cursor.fetchall()[0]
                name = person_data[0]+" "+person_data[1]
                person_dict = { 'person_id': str(link[0]), 'name': name.title(), 'party': person_data[2], 'role': person_data[3].title(), 'district': person_data[4], 'counties': person_data[5], 'state': person_data[6], 'image': person_data[7], 'name_mentions': unicode(link[1])}
                people_dict_list.append(person_dict)


        with connection.cursor() as social_cursor:
            social_cursor.execute(("SELECT facebook_shares, reddit_shares, pinterest_pins, linkedin_shares, total_count FROM cyp.News_social_media WHERE cyp.News_social_media.articles_id_id  = '%s'") % (int(id_num)))
            social_counts = social_cursor.fetchall()[0]
            social_media = {'facebook':social_counts[0], 'reddit':social_counts[1], 'pinterest':social_counts[2], 'linkedin':social_counts[3], 'total':(social_counts[0]+social_counts[1]+social_counts[2]+social_counts[3])}

        author = ""
        for stuff in scrolls[4]:
            author += stuff.encode("utf-8").strip("[u']")
        author = author.strip("[u']")

        if len(people_linked) > 1:
            total_people = str(len(people_linked)) + " PEOPLE"
        else:
            total_people = "1 PERSON"

        article_data = {'id_prev': scrolls[6]-1, 'id_next': scrolls[6]+1, 'url': scrolls[0], 'source': scrolls[1], 'post_date': scrolls[2].date(), 'title': scrolls[3], 'author': author, 'texts': scrolls[5], 'top_image': str(scrolls[6]) + ".jpg", 'total_people': total_people}
        return render_to_response('News/Article.html', {'article_data': article_data, 'people': people_dict_list, 'social_media': social_media})
    else:
        return render(request, 'News/Article.html')

def person(request):
    if (request.GET.get('id')):
        id_num = request.GET.get('id')
        with connection.cursor() as cursor:
            cursor.execute(("SELECT * FROM cyp.News_people WHERE cyp.News_people.id = '%s'") % (int(id_num)))
            scrolls = cursor.fetchall()[0]
            ats = ""
            for stuff in scrolls[4]:
                ats += stuff.encode("utf-8").strip("[u']")
            ats = ats.strip("[u']")
        return render_to_response('News/person.html', {'url': scrolls[0], 'source': scrolls[1], 'post_date': scrolls[2], 'title': scrolls[3], 'author': ats, 'texts': scrolls[5], 'top_image': scrolls[6]})
    else:
        return render(request, 'News/person.html')

def state(request, state):
    state = state.title()
    state_to_number_dict = {'Michigan': '26', 'Missouri': '29', 'Georgia': '13', 'South_Carolina': '45', 'Pennsylvania': '42', 'North_Carolina': '37', 'Virginia': '51', 'Washington_DC': '11', 'Rhode_Island': '44', 'Nevada': '32', 'Alaska': '2', 'Oklahoma': '40', 'North_Dakota': '38', 'Wyoming': '8', 'Kentucky': '21', 'Colorado': '56', 'Arizona': '4', 'New_Jersey': '34', 'Hawaii': '15', 'California': '6', 'Oregon': '41', 'Utah': '49', 'West_Virginia': '54', 'Ohio': '39', 'Florida': '12', 'Massachusetts': '25', 'Alabama': '1', 'New_York': '36', 'Texas': '48', 'Indiana': '18', 'Minnesota': '27', 'Maryland': '24', 'New_Hampshire': '33', 'Connecticut': '9', 'New_Mexico': '35', 'Delaware': '10', 'Washington': '53', 'Iowa': '19', 'Montana': '30', 'Arkansas': '5', 'Nebraska': '31', 'Maine': '23', 'Louisiana': '22', 'Mississippi': '28', 'South_Dakota': '46', 'Idaho': '16', 'Wisconsin': '55', 'Kansas': '20', 'Vermont': '50', 'Tennessee': '47', 'Illinois': '17'}

    number_to_state_dict = {'24': 'Maryland', '25': 'Massachusetts', '26': 'Michigan', '27': 'Minnesota', '20': 'Kansas', '21': 'Kentucky', '22': 'Louisiana', '23': 'Maine', '28': 'Mississippi', '29': 'Missouri', '2': 'Alaska', '4': 'Arizona', '6': 'California', '8': 'Wyoming', '11': 'Washington DC', '10': 'Delaware', '13': 'Georgia', '12': 'Florida', '15': 'Hawaii', '17': 'Illinois', '16': 'Idaho', '19': 'Iowa', '54': 'West Virginia', '56': 'Colorado', '51': 'Virginia', '50': 'Vermont', '53': 'Washington', '55': 'Wisconsin', '18': 'Indiana', '48': 'Texas', '49': 'Utah', '46': 'South Dakota', '47': 'Tennessee', '44': 'Rhode Island', '45': 'South Carolina', '42': 'Pennsylvania', '40': 'Oklahoma', '41': 'Oregon', '1': 'Alabama', '5': 'Arkansas', '9': 'Connecticut', '39': 'Ohio', '38': 'North Dakota', '33': 'New Hampshire', '32': 'Nevada', '31': 'Nebraska', '30': 'Montana', '37': 'North Carolina', '36': 'New York', '35': 'New Mexico', '34': 'New Jersey'}


    state_info = {"state_number":state_to_number_dict[state], "state_name":number_to_state_dict[state_to_number_dict[state]], "state_name_no_space":state}

    representatives = []

    with connection.cursor() as person_link:
        person_link.execute(("SELECT id, first_name, last_name, party FROM cyp.News_people WHERE cyp.News_people.state  = '%s'") % (state))
        people_linked = person_link.fetchall()
        for database_returned_people in people_linked:
            # print database_returned_people
            representative_name = database_returned_people[1]+" "+database_returned_people[2]
            representatives.append({"id": database_returned_people[0], "name": representative_name.title(), "party": database_returned_people[3], "state": state, "image": "images/" + state + "/" + str(database_returned_people[0]) + ".jpg"})


    if (request.GET.get('page')):
        id_num = int(request.GET.get('page'))
    else:
        id_num = 1

    with connection.cursor() as cursor:
        cursor.execute("SELECT News_articles.id, url, source, post_date, title FROM cyp.News_articles ORDER BY cyp.News_articles.post_date DESC")
        scrolls = cursor.fetchall()
        scrolls_length = len(scrolls)
        max_page_num_leftover = scrolls_length%32
        max_page_num = (scrolls_length/32)
        # if max_page_num_leftover != 0:
        #     max_page_num += 1

        scroll=[]
        if scrolls_length < 32:
            article_pool_size = len(scrolls)
            article_pool_size_small = 0
        else:
            article_pool_size = id_num * 32
            article_pool_size_small = ((id_num-1) * 32)
        for x in range(article_pool_size_small, article_pool_size):
            people_list=[]
            with connection.cursor() as cursor_link:
                cursor_link.execute(("SELECT people_id_id FROM cyp.News_article_person WHERE cyp.News_article_person.articles_id_id  = '%s'") % (scrolls[x][0]))
                people_linked = cursor_link.fetchall()
                with connection.cursor() as people_cursor:
                    for link in people_linked:
                        people_cursor.execute(("SELECT first_name, last_name, image, id, state FROM cyp.News_people WHERE cyp.News_people.id  = '%s'") % (int(link[0])))
                        person_data = people_cursor.fetchall()[0]
                        person_name = person_data[0]+" "+person_data[1]
                        person_image = person_data[2]
                        person_dict = {"name": person_name.title, "image": person_image, "id": str(person_data[3]), "state": person_data[4]}
                        people_list.append(person_dict)

            scroll.append({'id': ("/article/?id=" + str(scrolls[x][0])), 'url': scrolls[x][1], 'source': scrolls[x][2], 'post_date': (scrolls[x][3]).date(), 'title': scrolls[x][4], 'top_image': str(scrolls[x][0]) + ".jpg", 'people': people_list, 'people_amount': len(people_linked)})

    if max_page_num < 5:
        page_start = 1
        page_end = max_page_num
    else:
        if id_num < (max_page_num - 2):
            if id_num <= 3:
                page_start = 1
                page_end = 5
            else:
                page_start = id_num - 2
                page_end = id_num + 2
        else:
            page_start = max_page_num - 4
            page_end = max_page_num


        page_data = {'page_number': id_num, 'page_start': page_start, 'page_end': page_end}

    return render_to_response('News/state.html', {'scrolls': scroll, 'page_data': page_data, 'state_info': state_info, 'representatives': representatives})

def recent_news(request):
    if (request.GET.get('page')):
        id_num = int(request.GET.get('page'))
    else:
        id_num = 1

    with connection.cursor() as cursor:
        cursor.execute("SELECT News_articles.id, url, source, post_date, title FROM cyp.News_articles ORDER BY cyp.News_articles.post_date DESC")
        scrolls = cursor.fetchall()
        scrolls_length = len(scrolls)
        max_page_num_leftover = scrolls_length%32
        max_page_num = (scrolls_length/32)
        # if max_page_num_leftover != 0:
        #     max_page_num += 1

        scroll=[]
        if scrolls_length < 32:
            article_pool_size = len(scrolls)
            article_pool_size_small = 0
        else:
            article_pool_size = id_num * 32
            article_pool_size_small = ((id_num-1) * 32)
        for x in range(article_pool_size_small, article_pool_size):
            people_list=[]
            with connection.cursor() as cursor_link:
                cursor_link.execute(("SELECT people_id_id FROM cyp.News_article_person WHERE cyp.News_article_person.articles_id_id  = '%s'") % (scrolls[x][0]))
                people_linked = cursor_link.fetchall()
                with connection.cursor() as people_cursor:
                    for link in people_linked:
                        people_cursor.execute(("SELECT first_name, last_name, image, id, state FROM cyp.News_people WHERE cyp.News_people.id  = '%s'") % (int(link[0])))
                        person_data = people_cursor.fetchall()[0]
                        person_name = person_data[0]+" "+person_data[1]
                        person_image = person_data[2]
                        person_dict = {"name": person_name, "image": person_image, "id": str(person_data[3]), "state": person_data[4]}
                        people_list.append(person_dict)
            # print people_list
            # print "id:", scrolls[x][0]
            # print "date shit:", (scrolls[x][3]).date()
            scroll.append({'id': ("/article/?id=" + str(scrolls[x][0])), 'url': scrolls[x][1], 'source': scrolls[x][2], 'post_date': (scrolls[x][3]).date(), 'title': scrolls[x][4], 'top_image': str(scrolls[x][0]) + ".jpg", 'people': people_list, 'people_amount': len(people_linked)})

    if max_page_num < 5:
        page_start = 1
        page_end = max_page_num
    else:
        if id_num < (max_page_num - 2):
            if id_num <= 3:
                page_start = 1
                page_end = 5
            else:
                page_start = id_num - 2
                page_end = id_num + 2
        else:
            page_start = max_page_num - 4
            page_end = max_page_num


        page_data = {'page_number': id_num, 'page_start': page_start, 'page_end': page_end}

    return render_to_response('News/recent_news.html', {'scrolls': scroll, 'page_data': page_data})

#def login(request):
    # c = {}
    # c.update(csrf(request))
    #return render_to_response('CYP/Login.html')


def aboutUs(request):
    return render(request, 'News/about.html')

def splash_page(request):
    return render(request, 'News/splash_page.html')

def service(request):
    return render(request, "News/service.html")

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
