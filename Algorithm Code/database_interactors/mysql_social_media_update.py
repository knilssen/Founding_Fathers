'''



'''

import sys
import mysql.connector
import social_shares
from mysql.connector import errorcode


def main():

    # fb_shares, fb_comments, reddit_shares, reddit_upvotes, pinterest_pins, linkedin_shares, total

    config = {
        'user': 'root',
        'password': 'FF_database',
        'host': '127.0.0.1',
        'database': 'ff_database',
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

        cursor.execute("SELECT COUNT(*) FROM articles")
        data = cursor.fetchall()
        data = data[0]

        for social_media_entry in range(1,data[0] + 1):

            cursor.execute(("SELECT url FROM articles WHERE id=%s") % (social_media_entry))
            data = cursor.fetchall()
            data = data[0]
            print data[0]

            social_media = social_shares.main(str(data[0]))

            fb_shares = social_media["Facebook Shares"]
            fb_comments = social_media["Facebook Comments"]
            reddit_shares = social_media["Reddit Shares"]
            reddit_upvotes = social_media["Reddit Upvotes"]
            pinterest_pins = social_media["Pinterest Pins"]
            linkedin_shares = social_media["LinkedIn Shares"]
            total = social_media["Greater Total"]

            add_social = ("INSERT INTO social_media "
                   "(article_based_weights_articles_id, facebook_shares, facebook_comments, reddit_shares, reddit_upvotes, pinterest_pins, linkedIn_shares, total_count) "
                   "VALUES (%s, %s, %s, %s, %s, %s, %s, %s)")

            data_social = (social_media_entry, fb_shares, fb_comments, reddit_shares, reddit_upvotes, pinterest_pins, linkedin_shares, total)

            # Insert new person
            cursor.execute(add_social, data_social)

            # Make sure data is committed to the database
            cnx.commit()

        cursor.close()
        cnx.close()



if __name__ == "__main__":

    if len(sys.argv) != 1:
        print 'usage: python mysql_social_media_entry.py [ url ] [ source ]'
    else:
        main()
