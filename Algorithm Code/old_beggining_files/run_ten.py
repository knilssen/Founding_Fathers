import sys
import subprocess

def main():
    subprocess.call(['python', 'database_placement_ten.py'])
    subprocess.call(['python', 'database_interactors/mysql_social_media_update.py'])
    subprocess.call(['python', 'ranking.py'])

if __name__ == "__main__":

    if len(sys.argv) != 1:
        print 'usage: python run.py'
    else:
        main()


#*/10 * * * * ~/Founding_Fathers/Algorithm\ Code/run.py
