'''

Python script that is to grab all the articles from the source: The Olympian,
more specifically from The Olympians politics section.

Author: Founding Fathers, Kristian Nilssen
Date: 12/14/2017

Usage:

    python grabber_olympian.py [ current_time ]


'''

import sys
import requests
from bs4 import BeautifulSoup

class article:
    def __init__(self, texts, article_summary, author, title, top_image):
         self.text = texts
         self.summary = article_summary
         self.authors = author
         self.title = title
         self.top_image = top_image

def main(url):
    # print "\n"
    # print "\n"
    # print "The Olympian: Download"
    # print "\n"
    page = requests.get(url)

    soup = BeautifulSoup(page.content, 'html.parser')
    text_list = ""
    tempListud = {}


    title = soup.find("h3", class_="title").text
    # print "title:   ", title



    authors = soup.find("div", class_="byline element-spacing-small")
    # print len(authors)
    author = []
    for writer in authors:
        writer = writer.text.title()
        if writer[:3] == "By ":
            author.append(writer[3:-1])
        else:
            author.append(writer)
    # author = ", ".join(author)
    # print author
    # print author
    # author = author[0].text[3:]
    # print author

    # print "4"

    published_date = soup.find("span", id="publish_date").text.strip()
    # print "publish date/time:  ", published_date

    # print "5"

    image = soup.find("div", class_="img-container picture ")
    if image:
        top_image = image.find("source", media="(min-width: 992px)")['srcset'][2:]
        if top_image[0:7] != "http://":
            top_image = "http://" + top_image

        # print "6.1"
    else:
        top_image = 'http://www.theolympian.com/wps/build/images/theolympian/logo-lg.png'

        # print "6.2"

    # print "top image", top_image

    all_text = soup.find("div", id="content-body-")
    text = all_text.find_all("p", class_="")
    for element in text:
        if element.text != "":
            text_list+=(element.text + "\n\n")

    # print "7"


    thing = article(text_list, "", author, title, top_image)
    # print thing.text
    # print thing.summary
    # print thing.authors
    # print thing.title
    # print thing.top_image
    # print "olypian downloading worked!", "url:  ", url

    # print "8"

    return article(text_list, "", author, title, top_image)

if __name__ == "__main__":

    if len(sys.argv) != 2:
        print "Usage: python grabber_ksl.py [ current_time ]"
    else:
        main(sys.argv[1])
