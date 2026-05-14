import csv
import requests
from bs4 import BeautifulSoup
 
#Create list for the headers

#Create list for the headers
headers = ["title", "description"]
#Open a new file to write to called ‘data.csv’
with open('data.csv', 'w', newline='') as csvfile:
    #Create a writer object with that file
    writer = csv.writer(csvfile, delimiter=',')
    writer.writerow(headers)
    
    #Loop through each element in titles and descriptions lists
    
    url = "https://www.gov.uk/search/news-and-communications"
    
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    titles = soup.select(".gem-c-document-list__item-title")
    h1 = soup.h1
    
    for i in titles:
        print(i)