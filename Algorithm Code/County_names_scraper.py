'''

Python script that is to grab all the articles from the source: The News Tribune,
specifically from The News Tribune's politics section.

Author: Founding Fathers, Kristian Nilssen
Date: 12/14/2017

Usage:

    python grabber_news_tribune.py [ current_time ]


'''

import sys
import time
from newspaper import Article
from bs4 import BeautifulSoup


def main():
    # print "\n"
    # print "\n"
    # print "The News Tribune"
    # print "\n"
    list_states = []
    state_dict = {
      "53": "Washington State",
      "41": "Oregon State",
      "16": "Idaho State",
      "32": "Nevada State",
       "6": "California State",
      "49": "Utah State",
       "4": "Arizona State",
      "30": "Montana State",
      "56": "Colorado State",
       "8": "Wyoming State",
      "35": "New Mexico State",
      "38": "North Dakota State",
      "46": "South Dakota State",
      "31": "Nebraska State",
      "20": "Kansas State",
      "40": "Oklahoma State",
      "48": "Texas State",
      "27": "Minnesota State",
      "19": "Iowa State",
      "29": "Missouri State",
       "5": "Arkansas State",
      "22": "Louisiana State",
      "55": "Wisconsin State",
      "17": "Illinois State",
      "26": "Michigan State",
      "18": "Indiana State",
      "21": "Kentucky State",
      "47": "Tennessee State",
      "28": "Mississippi State",
      "39": "Ohio State",
       "1": "Alabama State",
      "12": "Florida State",
      "13": "Georgia State",
      "45": "South Carolina State",
      "37": "North Carolina State",
      "51": "Virginia State",
      "54": "West Virginia State",
      "24": "Maryland State",
      "10": "Delaware State",
      "34": "New Jersey State",
      "42": "Pennsylvania State",
      "36": "New York State",
       "9": "Connecticut State",
      "44": "Rhode Island State",
      "25": "Massachusetts State",
      "33": "New Hampshire State",
      "50": "Vermont State",
      "23": "Maine State",
       "2": "Alaska State",
      "15": "Hawaii State",
      # "11": "Washington DC State"
    }

    return_county = {}

    for state_id in state_dict:
        state = state_dict[state_id][:-6].replace(" ", "_")
        print state
        article = Article('https://en.wikipedia.org/wiki/List_of_counties_in_'+state)
        article.download()
        soups = BeautifulSoup(article.html, "lxml")
        letters = soups.find("table", class_="wikitable")
        counties = {}
        for letter in letters.find_all('tr'):
            county = letter.text.splitlines()

            if county[2][:4] != "FIPS":
                counties[county[2]] = county[1]

        return_county[state_id] = counties
        # print counties, "\n"
        # counties[state_id] = counties

    print return_county

        # print letter.text.splitlines(), "\n"
    # letter = letters.tr

    # print letter
    # for letter in letters.text:
    #     print letter

    # for letter in letters:
            # print letter.text.splitlines()

    # for state_id in state_dict:
    #     state = state_dict[state_id][:-6].replace(" ", "_")
    #     article = Article('https://en.wikipedia.org/wiki/List_of_counties_in_'+state)
    #     article.download()
    #     soups = BeautifulSoup(article.html, "lxml")
    #     letters = soups.find_all("table", class_="wikitable")
    #     for letter in letters:
    #         print letter.text.splitlines()
    #



    # print list_states
    #
    # # list_states = ['Washington',]
    #
    # article = Article('https://en.wikipedia.org/wiki/List_of_counties_in_')
    # article.download()
    # soups = BeautifulSoup(article.html)
    # tempList = []
    # tempListud = {}
    # articleTime = current_time[:]
    # # prefix = "http://www.thenewstribune.com/"
    #
    # letters = soups.find_all("article", class_="politics_government media ")
    # for element in letters:
    #     url = element.find("h4", class_="title ").a['href']
    #
    #     article = Article(url)
    #     article.download()
    #     soups = BeautifulSoup(article.html)
    #     pub_date = soups.find("p", class_="published-date").text.replace(":", " ").split()
    #     dateTimeForm = [["0", "0", "0"],["0", "0", "0"]]
    #
    #
    #     # Date Time in the formate [Month,Day,Year][Hour,Min,Sec]
    #     # Date [Month,Day,Year]
    #     dateTimeForm[0][0] = pub_date[0][:]
    #     dateTimeForm[0][1] = pub_date[1][:-1]
    #     dateTimeForm[0][2] = pub_date[2][:]
    #     # Time [Hour,Min,Sec]
    #     if pub_date[5] == "PM" and pub_date[3] != "12":
    #         pub_date[3] = str(int(pub_date[3]) + 12)
    #     dateTimeForm[1][0] = pub_date[3][:]
    #     dateTimeForm[1][1] = pub_date[4][:]
    #     dateTimeForm[1][2] = articleTime[1][2][:]
    #     dateDiff = date_subtracter.main(articleTime,dateTimeForm)
    #     if dateDiff[0] == 1:
    #         tempListud[url] = dateTimeForm
    #
    # # for article in tempListud:
    # #     print article, tempListud[article]
    # return tempListud

if __name__ == "__main__":

    if len(sys.argv) != 1:
        print "Usage: python grabber_ksl.py [ current_time ]"
    else:
        main()
