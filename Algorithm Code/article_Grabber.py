'''
Python script that is to grab all the articles from a specific source

Author: Founding Fathers, Kristian Nilssen
Date: 2/14/2017

Usage:

    python article_Grabber.py
'''

import sys
import newspaper
from newspaper import Article
from newspaper import Source
from bs4 import BeautifulSoup
import urllib

def main():

    # foxnews_paper = newspaper.build('http://foxnews.com', memoize_articles=False)
    #
    #
    #
    # papers = [foxnews_paper, ksl_paper]
    #
    # for paper in papers:
    #   print paper
    #   print "\n"
    #   for article in paper.articles:
    #       article = (article.url).replace("/", " ")
    #       article = article.encode('utf-8').split()
    #       if article[???????] == "politics":
    #           print article
    #

    print "FOX NEWS"
    print "\n"
    foxnews_paper = newspaper.build('http://foxnews.com', memoize_articles=False)
    for article in foxnews_paper.articles:
        # print(article.url)
        article_split = (article.url).replace("/", " ")
        article_split = article_split.encode('utf-8').split()
        if article_split[2] == "politics":
            print article.url

    print "\n"
    print "\n"
    print "KSL"
    print "\n"

    r = urllib.urlopen('http://www.ksl.com/?nid=599').read()
    soup = BeautifulSoup(r)
    letters = soup.find_all("figure", class_="image_box")
    inc = 0
    letter_list = []
    prefix = "http://www.ksl.com/"
    for letter in letters:
        letter_list.append(prefix + letters[inc].a["href"])
        print prefix + letters[inc].a["href"]
        inc = inc + 1


    print "\n"
    print "\n"
    print "Deseret News"
    print "\n"
    article = Article('http://www.deseretnews.com/news/politics')
    article.download()
    soups = BeautifulSoup(article.html)
    tempList = []
    letters = soups.find_all("div", class_="main-column")
    for element in letters[0]:
        for elements in element:
            if len(elements) > 50:
                elements = elements.replace(":", " , ")
                elements = elements.replace(",", " ")
                tempList.append(elements)

    article_split = (tempList[0])

    article_split = article_split.encode('utf-8').split()
    urls = []
    prefix = "http://www.deseretnews.com"
    count = 0
    for x in article_split:
        if x == '"url"':
            splits = article_split[count+1]
            splits = splits.replace('"', "")
            url_end = ""
            for char in splits:
                if char == "\\":
                    pass
                else:
                    url_end = url_end + char
            urls.append(prefix + url_end)
            print (prefix + url_end)
        count = count + 1

    print "\n"
    print "\n"
    print "Salt Lake Tribune"
    print "\n"
    slt_paper = newspaper.build('http://www.sltrib.com/news/politics/', memoize_articles=False)
    for article in slt_paper.articles:
        article_split = (article.url).replace("/", " ")
        article_split = article_split.encode('utf-8').split()
        if article_split[3] == "politics":
            print article.url


    print "\n"
    print "\n"
    print "Fox 13"
    print "\n"
    article = Article('http://fox13now.com/category/news/politics/')
    article.download()
    soups = BeautifulSoup(article.html)
    tempList = []
    prefix = "h"
    letters = soups.find_all("h4", class_="entry-title")
    for element in letters:
        for elements in element:
            url = (prefix + ((str(elements).split())[1]).encode('utf-8').strip('href=">'))
            tempList.append(url)
            print url


    print urls
    print "\n"
    print "\n"
    print "Utah Policy"
    print "\n"
    article = Article('http://utahpolicy.com/index.php/features/today-at-utah-policy')
    article.download()
    soups = BeautifulSoup(article.html)
    tempList = []
    prefix = "http://utahpolicy.com"
    letters = soups.find_all("td", class_="list-title")
    for element in letters:
        for elements in element:
            if elements != "\n":
                url = (prefix + ((str(elements).split())[1]).encode('utf-8').strip('href=">'))
                tempList.append(url)
                print url



    print "\n"
    print "\n"
    print "Utah Political Capitol"
    print "\n"
    print "LEGISLATIVE BRANCH:"
    article = Article('http://utahpoliticalcapitol.com/category/on-the-hill/legislative-branch/')
    article.download()
    soups = BeautifulSoup(article.html)
    tempList = []
    prefix = "h"
    letters = soups.find_all("h2", class_="entry-title taggedlink")
    for element in letters:
        for elements in element:
            # print elements
            url = (prefix + ((str(elements).split())[1]).encode('utf-8').strip('href=">'))
            tempList.append(url)
            print url

    print "EXECUTIVE BRANCH:"
    article = Article('http://utahpoliticalcapitol.com/category/on-the-hill/executive-branch/')
    article.download()
    soups = BeautifulSoup(article.html)
    tempList = []
    prefix = "h"
    letters = soups.find_all("h2", class_="entry-title taggedlink")
    for element in letters:
        for elements in element:
            # print elements
            url = (prefix + ((str(elements).split())[1]).encode('utf-8').strip('href=">'))
            tempList.append(url)
            print url

    print "JUDICIAL BRANCH:"
    article = Article('http://utahpoliticalcapitol.com/category/on-the-hill/judicial-branch-on-the-hill/')
    article.download()
    soups = BeautifulSoup(article.html)
    tempList = []
    prefix = "h"
    letters = soups.find_all("h2", class_="entry-title taggedlink")
    for element in letters:
        for elements in element:
            # print elements
            url = (prefix + ((str(elements).split())[1]).encode('utf-8').strip('href=">'))
            tempList.append(url)
            print url

    print "STATUS OF 2017 flagged bills:"
    article = Article('http://utahpoliticalcapitol.com/2017-session-status-of-flagged-bills/')
    article.download()
    soups = BeautifulSoup(article.html)
    tempList = []
    prefix = "h"
    letters = soups.find_all("td", class_="column-7")
    for element in letters:
        for elements in element:
            # print elements
            url = (prefix + ((str(elements).split())[1]).encode('utf-8').strip('href=">'))
            tempList.append(url)
            print url

if __name__ == "__main__":

    # some preliminary error checking

    # if len(sys.argv) != 1:
    #     print 'python keywordMatchWeight [Url to article to be weighted] [keywords] [keyword type <PERSON|LOCATION|ORGANIZATION>]'
    # else:
    main()
