<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ingredient and Dietary Restriction Input</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 20px;
    }

    #ingredientPrompt, #restrictionPrompt {
      margin-bottom: 10px;
    }

    #inputBox {
      padding: 8px;
      font-size: 16px;
      width: 300px;
    }

    #submitBtn {
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div id="ingredientPrompt">
    <p>Welcome! Enter the ingredients you want to use, separated by commas:</p>
  </div>

  <input type="text" id="ingredientInput" placeholder="e.g., eggs, lettuce, rice">

  <br>

  <button id="submitBtn" onclick="getIngredients()">Submit</button>

  <div id="restrictionPrompt" style="display: none;">
    <p>Now, enter any dietary restrictions or allergies, separated by commas:</p>
  </div>

  <input type="text" id="restrictionInput" placeholder="e.g., gluten-free, vegetarian, nut-free" style="display: none;">

  <br>

  <button id="submitRestrictionsBtn" onclick="getDietaryRestrictions()" style="display: none;">Submit</button>

  <script>
    function getIngredients() {
      // Get the value from the ingredient input box
      var ingredientInput = document.getElementById('ingredientInput').value;

      // Split the input string into an array of ingredients
      var ingredientsArray = ingredientInput.split(',').map(function (ingredient) {
        return ingredient.trim(); // Trim any leading or trailing whitespaces
      });

      // Display the array in the console (you can modify this part)
      console.log('Ingredients:', ingredientsArray);

      // Hide ingredient input and show restriction input
      document.getElementById('ingredientPrompt').style.display = 'none';
      document.getElementById('ingredientInput').style.display = 'none';
      document.getElementById('submitBtn').style.display = 'none';

      document.getElementById('restrictionPrompt').style.display = 'block';
      document.getElementById('restrictionInput').style.display = 'inline';
      document.getElementById('submitRestrictionsBtn').style.display = 'inline';
    }

    function getDietaryRestrictions() {
      // Get the value from the restriction input box
      var restrictionInput = document.getElementById('restrictionInput').value;

      // Split the input string into an array of dietary restrictions
      var restrictionsArray = restrictionInput.split(',').map(function (restriction) {
        return restriction.trim(); // Trim any leading or trailing whitespaces
      });

      // Display the array in the console (you can modify this part)
      console.log('Dietary Restrictions:', restrictionsArray);

      // You can perform additional actions with the arrays of ingredients and restrictions here
    }
  </script>

</body>
</html>
