'''

Python script that is to grab all people of interest from the source: Washington State Legislature,
People grabbed will be Senetors, legisatures, governers and such.

Author: Founding Fathers, Kristian Nilssen
Date: 12/17/2017

Usage:

    python grabber_person.py


'''

import sys
import time
from newspaper import Article
from bs4 import BeautifulSoup


def main():
    # Input: None
    # Output: None

    # print "\n"
    # print "\n"
    # print "Washington State Representatives Info Grab"
    # print "\n"
    article = Article('http://leg.wa.gov/House/Representatives/Pages/default.aspx')
    article.download()
    soups = BeautifulSoup(article.html)
    tempList = []
    url_list = []
    tempListud = {}
    # prefix = "http://leg.wa.gov"

    senator_informations = soups.find_all("div", class_="memberInformation")
    for senator_information in senator_informations:
        name_party = senator_information.find("span", class_="memberName").text.split()
        other_stuff = senator_information.find_all("div", class_="col-csm-6 col-md-3 memberColumnPad ")
        bill_sponsorship = senator_information.find("div", class_="row clearfix memberDetails").a['href']
        other_stuff1 = other_stuff[0].text.replace("\n                             ", "").replace(" \n\n\n", "").replace("\n\n ", "").replace("Olympia", ", Olympia").split("\r")
        other_stuff2 = other_stuff[1].text.replace(" (Chair)", "").replace(" (Ranking Minority Member)", "").replace(" (Asst Ranking Minority Member)", "").replace(" (Vice Chair)", "").replace(" (Vice Chair, Capital Budget )", "").replace(" (Assistant Ranking Minority Member, Capital Budget)", "").replace(" (Assistant Ranking Minority Member, Operating Budget", "").split("\n\n")[1].split("\n")
        other_stuff2[len(other_stuff2)-1] = other_stuff2[len(other_stuff2)-1][:-1]

        phone_number = other_stuff1[3].replace(" ", "").replace("(", "").replace(")","-")

        for x in range(0,len(other_stuff2)-1):
            if len(other_stuff2[x]) != 0 and other_stuff2[x][-1] == " ":
                other_stuff2[x] = other_stuff2[x][:-1]

        if name_party[0] == "Representative":
            print name_party[0] + ":   ", " ".join(name_party[1:3])
        elif name_party[0] == "Senator":
            print name_party[0] + ":          ", " ".join(name_party[1:3])

        if name_party[3] == "(D)":
            print "Party:             Democrat"
        elif name_party[3] == "(R)":
            print "Party:             Republican"
        elif name_party[3] == "(I)":
            print "Party:             Independent",
        else:
            print "Party:             ", name_party[3]
        print "Olypmpia Office:  ", ", ".join(other_stuff1[1:3])
        print "Phone Number:     ", phone_number
        print "committees:       ", ", ".join(other_stuff2)
        print "bill_sponsorship: ", bill_sponsorship
        print "\n"
        print "\n"


if __name__ == "__main__":

    if len(sys.argv) != 1:
        print "Usage: python grabber_person.py"
    else:
        main()
