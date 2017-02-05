# Founding_Fathers_Project
# Code that will be used to find, analyze, and present news and or relevant articles
# around our website.

To run personOfInterestweight.py or personOfInterestweightWithInputs.py on your own machine, you need to install newspaper(only needed while running  personOfInterestweightWithInputs), nltk, and as well as Stanford NLP on your own machine.

To instal newspaper:      sudo pip instal newspaper

To instal nltk:           sudo pip instal -U nltk

To instal stanford nlp:   http://nlp.stanford.edu/software/stanford-ner-2016-10-31.zip rename the file from stanford-ner-2016-10-31 to stanford-ner then move the file into either your /usr/share or /usr/local/share


Running personOfInterestweight.py by going into code, replacing the string with your own string, and the same with the keywords. Run by calling:
python personOfInterestweight.py

Running personOfInterestweightWithInputs with keywords wrapped in "" and  separated inside with commas by calling: python personOfInterestweightWithInputs < article URL > < keywords >
ex. python personOfInterestweightWithInputs 'http://www.cnn.com/2017/02/04/politics/us-protests-trump/index.html' "Donald J. Trump, Vladimir Putin"
