'''
Python script that is to familierize myself to the workings about how pyhon interacts
with a Sqlite database, and then ultimatly use this to create a python script to find
and save articles to the database for futher use.

Author: Founding Fathers, Kristian Nilssen
Date: 2/10/2017

Usage:

    python mysql_article_person_link.py
'''

import sys
import mysql.connector
from mysql.connector import errorcode

def main(article_id, article_people, article_total_count_mentions):

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

        add_article_person = ("INSERT INTO News_article_person "
               "(articles_id_id, people_id_id, name_mentions, mention_percentage, article_total_count_mentions) "
               "VALUES (%s, %s, %s, %s, %s)")

        for person in article_people:
            # person = person.split()
            # print person
            mention_percentage = round((float(article_people[person])/float(article_total_count_mentions)), 4) * 100
            lname = " ".join(person.split()[1:])
            fname = person.split()[0]
            # print fname, lname
            cursor.execute(("SELECT id FROM News_people WHERE last_name = '%s' AND first_name = '%s'") % (lname, fname))
            data = cursor.fetchall()
            try:
                data = data[0]
            except:
                print "\n"
                print "     ERROR: PROBLEM WITH MYSQL_ARTICLE_PERSON_LINK"
                print "            MOST LIKELY HAS TO DO WITH PERSON NOT BEING IN DATABASE TABLE NEWS_PEOPLE"
                print "\n"
                print "                                        ARTICLE_ID:                      ", article_id
                print "                                        ARTICLE_PEOPLE:                  ", article_people
                print "                                        PERSON:                          ", fname + lname
                print "                                        MENTION_PERCENTAGE:              ", mention_percentage
                print "                                        ARTICLE_TOTAL_COUNT_MENTIONS:    ", article_total_count_mentions
                print "                                        ERROR ON LINE 55:"
                print "                                                             data = data[0]"
                print "                                        PRINT DATA:"
                print "                                                          ", data
                print "\n"
            # print person
            # # print data
            else:
                data_article_person = (article_id, data[0], article_people[person], mention_percentage, article_total_count_mentions)
                cursor.execute(add_article_person, data_article_person)

        cnx.commit()
        cursor.close()
    cnx.close()

if __name__ == "__main__":

    if len(sys.argv) != 4:
        print 'usage: python mysql_article_person_link.py [ article_id ] [ people ] [ article_total_count_mentions ]'
    else:
        # 200 'cathy mcmorris rodgers' 2 4
        main(argv[1],argv[2],argv[4])
        # main(209, {u'jay inslee': 2}, 0.0, 5)
