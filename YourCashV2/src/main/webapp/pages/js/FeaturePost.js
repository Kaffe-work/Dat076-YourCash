//import React, { Component } from 'react';
//import './BlogPost.css';

$(document).ready(function(){
    class FeaturePost extends Component{
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
})




//export default FeaturePost;