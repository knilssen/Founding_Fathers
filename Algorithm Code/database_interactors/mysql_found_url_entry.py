'''
Python script that is to familierize myself to the workings about how pyhon interacts
with a Sqlite database, and then ultimatly use this to create a python script to find
and save articles to the database for futher use.

Author: Founding Fathers, Kristian Nilssen
Date: 2/10/2017

Usage:

    python mysql_article_entry.py
'''

import sys
import mysql.connector
from mysql.connector import errorcode

def main(url, title, used, source, post_date, found_date, author, keywords, summary, text, top_image):

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

        add_url = ("INSERT INTO News_Found_Url"
               "(url, title, used, source, post_date, found_date, author, keywords, summary, text, top_image) "
               "VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)")

        data_url = (url, title, used, source, post_date, found_date, author, keywords, summary, text, top_image)

        cursor.execute(add_url, data_url)

        # Make sure data is committed to the database
        cnx.commit()

        cursor.close()


    cnx.close()


if __name__ == "__main__":

    if len(sys.argv) != 3:
        print 'usage: python mysql_article_entry.py [ url ] [ title ] '
    else:
        main(sys.argv[1], sys.argv[2])
