import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travels from "./Travels";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travels
          destination="Kerala"
          country="India"
          image="https://res.cloudinary.com/grainderiz/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1553260642/travels/yasasi-rajapakse-1215159-unsplash.jpg"
          distance="8446 km"
        />
      </div>
    );
  }
}

export default App;
