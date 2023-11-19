import { useRef, useState } from "react";

import React from 'react';

function App() {
  

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [stringsEntered, setStringsEntered] = useState(false);

  const handleImageClick = (inputRef) => {
    inputRef.current.click();
  };

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);
  };

  const handleStringsSubmit = () => {
    // You can handle the string input here or call the getinputs function
    // For simplicity, I'm setting stringsEntered to true when the button is clicked
    setStringsEntered(true);
  };

  async function getdata(url){
  
  }

  function handleButtonClick() {
      const ingredientString = document.getElementById("ingredientInput").value;
      const ingredients = ingredientString.trim();
  
      const dietString = document.getElementById("restrictionInput").value;
      const diet = dietString.trim();
  
      // Clear the content on the page
      document.getElementById("ingredientInput").value = "";
      document.getElementById("restrictionInput").value = "";
      
      document.body.innerHTML="";

      let main_string = "https://127.0.0.1:1000/api/genfood?food="; 
      let second_string = main_string.concat(ingredients);
      let third_string = second_string.concat("&intolerance",diet);

      third_string;

      //const recipe = getdata(third_string);

      //JSON.stringify(recipe);


    }

  
    


  return (
    <div className="App">
      {stringsEntered ? (
        <>
          <div onClick={() => handleImageClick(inputRef1)}>
            {image1 ? (
              <img src={URL.createObjectURL(image1)} alt="" />
            ) : (
              <img src={process.env.PUBLIC_URL + '/uploadimage.png'} alt="" />
            )}
            <input
              type="file"
              ref={inputRef1}
              onChange={(event) => handleImageChange(event, setImage1)}
              style={{ display: "none" }}
            />
          </div>

          <div onClick={() => handleImageClick(inputRef2)}>
            {image2 ? (
              <img src={URL.createObjectURL(image2)} alt="" />
            ) : (
              <img src={process.env.PUBLIC_URL + '/uploadimage.png'} alt="" />
            )}
            <input
              type="file"
              ref={inputRef2}
              onChange={(event) => handleImageChange(event, setImage2)}
              style={{ display: "none" }}
            />
          </div>
        </>
      ) : (
        <div>
          <p>Welcome! Enter the ingredients you want to use, separated by commas:</p>
          <input type="text" id="ingredientInput" placeholder="e.g., eggs, lettuce, rice" />
          <br />
          <p>Now, enter any dietary restrictions or allergies, separated by commas:</p>
          <input type="text" id="restrictionInput" placeholder="e.g., gluten-free, vegetarian, nut-free" />
          <br />
          <button id="submitbutton" onClick={() => handleButtonClick()}>Submit</button>
        </div>
      )}
    </div>

  


  


  //display generated recipe, click button when done
  //function disprecipe(){

  //}
  

  //new window, photo upload
  //function uploadpics(){
   // document.body.innerHTML="";
  //}

  //call foodrecog api

  //judging
  )

}

export default App;
