'''

Python script that is to grab all the articles from the source: Salt Lake Tribune,
more specifically for the Salt Lake Tribune politics section.

Author: Founding Fathers, Kristian Nilssen
Date: 3/15/2017

Usage:

    python grabber_slt.py [ current_time ]

'''

import sys
import newspaper
import urllib
import date_subtracter
from newspaper import Article
from bs4 import BeautifulSoup

def main(current_time):
    # print "\n"
    # print "\n"
    # print "Salt Lake Tribune"
    # print "\n"
    article = Article('http://www.sltrib.com/news/politics/')
    article.download()
    soups = BeautifulSoup(article.html)
    tempList = []
    tempListud = {}
    articleTime = current_time[:]
    prefix = "http://www.sltrib.com"
    letters = soups.find_all("ul", class_="articles")

    for element in letters:
        for elements in element:
            if elements != "\n":
                tempList.append(elements.encode('utf-8').strip('<>l/i').split())
    for temps in tempList:
        count = 0
        for temp in temps:
            if temp == "<a":
                splits = temps[count+1]
                splits = splits.replace('"', " ")
                splits = splits.split()
                if splits[0] == "href=":
                    article_split = (splits[1]).replace("/", " ")
                    article_split = article_split.encode('utf-8').split()
                    if article_split[4] != "5-reasons-why-family-river-rafting":
                        if article_split[3] != "politics":
                            dateTimeForm = [["0", "0", "0"],["0", "0", "0"]]
                            timeFound = temps[temps.index("Updated"):temps.index("Updated")+6]
                            timeFound[4] = timeFound[4].replace(":", " ").split()
                            if timeFound[5] == "pm":
                                timeFound[4][0] = str(int(timeFound[4][0]) + int("12"))
                            dateTimeForm[0][0] = timeFound[1][:]
                            dateTimeForm[0][1] = timeFound[2][:]
                            dateTimeForm[0][2] = timeFound[3][:]
                            dateTimeForm[1][0] = timeFound[4][0][:]
                            dateTimeForm[1][1] = timeFound[4][1][:]
                            dateTimeForm[1][2] = articleTime[1][2][:]
                            dateDiff = date_subtracter.main(articleTime,dateTimeForm)
                            if dateDiff[0] == 1:
                                tempListud[splits[1]] = dateTimeForm
            count = count + 1

    # for article in tempListud:
    #     print article, tempListud[article]
    return tempListud

if __name__ == "__main__":

    if len(sys.argv) != 2:
        print "Usage: python slt_grabber.py [ current_time ]"
    else:
        main(sys.argv[1])
