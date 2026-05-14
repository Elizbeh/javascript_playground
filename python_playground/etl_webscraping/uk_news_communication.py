import sys
import requests
from bs4 import BeautifulSoup

sys.stdout.reconfigure(encoding='utf-8')

url = "https://www.gov.uk/search/news-and-communications"
page = requests.get(url)

soup = BeautifulSoup(page.content, 'html.parser')

page_title = soup.title.string

print(page_title)

#titles = soup.select(".gem-c-document-list__item-title")

desc_list = []
ul = soup.select("ul")

for li in ul:
    desc_list.append(li)
print(desc_list)
print("#############")

"""
for title in titles:
    print(len(titles))
    print(title.get_text(strip=True))
"""