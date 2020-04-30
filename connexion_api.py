import requests

# x = requests.get('https://o-t.staffomaticapp.com')
# print(x.status_code)
r = requests.get("http://o-t.staffomaticapp.com/")
print(r.text)
r = requests.put("http://o-t.staffomaticapp.com/")
r = requests.delete("http://o-t.staffomaticapp.com/")
r = requests.patch("http://o-t.staffomaticapp.com/")
r = requests.post("http://o-t.staffomaticapp.com/")
r = requests.head("http://o-t.staffomaticapp.com/")
r = requests.options("http://o-t.staffomaticapp.com/")

