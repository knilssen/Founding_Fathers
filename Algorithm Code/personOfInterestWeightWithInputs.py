'''
Python script that reads in text that is to be given a keyword matching weight number

The objective is to match keywords with text such as an article description, the article
title, the content of the article, or any other text that is to be weighted against
the inputed keywords. Returns an integer that represents the computed weight

Author: Founding Fathers, Kristian Nilssen
Date: 2/4/2017

Usage:

    python keywordMatchWeightWIthInputs [ URL To Article ] [ Keywords ]
'''

import sys
import string
import re
import nltk
import newspaper
import time
from collections import defaultdict
from nltk import FreqDist
from nltk import word_tokenize
from nltk import FreqDist
from nltk.tag.stanford import StanfordNERTagger
from newspaper import Article

def main(Url, Keywords):
    article = Article(Url)
    article.download()
    article.parse()

    print Url, "\n"
    print Keywords, "\n"

    Keywords = Keywords.split(",")
    classifier = '/usr/local/share/stanford-ner/classifiers/english.all.3class.distsim.crf.ser.gz'
    jar = '/usr/local/share/stanford-ner/stanford-ner.jar'

    st = StanfordNERTagger(classifier,jar,encoding='utf-8')

    sentence = word_tokenize(article.text)

    output = []
    keywordtotalcount = {}
    count = {}
    categories = defaultdict(list)
    totalcount = 0

    for key in Keywords:
        keywordtotalcount[key] = 0
        for key2 in key.split():
            count[key2] = 0


    for item in st.tag(sentence):
        firstItem = (str(item[0])).strip(")('?.,:`")
        if firstItem:
            if item[1] not in categories:
                categories[item[1]].append(firstItem)
            else:
                categories[item[1]].append(firstItem)
            if item[1] == "PERSON":
                output.append(item[0])
                if item[0] in count:
                    count[item[0]] = count[item[0]] + 1


    for key in keywordtotalcount:
        for T in range(0, len(key.split())):
            (keywordtotalcount[key]) = (keywordtotalcount[key]) + count[(key.split())[T]]

    frequency = (FreqDist(output)).most_common(5)

    for freq in frequency:
        totalcount = totalcount + freq[1]

    for cat in categories:
        print cat,":", categories[cat], "\n"
    print "The top 5 most accuring people in this article added up for a total of:", totalcount, "name mentions"
    for person in keywordtotalcount:
        print person, "is in the article", (round((keywordtotalcount[person]/float(totalcount)), 4) * 100), "%", "of the total top 5 accurences"
    return frequency







if __name__ == "__main__":

    # some preliminary error checking

    if len(sys.argv) != 3:
        print 'python keywordMatchWeight [Text to be weighted] [keywords]'
    else:
        print main(sys.argv[1], sys.argv[2])
