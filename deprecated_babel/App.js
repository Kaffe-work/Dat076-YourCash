import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4 className="App-contact">LOGO</h4>
         {/*<img src={logo} className="App-logo" alt="logo" /> */} 
          <h1 className="App-title">YourCash App</h1>
          <h3 className="App-subtitle">"Does thou even hoist your cash?"</h3>
          <h4 className="App-sponsor">Register: Login:</h4>
        </header>
        <h3 className="App-intro">Let us help you track your expenses!</h3>
        <p>Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe </p>
        
      </div>
    );
  }
}

export default App;
