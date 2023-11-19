import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';


//import userinputtest from './userinputtest';
//import getingredients from './userinputtest1';
//import getdiet from './userinputtest';
//import './userinputtest1.css';

//import userinput from './websitecode';
//import './websitecode.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<userinput />);
root.render(<App />);
  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
