'''
Python script that is to familierize myself to the workings about how pyhon interacts
with a Sqlite database, and then ultimatly use this to create a python script to find
and save articles to the database for futher use.

Author: Founding Fathers, Kristian Nilssen
Date: 2/10/2017

Usage:

    python mysql_article_entry.py
'''
import urllib2
import requests
import sys
import mysql.connector
from mysql.connector import errorcode

def main(url, source, post_date, found_date, title, author, keywords, summary, text, top_image):

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

        add_article = ("INSERT INTO News_articles "
               "(url, source, post_date, found_date, title, author, keywords, summary, text, top_image) "
               "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)")

        # print "Post_date from mysql_article_entry:", post_date

        data_article = (url, source, post_date, found_date, title, author, keywords, summary, text, top_image)

        # Insert new employee
        cursor.execute(add_article, data_article)

        article_id = cursor.lastrowid



        # add_social = ("INSERT INTO News_social_media "
        #        "() "
        #        "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)")

        # Make sure data is committed to the database
        cnx.commit()

        cursor.close()


    cnx.close()

    opener = urllib2.build_opener()
    opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36')]

    try:
        response = opener.open(top_image)
        htmlData = response.read()
        f = open("/Users/kristiannilssen/Documents/GitHub/Founding_Fathers/CYP/CYP/static/images/article_images/" + str(article_id) + ".jpg",'wb')
        f.write(htmlData)
        f.close()
        # urllib.urlretrieve(top_image, "/Users/kristiannilssen/Documents/GitHub/Founding_Fathers/CYP/CYP/static/images/article_images/" + str(article_id) + ".jpg")
    except:
        print "Error downloading image on url:", url, "     Image Url:", top_image
        return int(article_id)
    # print image[1]
    # print "/Users/kristiannilssen/Documents/GitHub/Founding_Fathers/CYP/CYP/static/images/article_images/" + str(image[0]) + ".jpg"
    # print "\n"

    return int(article_id)


if __name__ == "__main__":

    if len(sys.argv) != 8:
        print 'usage: python mysql_article_entry.py [ url ] [ source ] [ post_date ] [ found_date ] [ title ] [ author ] [ keywords ] [ summary ] [ text ]'
    else:
        main(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6], sys.argv[7], sys.argv[8], sys.argv[9], sys.argv[10], sys.argv[11])
