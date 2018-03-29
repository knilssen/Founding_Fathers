import urllib2
import sys
import mysql.connector
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

        cursor.execute("SELECT image, id, state, first_name, last_name FROM cyp.News_people")
        data = cursor.fetchall()
        cursor.close()

        opener = urllib2.build_opener()
        opener.addheaders = [('User-Agent', 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.137 Safari/537.36')]


        for person in data:
            if person[1] != 149:
                response = opener.open(person[0])
                htmlData = response.read()
                f = open("/Users/kristiannilssen/Documents/GitHub/Founding_Fathers/CYP/CYP/static/images/" + str(person[2]) + "/" + str(person[1]) + ".jpg",'wb')
                f.write(htmlData)
                f.close()

                print "Downloaded   |   ", person[3] + " " + person[4]
            else:
                print "Skipped id:", person[1]

    cnx.close()

if __name__ == "__main__":

    if len(sys.argv) != 1:
        print 'usage: python Sqlite_py_practice.py [ article_id ] [ length ] [ source_size_ratio ] [ is_local ]'
    else:
        main()
