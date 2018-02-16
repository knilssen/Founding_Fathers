import boto3
import json
import sys
import mysql.connector
from mysql.connector import errorcode


def main(article_id):

    config = {
        'user': 'root',
        'password': 'password',
        'host': '127.0.0.1',
        'database': 'cyp',
        'raise_on_warnings': True,
    }

    try:
        cnx = mysql.connector.connect(**config)

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    else:

        cursor = cnx.cursor()

        cursor.execute(("SELECT text FROM News_articles WHERE id=%s") % (article_id))

        article_data = cursor.fetchall()
        database_article_text = article_data[0][0]

        cnx.commit()

        cursor.close()


    cnx.close()

    #
    # # try:
    comprehend = boto3.client(service_name='comprehend', region_name='us-west-2')
    article_text = database_article_text
    entitie_dict = {}

    # Check the length of the text in bytes, if it exceeds 5,000 bytes we need to do it in chuncks of 5,000 bytes
    # After runnin in chuncks, add chunks to entitie_dict
    # Change the BeginOffset and EndOffset numbers to account for this 'chuncking'

    if len(article_text.encode('utf-8')) <= 5000:
        print('Calling DetectEntities')
        returned_aws = comprehend.detect_entities(Text=article_text, LanguageCode='en')
        # print returned_aws["Entities"]
        print('End of DetectEntities\n')

        entities = returned_aws["Entities"]


        # print entcities
        for entitie in entities:
            if entitie["Type"] in entitie_dict:
                entitie_dict[entitie["Type"]].append({entitie["Text"]: {"Score":entitie["Score"], "BeginOffset": entitie["BeginOffset"], "EndOffset": entitie["EndOffset"]} })
            else:
                entitie_dict[entitie["Type"]] = [{entitie["Text"]: {"Score":entitie["Score"], "BeginOffset": entitie["BeginOffset"], "EndOffset": entitie["EndOffset"]} }]


        for entitie_type in entitie_dict:
            print entitie_type
            for et in entitie_dict[entitie_type]:
                print et


    else:
        real_text = article_text
        article_text = article_text.encode('utf-8')
        chunk_portion = len(article_text)/5000
        if len(article_text)%5000 != 0:
            chunk_portion += 1
        chunk_size = len(article_text)/chunk_portion
        print('Chunking: Article length exceeds 5000 bytes')
        print('Chunk Amounts needed to fit within 5000 byte limit:', chunk_portion)
        print('Chunk size:', chunk_size)

        chunks = []
        offset_number = 0
        for x in range(0, chunk_portion):
            # chunks.append(article_text[(chunk_size*x): (chunk_size*(x+1))])
            print "start chunk:", (chunk_size*x), "end chunk:", (chunk_size*(x+1))
            print "\n"
            chunk = article_text[(chunk_size*x): (chunk_size*(x+1))]


            print('Calling DetectEntities on chunk:', x+1)
            returned_aws = comprehend.detect_entities(Text=chunk, LanguageCode='en')
            print('End of DetectEntities on chunk:', x+1)
            print "\n"

            entities = returned_aws["Entities"]


            for entitie in entities:
                if entitie["Type"] in entitie_dict:
                    entitie_dict[entitie["Type"]].append({entitie["Text"]: {"Score":entitie["Score"], "BeginOffset": offset_number + entitie["BeginOffset"], "EndOffset": offset_number + entitie["EndOffset"] } })
                else:
                    entitie_dict[entitie["Type"]] = [{entitie["Text"]: {"Score":entitie["Score"], "BeginOffset": offset_number + entitie["BeginOffset"], "EndOffset": offset_number + entitie["EndOffset"] } }]


            offset_number+= len(unicode(chunk.decode('utf-8')))


        for entitie_type in entitie_dict:
            print entitie_type
            for et in entitie_dict[entitie_type]:
                print et



        print real_text[11682:11696]














if __name__ == "__main__":

    if len(sys.argv) != 2:
        print "Usage: python grabber_ksl.py [ current_time ]"
    else:
        main(sys.argv[1])
