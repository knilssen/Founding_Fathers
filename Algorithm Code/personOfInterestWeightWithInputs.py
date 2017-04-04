'''
Python script that reads in text that is to be given a keyword matching weight number

The objective is to match keywords with text such as an article description, the article
title, the content of the article, or any other text that is to be weighted against
the inputed keywords. Returns an integer that represents the computed weight

Also invokes Sqlite_py_practice and sends it information/date to be entered into Sqlite
database.

Author: Founding Fathers, Kristian Nilssen
Date: 2/4/2017

Usage:

    python keywordMatchWeightWIthInputs [ URL To Article ] [ Keywords ] [ keyword type <PERSON | LOCATION | ORGANIZATION> ]

'''

import sys
import string
import re
import nltk
import newspaper
import time
import /database_interactors/Sqlite_py_practice
import /database_interactors/mysql_article_person_link
import /database_interactors/mysql_article_based_weights
from collections import defaultdict
from nltk import FreqDist
from nltk import word_tokenize
from nltk import FreqDist
from nltk.tag.stanford import StanfordNERTagger
from newspaper import Article

def main(Url, pub_time, Source, Keywords, otherNames, Type):
    Keywords = Keywords.lower()
    article = Article(Url)
    article.download()
    article.parse()
    articleText = (article.text)
    articleText = articleText.encode('ascii', 'replace').replace(u"\u0029", "").replace(u"\u0028", "")
    dateTime = time.strftime("%Y-%m-%d %I:%M:%S")

    if len(str(pub_time[0][2])) < 3:
        pub_time[0][2] = int("20" + str(pub_time[0][2]))
    if len(str(pub_time[0][0])) < 2:
        pub_time[0][0] = int("0" + str(pub_time[0][0]))
    if len(str(pub_time[0][1])) < 2:
        pub_time[0][1] = int("0" + str(pub_time[0][1]))
    post_date = (str(pub_time[0][2]) + "-" + str(pub_time[0][0]) + "-" + str(pub_time[0][1]) + " " +
                str(pub_time[1][0]) + ":" + str(pub_time[1][1]) + ":" + str(pub_time[1][2]))

    Keywords = Keywords.split(",")
    classifier = '/usr/local/share/stanford-ner/classifiers/english.all.3class.distsim.crf.ser.gz'
    jar = '/usr/local/share/stanford-ner/stanford-ner.jar'
    st = StanfordNERTagger(classifier,jar,encoding='utf-8')
    sentence = word_tokenize(articleText)
    output = []
    realtypefind = []
    keywordtotalcount = {}
    count = {}
    categories = defaultdict(list)
    totalcount = 0

    for key in Keywords:
        keywordtotalcount[key] = 0
        for key2 in key.split():
            count[key2] = 0

    itemposition = 0
    totoltypecount = 0
    taged = st.tag(sentence)
    for item in taged:
        firstItem = item[0].encode('utf-8').strip("\)(?.,:`")
        if firstItem:
            if item[1] not in categories:
                categories[item[1]].append(firstItem)
            else:
                categories[item[1]].append(firstItem)
            if item[1] == Type:
                totoltypecount = totoltypecount + 1
                #Creats full name list, is checked against to make sure a article with mike newton is counting mike johnson or sam newton
                #as people who are mentioned in the article.
                if itemposition != (len(taged) -1):
                    if taged[itemposition + 1][1] == Type:
                        realtypefind.append(" " + (item[0].lower() + " " + (taged[itemposition + 1][0]).lower()).encode('utf-8'))
                output.append(item[0])
                if item[0].lower() in count:
                    count[item[0].lower()] = count[item[0].lower()] + 1
        itemposition = itemposition + 1

    #Creats full name list, is checked against to make sure a article with mike newton is counting mike johnson or sam newton
    #as people who are mentioned in the article.

    for key in keywordtotalcount:
        for T in range(0, len(key.split())):
            (keywordtotalcount[key]) = (keywordtotalcount[key]) + count[(key.split())[T]]

    frequency = (FreqDist(output)).most_common(5)

    for freq in frequency:
        totalcount = totalcount + freq[1]

    article.nlp()
    keywords_database = ' '.join(article.keywords)

    article_people = []

    for person in keywordtotalcount:
        if person in realtypefind:
            if person in otherNames and otherNames[person] in realtypefind:
                article_people.append(person)
                totalcountofperson = (keywordtotalcount[person] + keywordtotalcount[otherNames[person]])
                # print person, "is in the article", (round(((keywordtotalcount[person] + keywordtotalcount[otherNames[person]])/float(totoltypecount)), 4) * 100), "%"
                # Sqlite_py_practice.main(Url, Source, post_date, dateTime, article.title, str(article.authors), str(keywords_database), article.summary, articleText)
            else:
                article_people.append(person)
                totalcountofperson = keywordtotalcount[person]
                # print person, "is in the article", (round((keywordtotalcount[person]/float(totoltypecount)), 4) * 100), "%"
                # Sqlite_py_practice.main(Url, Source, post_date, dateTime, article.title, str(article.authors), str(keywords_database), article.summary, articleText)
        else:
            if person in otherNames and otherNames[person] in realtypefind:
                article_people.append(person)
                totalcountofperson = keywordtotalcount[person]
                # print person, "is in the article", (round((keywordtotalcount[person]/float(totoltypecount)), 4) * 100), "%"
                # Sqlite_py_practice.main(Url, Source, post_date, dateTime, article.title, str(article.authors), str(keywords_database), article.summary, articleText)



    if len(article_people) >= 1:
        print Url
        article_id = Sqlite_py_practice.main(Url, Source, post_date, dateTime, article.title, str(article.authors), str(keywords_database), article.summary, articleText)
        mysql_article_person_link.main(article_id, article_people, totalcountofperson, (round((totalcountofperson/float(totoltypecount)), 4) * 100), totoltypecount)
        mysql_article_based_weights.main(article_id, len(articleText), "yes")

if __name__ == "__main__":

    # some preliminary error checking

    if len(sys.argv) != 4:
        print 'python keywordMatchWeight [Url to article to be weighted] [keywords] [keyword type <PERSON|LOCATION|ORGANIZATION>]'
    elif sys.argv[3] == 'PERSON' or sys.argv[3] == 'LOCATION' or sys.argv[3] == 'ORGANIZATION':
        print main(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4], sys.argv[5], sys.argv[6])
    else:
        print 'Invalid keyword type: Must be [PERSON | LOCATION | ORGANIZATION]'
