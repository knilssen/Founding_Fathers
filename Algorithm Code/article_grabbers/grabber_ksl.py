'''

Python script that is to grab all the articles from the source: KSL, more
specifically for the KSL politics section.

Author: Founding Fathers, Kristian Nilssen
Date: 3/15/2017

Usage:

    python ksl_grabber.py [ current_time ]

'''

import sys
import newspaper
import urllib
import date_subtracter
from newspaper import Article
from bs4 import BeautifulSoup
import time

def main(current_time):
    # print "\n"
    # print "\n"
    # print "KSL"
    # print "\n"
    r = urllib.urlopen('http://www.ksl.com/?nid=599').read()
    soup = BeautifulSoup(r)
    letters = soup.find_all("figure", class_="image_box")
    publishDate = soup.find_all("span", class_="short")
    tempList = []
    tempListud = {}
    inc = 0
    prefix = "https://www.ksl.com/"
    articleTime = current_time[:]
    for dates in publishDate:
        dateTimeForm = [["0", "0", "0"],["0", "0", "0"]]
        dates = dates.encode('utf-8')
        dates = dates.strip('<span class="short"></')
        dates = dates.replace("-", " ")
        dates = dates.replace(":", " ")
        dates = dates.split()
        dates[1] = dates[1][:-2]
        if dates[3][2:] == "pm":
            if int(dates[2]) != 12:
                dates[2] = str(int(dates[2]) + int("12"))
        dates[3] = dates[3].replace("a", "").replace("m", "").replace("p", "")
        dateTimeForm[0][0] = dates[0]
        dateTimeForm[0][1] = dates[1]
        dateTimeForm[0][2] = articleTime[0][2][:]
        dateTimeForm[1][0] = dates[2]
        dateTimeForm[1][1] = dates[3]
        dateTimeForm[1][2] = articleTime[1][2][:]
        tempList.append(dateTimeForm)
    for letter in letters:
        # print tempList[inc], articleTime
        dateDiff = date_subtracter.main(articleTime,tempList[inc])
        if dateDiff[0] == 1:
            tempListud[(prefix + letters[inc].a["href"]).rpartition('&')[0]] = tempList[inc]
        inc = inc + 1

    # for article in tempListud:
    #     print article, tempListud[article]
    return tempListud

if __name__ == "__main__":

    if len(sys.argv) != 1:
        print "Usage: python ksl_grabber.py [ current_time ]"
    else:
        currentTime = []
        currentTime.append((time.strftime("%x").replace("/", " ")).split())
        currentTime.append((time.strftime("%X").replace(":", " ")).split())
        main(currentTime)
