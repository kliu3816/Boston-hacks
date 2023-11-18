import requests
import json
#import firebase_admin

food = input("Enter a food to cook: ")
intollerances = input("Do you have any allergies:")
if "no" in intollerances:
    url = "https://api.spoonacular.com/recipes/complexSearch?query={}&intoleraces={}&cuisine=american&apiKey=8ab612a2b9c34e8e9133b74ad4806b14".format(food,intollerances)
else:
    url = "https://api.spoonacular.com/recipes/complexSearch?query={}&cuisine=american&apiKey=8ab612a2b9c34e8e9133b74ad4806b14".format(food)
payload = {}
headers = {}


response = requests.request("GET", url, headers=headers, data=payload)
response = response.content
generatedfoods = json.loads(response)

food_list = []
for foods in range(len(generatedfoods["results"])):
    food_list.append(generatedfoods["results"][foods]["title"] + "({})".format(foods))

Food = int(input(food_list))+1

ing_url = "https://api.spoonacular.com/recipes/"+str((generatedfoods["results"][Food]["id"]))+"/ingredientWidget.json?apiKey=8ab612a2b9c34e8e9133b74ad4806b14"
ing = requests.request("GET", ing_url, headers=headers, data=payload)

ing_file = ing.content
ing_dict = json.loads(ing_file)

recipe_url = "https://api.spoonacular.com/recipes/"+str((generatedfoods["results"][Food]["id"]))+"/information?apiKey=8ab612a2b9c34e8e9133b74ad4806b14"
recipe = requests.request("GET", recipe_url, headers=headers, data=payload)

print(recipe)

recipe_file = recipe.content
recipe_dict = json.loads(recipe_file)

for i in recipe_dict:
    print(i)

for ing in range(len(ing_dict['ingredients'])):
    print("{} {} {}".format(ing_dict['ingredients'][ing]['name'],ing_dict['ingredients'][ing]['amount']['us']['value'],ing_dict['ingredients'][ing]['amount']['us']['unit']))


print(recipe_dict["instructions"])


