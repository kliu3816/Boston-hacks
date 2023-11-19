
export default function getingredients(){
    return(
        <div id="ingredientPrompt">
        let ingredientsstring = prompt("Welcome! Enter the ingredients you want to use, separated by commas:","e.g., eggs, lettuce, rice");
        </div>
    )
}


export function getdiet(){
    return(
        <div id="restrictionPrompt">
        let dietstring = prompt("Now, enter any dietary restrictions or allergies, separated by commas:","e.g., gluten-free, vegetarian, nut-free");
        </div>
    )
}



