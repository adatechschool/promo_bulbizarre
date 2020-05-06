from bs4 import BeautifulSoup
import urllib.request

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

url = "https://o-t.staffomaticapp.com/locations/26605"
page = urllib.request.urlopen(url)
soup = BeautifulSoup(page, 'html.parser')
print(soup)


