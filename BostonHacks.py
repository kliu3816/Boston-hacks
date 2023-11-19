import requests
import json
import random
import math
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/api/genfood/', methods = ['GET'])

def genfood():
    food= request.args.get('food', '')
    intol = request.args.get('intollerences', 'none')

    if "no" not in intol:
        url = "https://api.spoonacular.com/recipes/complexSearch?query={}&intolerances={}&apiKey=8ab612a2b9c34e8e9133b74ad4806b14".format(food,intol)
    else:
        url = "https://api.spoonacular.com/recipes/complexSearch?query={}&apiKey=8ab612a2b9c34e8e9133b74ad4806b14".format(food)
    payload = {}
    headers = {}


    response = requests.request("GET", url, headers=headers, data=payload)
    response = response.content
    generatedfoods = json.loads(response)

    food_list = []
    for foods in range(len(generatedfoods["results"])):
        food_list.append(generatedfoods["results"][foods]["title"] + "({})".format(foods))

    generatedfoods.update({'food_list':food_list})


    Food = math.floor((random.random()*10))


    

    ing_url = "https://api.spoonacular.com/recipes/"+str((generatedfoods["results"][Food]["id"]))+"/ingredientWidget.json?apiKey=8ab612a2b9c34e8e9133b74ad4806b14"
    ing = requests.request("GET", ing_url, headers=headers, data=payload)

    ing_file = ing.content
    ing_dict = json.loads(ing_file)

    recipe_url = "https://api.spoonacular.com/recipes/"+str((generatedfoods["results"][Food]["id"]))+"/information?apiKey=8ab612a2b9c34e8e9133b74ad4806b14"
    recipe = requests.request("GET", recipe_url, headers=headers, data=payload)


    recipe_file = recipe.content
    recipe_dict = json.loads(recipe_file)

    ing_list = []
    for ing in range(len(ing_dict['ingredients'])):
        ing_list.append("{} {} {}".format(ing_dict['ingredients'][ing]['name'],ing_dict['ingredients'][ing]['amount']['us']['value'],ing_dict['ingredients'][ing]['amount']['us']['unit']))


    #print(recipe_dict["instructions"])

    output = json.dumps({'name': generatedfoods["results"][Food]["title"], 'ingredients' : ing_list, 'instructions' : recipe_dict["instructions"] }, indent = 4)


    return output

if __name__ == '__main__':
    app.run(debug=True)