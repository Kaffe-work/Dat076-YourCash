//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App.js';
//import registerServiceWorker from './registerServiceWorker';
//import FeaturePost from './FeaturePost.js';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h4 className="App-contact">LOGO</h4>
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

class FeaturePost extends React.Component{
    render(){
      return(
        <div className="FeaturePost">
            <header className="FeaturePost-header">
                <h1 className="FeaturePost-title">Why</h1>
                  <p className="Post-content">
                    If you need further convincing than the crocodile, here are the features that may sway your mind:
                  </p>
                <h3>Categories:</h3>
                  <p>
                    Support for categories exists so you can track cost from different parts of your life.
                  </p>
                <h3>Budget:</h3>
                  <p>
                    Set a budget for yourself! Though, it's up to you to keep the budget...
                  </p>
            </header>
            <h2 className="FeaturePost-register">Intrigued? Register below!</h2>
            <header className="FeaturePost-header">
            <div className ="knaussButton">
              <button className ="RegisterButton-landing">CLICK THE HECK OUT OF ME TO START PARTYING</button>
            </div>
            </header>
        </div>
      );
    }
    
  }
  
ReactDOM.render(
    <div>
        <App />
        <FeaturePost />
    </div>, 
    document.getElementById('root'));





