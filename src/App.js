import logo from './logo.svg';
import React from 'react';
import Main from './components/MainComponent';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
function App(){

  
    return (
      <BrowserRouter> 
      <div>
         <Main />
      </div>
      </BrowserRouter>
    );
  
  
}

export default App;
