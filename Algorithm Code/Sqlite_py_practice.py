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
import sqlite3


def main(name, DC, DF, S, ATS, AT, AK, T, U):
    personName = name.replace(" ", "")
    Date_Created = DC
    Date_Found = DF
    Source = S
    article_Summary = ATS
    article_Title = AT
    article_Keywords = AK
    article_Text = T
    Url = U

    # print personName

    sqlite_file = '/Users/kristiannilssen/Documents/"Westminster College"/"Spring 2017"/"CMPT 322 Software Engineering"/FF_Practice_Code/db.sqlite3'
    conn = sqlite3.connect('sqlite_file')
    c = conn.cursor()

    # Create table
    c.execute("CREATE TABLE IF NOT EXISTS " + personName + " (id text, date_Created text, date_Found text, source text, summary text, title text, keywords text, article_Text text)")

    # Insert a row of data
    c.execute("INSERT INTO " + personName + " VALUES (?, ?, ?, ?, ?, ?, ?, ?)", (Url, Date_Created, Date_Found, Source, article_Summary, article_Title, article_Keywords, article_Text))

    # Save (commit) the changes
    conn.commit()

    # We can also close the connection if we are done with it.
    # Just be sure any changes have been committed or they will be lost.
    conn.close()


if __name__ == "__main__":

    if len(sys.argv) != 8:
        print 'usage: python Sqlite_py_practice.py [ Url ] [ Date_Created ] [ Date_Found ] [ Source ] [ Title ] [ Article_Text ]'
    else:
        main(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6], sys.argv[7], sys.argv[8])
