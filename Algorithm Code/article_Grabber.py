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
    url = urllib.urlopen('http://www.deseretnews.com/news/politics/').read()
    soups = BeautifulSoup(url)
    tempList = []
    letters = soups.find_all("div", class_="main-column")
    for element in letters[0]:
        for elements in element:
            elements = elements.replace(":", ", ")
            elements = elements.replace(",", " ")
            tempList.append(elements)
    article_split = (tempList[1])

    article_split = article_split.encode('utf-8').split()
    urls = []
    url_end = ""
    prefix = "http://www.deseretnews.com"
    for x in article_split:
        if x == '"url"':
            splits = article_split[article_split.index(x)+1].replace('"', "")
            for char in splits:
                if char == "\\":
                    print char
                else:
                    url_end = url_end + char

            urls.append(prefix + url_end)

    print urls



if __name__ == "__main__":

    # some preliminary error checking

    # if len(sys.argv) != 1:
    #     print 'python keywordMatchWeight [Url to article to be weighted] [keywords] [keyword type <PERSON|LOCATION|ORGANIZATION>]'
    # else:
    main()
