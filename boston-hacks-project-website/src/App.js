function App() {
  return (
    <div id="ingredientPrompt">
    <p>Welcome! Enter the ingredients you want to use, separated by commas:</p>
    <input type="text" id="ingredientInput" placeholder="e.g., eggs, lettuce, rice"/>
    <br>
    </br>
    

    <p>Now, enter any dietary restrictions or allergies, separated by commas:</p>
    <input type="text" id="restrictionInput" placeholder="e.g., gluten-free, vegetarian, nut-free"/>
    <br>
    </br>
    <button id="submitBtn2" onclick="getinputs()">Submit</button>

    </div>

  )

  function getinputs(){
    var ingredientstring = document.getElementById("ingredientInput").value;
    var ingredients = ingredientstring.split(",");
    ingredients = ingredients.trim();
    var dietstring = document.getElementById("restrictionInput").value;
    var diet = dietstring.split(",");
    diet = diet.trim();
    return(ingredients, diet);
  }


}

export default App;
