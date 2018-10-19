'''

Python script that is to grab all the articles from the source: Crosscut,
specifically from The Crosscut politics section.

Author: Founding Fathers, Kristian Nilssen
Date: 12/14/2017

Usage:

    python grabber_crosscut_top_image_downloader.py

'''
import urllib2
import sys
import time
import date_subtracter
from newspaper import Article
from bs4 import BeautifulSoup

import sys
import mysql.connector
from mysql.connector import errorcode
import requests


def main():
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

        cursor.execute("SELECT id, url, top_image FROM News_articles WHERE source = 'Crosscut'")
        data = cursor.fetchall()
        # data = data[0]
        # print data

        opener = urllib2.build_opener()
        opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36')]

        for url in data:
            print url[2]

            response = opener.open(url[2])
            htmlData = response.read()
            f = open("/Users/kristiannilssen/Documents/GitHub/Founding_Fathers/CYP/CYP/static/images/article_images/" + str(url[0]) + ".jpg",'wb')
            f.write(htmlData)
            f.close()


        # Make sure data is committed to the database
        cnx.commit()

        cursor.close()
        cnx.close()

if __name__ == "__main__":

    if len(sys.argv) >2:
        print "Usage: python grabber_ksl.py [ current_time ]"
    else:
        main()
