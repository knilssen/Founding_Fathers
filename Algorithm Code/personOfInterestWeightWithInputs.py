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


*****
Problem: Code replaces ' with ? so if a word like don't and disqus's, the stanford NERT thinks don and disqus is a person name...
find a fix for this
*****

'''

import sys
import string
import re
import nltk
import newspaper
import time
import Sqlite_py_practice
from collections import defaultdict
from nltk import FreqDist
from nltk import word_tokenize
from nltk import FreqDist
from nltk.tag.stanford import StanfordNERTagger
from newspaper import Article

def main(Url, Keywords, otherNames, Type):
    Keywords = Keywords.lower()
    article = Article(Url)
    article.download()
    article.parse()
    # print article.text
    articleText = (article.text)
    articleText = articleText.encode('ascii', 'replace').replace(u"\u0029", "").replace(u"\u0028", "")

    # for line in articleText:
    #     if UnicodeDecodeError:
    #     # if "\xe2" in line:
    #         print line

    # print articleText

    dateTime = time.strftime("%m/%d/%Y/%I:%M:%S")

    charOfPeriod = 0
    source = " "

    for char in Url:
        if 0 < charOfPeriod < 3:
            source = source + char
        if char == ".":
            charOfPeriod = charOfPeriod + 1


    # print Url
    # print Keywords, "\n"

    Keywords = Keywords.split(",")
    classifier = '/usr/local/share/stanford-ner/classifiers/english.all.3class.distsim.crf.ser.gz'
    jar = '/usr/local/share/stanford-ner/stanford-ner.jar'

    st = StanfordNERTagger(classifier,jar,encoding='utf-8')

    sentence = word_tokenize(articleText)
    # print sentence

    output = []
    realtypefind = []
    keywordtotalcount = {}
    count = {}
    categories = defaultdict(list)
    totalcount = 0

    print Keywords

    for key in Keywords:
        keywordtotalcount[key] = 0
        for key2 in key.split():
            count[key2] = 0

    print keywordtotalcount

    itemposition = 0
    totoltypecount = 0
    taged = st.tag(sentence)
    for item in taged:
        firstItem = item[0].encode('utf-8').strip("\)(?.,:`")
        # print firstItem
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

    print totoltypecount

    #Creats full name list, is checked against to make sure a article with mike newton is counting mike johnson or sam newton
    #as people who are mentioned in the article.

    # print realtypefind
    # if "mike noel" in realtypefind:
    #     print "hello"

    for key in keywordtotalcount:
        for T in range(0, len(key.split())):
            (keywordtotalcount[key]) = (keywordtotalcount[key]) + count[(key.split())[T]]

    print keywordtotalcount

    print realtypefind

    frequency = (FreqDist(output)).most_common(5)


    for freq in frequency:
        totalcount = totalcount + freq[1]

    article.nlp()
    keywords_database = ' '.join(article.keywords)

    # for cat in categories:
    print "Person",":", categories["PERSON"], "\n"
    print "The top 5 most accuring", Type+"s","in this article added up for a total of:", totalcount, Type, "mentions"
    print "\n"
    print "\n"
    print "\n"



    for person in keywordtotalcount:
        if person in realtypefind:
            if person in otherNames and otherNames[person] in realtypefind:
                print person, "is in the article", (round(((keywordtotalcount[person] + keywordtotalcount[otherNames[person]])/float(totoltypecount)), 4) * 100), "%", "of the total top 5 accurences"
                Sqlite_py_practice.main(person, article.publish_date, dateTime, source, article.summary, article.title, keywords_database, article.text, Url)
            else:
                print person, "is in the article", (round((keywordtotalcount[person]/float(totoltypecount)), 4) * 100), "%", "of the total top 5 accurences"
                Sqlite_py_practice.main(person, article.publish_date, dateTime, source, article.summary, article.title, keywords_database, article.text, Url)
        else:
            if person in otherNames and otherNames[person] in realtypefind:
                print person, "is in the article", (round((keywordtotalcount[person]/float(totoltypecount)), 4) * 100), "%", "of the total top 5 accurences"
                Sqlite_py_practice.main(person, article.publish_date, dateTime, source, article.summary, article.title, keywords_database, article.text, Url)





if __name__ == "__main__":

    # some preliminary error checking

    if len(sys.argv) != 4:
        print 'python keywordMatchWeight [Url to article to be weighted] [keywords] [keyword type <PERSON|LOCATION|ORGANIZATION>]'
    elif sys.argv[3] == 'PERSON' or sys.argv[3] == 'LOCATION' or sys.argv[3] == 'ORGANIZATION':
        print main(sys.argv[1], sys.argv[2], sys.argv[3])
    else:
        print 'Invalid keyword type: Must be [PERSON | LOCATION | ORGANIZATION]'
