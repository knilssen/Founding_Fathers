import urllib2
import sys
import mysql.connector
from mysql.connector import errorcode


def main(article_id):

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

        cursor.execute("SELECT id, top_image FROM cyp.News_articles WHERE id = " + str(article_id))
        image_url = cursor.fetchall()

        # Pretend to be a browser Window
        opener = urllib2.build_opener()
        opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36')]

        image = image_url[0]
        # print image

        # try:
        response = opener.open(image[1])
        htmlData = response.read()
        f = open("/Users/kristiannilssen/Documents/GitHub/Founding_Fathers/CYP/CYP/static/images/article_images/" + str(image[0]) + ".jpg",'wb')
        f.write(htmlData)
        f.close()
        # except:
        #     print "Error on url:", image[1]
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
