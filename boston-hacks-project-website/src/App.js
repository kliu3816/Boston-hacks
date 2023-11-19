
function App() {
  return (
    <div id="ingredientPrompt">
    <p>Welcome! Enter the ingredients you want to use, separated by commas:</p>
    <input type="text" id="ingredientInput" placeholder="e.g., eggs, lettuce, rice"/>
    <br>
    </br>
    <button id="submitBtn1" onclick="getIngredients()">Submit</button>


    <p>Now, enter any dietary restrictions or allergies, separated by commas:</p>
    <input type="text" id="restrictionInput" placeholder="e.g., gluten-free, vegetarian, nut-free"/>
    <br>
    </br>
    <button id="submitBtn2" onclick="getDietaryRestrictions()">Submit</button>

    </div>

  )

  function getingredients(){
    var ingredientstring = document.getElementById("ingredientInput").value;
    var ingredients = ingredientstring.split(",");
    return(ingredients.trim());
  }

  function getdiet(){
    var dietstring = document.getElementById("restrictionInput").value;
    var diet = dietstring.split(",");
    return(diet.trim());
  }



}

export default App;
