export default function userinput(){
    function getingredients(){
        return(
            <div id="ingredientPrompt">
            let ingredientsstring = prompt("Welcome! Enter the ingredients you want to use, separated by commas:","e.g., eggs, lettuce, rice");
            </div>
        )
    }
    
    var ingredientsArray = ingredientsstring.split(',').map(function (ingredient) {
        return ingredient.trim(); // Trim any leading or trailing whitespaces
      });

    document.getElementById('ingredientPrompt').style.display = 'none';
    
    function getdiet(){
        return(
            <div id="restrictionPrompt">
            let dietstring = prompt("Now, enter any dietary restrictions or allergies, separated by commas:","e.g., gluten-free, vegetarian, nut-free");
            </div>
        )
    }

    var restrictionsArray = dietstring.split(',').map(function (restriction) {
        return restriction.trim(); // Trim any leading or trailing whitespaces
      });
}