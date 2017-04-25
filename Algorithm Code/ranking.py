'''
Python script that is to perform a ranking algorithm to give links between people and articles an overarching rank value
that will be used to display its relevency and importance to that link.

Loosly based on facebooks EdgeRank algorithm

for the edges e: Ue * We * De

U: Affinity score between person of interest and article
W: weight of that edge
D: Time decay factor -> (Ue We)/(Time+2)Gravity of feed


Author: Founding Fathers, Kristian Nilssen
Date: 3/31/2017

Usage:

    python ranking.py
'''

import sys
import math
import mysql.connector
import datetime as dt
from mysql.connector import errorcode

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

        cursor.execute(("SELECT * FROM News_article_person"))
        article_person_link_data = cursor.fetchall()
        # print article_person_link_data
        for link in article_person_link_data:
            total_shares = 0
            cursor.execute(("SELECT * FROM News_article_based_weights WHERE articles_id = '%s'") % (link[0]))
            article_based_weights_data = cursor.fetchall()[0]
            cursor.execute(("SELECT * FROM News_social_media WHERE articles_id = '%s'") % (link[0]))
            social_media_data = (cursor.fetchall())[0]
            cursor.execute(("SELECT post_date, url, source, keywords, summary FROM News_articles WHERE id = '%s'") % (link[0]))
            articles_data = (cursor.fetchall())[0]
            cursor.execute(("SELECT first_name, last_name FROM News_people WHERE id = '%s'") % (link[1]))
            name_data = (cursor.fetchall())[0]

            total_shares = social_media_data[1] + social_media_data[3] + social_media_data[5] + social_media_data[6]

            p = (math.log10(math.pow((link[4] + 1), 100)) / 200)

            if total_shares == 0:
                total_shares = total_shares + link[4] + 1
            if total_shares == 1:
                total_shares = total_shares + 1
            if articles_data[2] == "Utah Policy":
                # print "Utah Policy"
                total_shares = total_shares * total_shares * total_shares * total_shares * total_shares

            time_diff_seconds = (dt.datetime.now()-articles_data[0]).total_seconds()
            time_diff_seconds = ((time_diff_seconds / 60) / 60)

            if str(name_data[0]) in articles_data[3] or str(name_data[1]) in articles_data[3]:
                total_shares = total_shares * total_shares
            if name_data[0] in articles_data[4] or name_data[1] in articles_data[4]:
                total_shares = total_shares * total_shares

            # print total_schares

            if (social_media_data[1] + social_media_data[3] + social_media_data[5] + social_media_data[6]) == 0:
                score = ((total_shares * p) / math.pow((time_diff_seconds+2), 1.01))
            else:
                score = ((total_shares * p) / math.pow((time_diff_seconds+2), 1.6))


            add_score = ("UPDATE News_article_person SET "
                   "weight=%s "
                   "WHERE articles_id=%s AND people_id=%s")

            data_score = (score, link[0], link[1])

            # Insert new person
            cursor.execute(add_score, data_score)


            print link, article_based_weights_data, social_media_data, time_diff_seconds, total_shares, (total_shares * p), score

        cnx.commit()
        cursor.close()
    cnx.close()


if __name__ == "__main__":
    # if len(sys.argv) != 5:
    #     print 'usage: python Sqlite_py_practice.py [ article_id ] [ people ] [ name_mentions ] [ mention_percentage ] [ article_total_count_mentions ]'
    # else:
    main()
