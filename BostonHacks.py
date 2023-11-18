import requests

url = "https://api.spoonacular.com/recipes/complexSearch?query=chicken&cuisine=american&apiKey=8ab612a2b9c34e8e9133b74ad4806b14"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)


import requests

url = "https://api.spoonacular.com/recipes/findByNutrients?apiKey={{apiKey}}&minCarbs=10&maxCarbs=50&number=2&apiKey=8ab612a2b9c34e8e9133b74ad4806b14"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)


import requests

url = "https://api.spoonacular.com/recipes/findByIngredients?apiKey={{apiKey}}&ingredients=apples, flour, sugar&number=2&apiKey=8ab612a2b9c34e8e9133b74ad4806b14"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

import requests

url = "https://api.spoonacular.com/recipes/638420/information?apiKey={{apiKey}}&apiKey=8ab612a2b9c34e8e9133b74ad4806b14"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

import requests

url = "https://api.spoonacular.com/recipes/638420/similar?apiKey={{apiKey}}&apiKey=8ab612a2b9c34e8e9133b74ad4806b14"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
