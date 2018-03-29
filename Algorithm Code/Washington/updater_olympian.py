'''

Python script that is to grab all the articles from the source: The Olympian,
more specifically from The Olympians politics section.

Author: Founding Fathers, Kristian Nilssen
Date: 12/14/2017

Usage:

    python grabber_olympian.py [ current_time ]


'''

import sys
import requests
from bs4 import BeautifulSoup
import sys
import mysql.connector
from mysql.connector import errorcode

class article:
    def __init__(self, texts, article_summary, author, title, top_image):
         self.text = texts
         self.summary = article_summary
         self.authors = author
         self.title = title
         self.top_image = top_image

def main(art_id, url):
    # print "\n"
    # print "\n"
    # print "The Olympian: Download"
    # print "\n"
    page = requests.get(url)

    soup = BeautifulSoup(page.content, 'html.parser')
    text_list = ""
    tempListud = {}

    title = soup.find("h3", class_="title").text
    # print "title:   ", title

    author = soup.find("div", class_="byline element-spacing-small").text.split('\n')
    # print author
    author = [author[0][3:].title()]
    print author
    # print author
    # print "author:  ", author

    published_date = soup.find("span", id="publish_date").text.strip()
    # print "publish date/time:  ", published_date

    image = soup.find("div", class_="img-container picture ")
    if image:
        top_image = image.find("source", media="(min-width: 992px)")['srcset'][2:]
        if top_image[0:7] != "http://":
            top_image = "http://" + top_image
    else:
        top_image = 'http://www.theolympian.com/wps/build/images/theolympian/logo-lg.png'

    # print "top image", top_image

    all_text = soup.find("div", id="content-body-")
    text = all_text.find_all("p", class_="")
    for element in text:
        if element.text != "":
            text_list+=(element.text + "\n\n")


    thing = article(text_list, "", author, title, top_image)
    # print thing.text
    # print thing.summary
    # print thing.authors
    # print thing.title
    # print thing.top_image
    # print "olypian downloading worked!", "url:  ", url


    config = {
        'user': 'root',
        'password': 'password',
        'host': '127.0.0.1',
        'database': 'cyp',
        'raise_on_warnings': True,
    }

    try:
        cnx = mysql.connector.connect(**config)

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    else:

        cursor = cnx.cursor()


        update_olympian = ("UPDATE News_articles SET "
                "text=%s, top_image=%s, author=%s"
                "WHERE id=%s")


        data_olympian = (thing.text, thing.top_image, ",".join(thing.authors), str(art_id))

        cursor.execute(update_olympian, data_olympian)


        cnx.commit()

        cursor.close()


    cnx.close()




    return article(text_list, "", author, title, top_image)

if __name__ == "__main__":

    if len(sys.argv) != 1:
        print "Usage: python updater_olympian.py", len(sys.argv)
    else:

        config = {
            'user': 'root',
            'password': 'password',
            'host': '127.0.0.1',
            'database': 'cyp',
            'raise_on_warnings': True,
        }

        try:
            cnx = mysql.connector.connect(**config)

        except mysql.connector.Error as err:
            if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
                print("Something is wrong with your user name or password")
            elif err.errno == errorcode.ER_BAD_DB_ERROR:
                print("Database does not exist")
            else:
                print(err)
        else:

            cursor = cnx.cursor()

        cursor.execute("SELECT id, url FROM News_articles where source = 'The Olympian'")
        data = cursor.fetchall()
        article_count = data
        print article_count

        for articles in article_count:
            try:
                print articles[0]
                main(articles[0], articles[1])
            except:
                print articles[0], articles[1]

        # main(sys.argv[1], sys.argv[2])
