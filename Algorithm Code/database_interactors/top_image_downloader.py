import urllib
import sys
import mysql.connector
from mysql.connector import errorcode


def main(start_point):

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

        cursor.execute("SELECT id, top_image FROM cyp.News_articles")
        image_url = cursor.fetchall()

        for image in image_url[(start_point-1):]:
            try:
                # print image[1], str(image[0]) + ".jpg"
                urllib.urlretrieve(image[1], "/Users/kristiannilssen/Documents/GitHub/Founding_Fathers/CYP/CYP/static/images/article_images/" + str(image[0]) + ".jpg")
            except:
                print "Error on url:", image[1]
            print image[1]
            # print "/Users/kristiannilssen/Documents/GitHub/Founding_Fathers/CYP/CYP/static/images/article_images/" + str(image[0]) + ".jpg"
            print "\n"
        cursor.close()
    cnx.close()

if __name__ == "__main__":

    if len(sys.argv) != 2:
        print 'usage: python Sqlite_py_practice.py [ article_id ] [ length ] [ source_size_ratio ] [ is_local ]'
    if len(sys.argv) == 2:
        entry = int(sys.argv[1])
        main(entry)
    # else:
    #     main("none")
