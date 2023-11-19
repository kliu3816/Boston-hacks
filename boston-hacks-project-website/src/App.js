import { useRef, useState } from "react";
//import axios from 'axios';
import React from 'react';



function App() {

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

  function gotojudging(){
    handleStringsSubmit();
    
  }


  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }

  //get data from recipe generator API and display the recipe
  async function fetchAPI(url) {
    try {
      let response = await fetch(url);
      let responseJson = await response.json();
      return responseJson.movies;
     } catch(error) {
      console.error(error);
    }
  }

  function handleButtonClick(clearlocation) {
    const ingredientString = document.getElementById("ingredientInput").value;
    const ingredients = ingredientString.trim();
  
    const dietString = document.getElementById("restrictionInput").value;
    const diet = dietString.trim();

      //document.getElementById("ingredientInput").value = "";
      //document.getElementById("restrictionInput").value = "";
      //document.getElementById(clearlocation).innerHTML = "";
      //document.getElementById("submitbutton").innerHTML = "";
      
      //document.body.innerHTML="";

    const string1 = "https://127.0.0.1:1000/api/genfood?food=";
    const string2 = string1.concat(ingredients);
    const stringurl = string2.concat("&intolerence=",diet);

      //const recipe = getdata(stringurl);

    const resultwindow = window.open("","_blank");
    resultwindow.document.write('<p>Recipe:</p>');
    resultwindow.document.write(stringurl);
    resultwindow.document.write('<p>Compete against each other to make the best dish! Press the button when you are done to upload your pictures.</p>');
    resultwindow.document.write('<button id="donebutton" onClick={gotojudging()}>Done cooking</button>');
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
        <div id="instructions">
          <p>Welcome! Enter the ingredients you want to use, separated by commas:</p>
          <input type="text" id="ingredientInput" placeholder="e.g., eggs, lettuce, rice" />
          <br />
          <p>Now, enter any dietary restrictions or allergies, separated by commas:</p>
          <input type="text" id="restrictionInput" placeholder="e.g., gluten-free, vegetarian, nut-free" />
          <br />
          <button id="submitbutton" onClick={() => handleButtonClick("instructions")}>Submit</button>
        </div>  
  )}
  </div>
  )
}

export default App;