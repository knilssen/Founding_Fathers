'''
Python script that is to familierize myself to the workings about how pyhon interacts
with a Sqlite database, and then ultimatly use this to create a python script to find
and save articles to the database for futher use.

Author: Founding Fathers, Kristian Nilssen
Date: 2/10/2017

Usage:

    python Sqlite_py_practice.py
'''

import sys
import mysql.connector
from mysql.connector import errorcode

def main(member, committee_id, position):

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

        add_person = ("INSERT INTO  person_committies"
               "(people_id, committies_idcommitties, position) "
               "VALUES (%s, %s, %s)")

        cursor.execute(("SELECT id FROM people WHERE person_id = '%s'") % (str(member)))
        data = cursor.fetchall()
        data = data[0]


        data_person = (data[0], committee_id, position)

        # Insert new person
        cursor.execute(add_person, data_person)

        # Make sure data is committed to the database
        cnx.commit()

        cursor.close()
        cnx.close()








if __name__ == "__main__":

    if len(sys.argv) != 8:
        print 'usage: python Sqlite_py_practice.py [ url ] [ source ]'
    else:
        main(sys.argv[1], sys.argv[2])
