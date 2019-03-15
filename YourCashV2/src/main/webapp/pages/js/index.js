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
        <div className="left-App-logo">
        <img />
                </div>
                <div className ="App-titles">  
          <h1 className="App-title">YourCash App</h1>
          
          <h3 className="App-subtitle">"Does thou even hoist your cash?"</h3>
           </div>
      
          <div className="right"><form>
        <label>
    Name:
      <br>
                </br>
    <input type="text" name="name" />
  </label>
  <br>
                </br>
  
                <label>
    password:
      <br>
                </br>
    <input type="password" name="password" />
  </label>
    <br>
                </br>
  <input type="submit" value="Submit" />
</form></div>
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
        <div className="Post-feature">
            <header className="Post-feature-header">
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
                    Set a budget for yourself! Th
                    ough, it's up to you to keep the budget...
                  </p>
            </header>
        
        
            <h2 className="FeaturePost-register">Intrigued? Register below!</h2>
            <header className="FeaturePost-header">
            <div className="Post-feature-center">
            <header className="Post-feature-header">
       
                      <Page></Page>
              </header>
            </div>
            </header>
        </div>
      
      );
    }
    
  }
  
  
  function RegButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

class RegisterControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.state = {wantsToRegister: false};
  }

  handleRegisterClick() {
      console.log("sdg")
    this.setState({wantsToRegister: true});
  }

  render() {
    const wantsToRegister = this.state.wantsToRegister;
    let button;
    
    if (wantsToRegister) {
      button = <RegButton onClick={this.handleRegisterClick} />;
      
    }

    return (
      <div>
        <Greeting wantsToRegister={wantsToRegister} />
        {button}
      </div>
    );
  }
}
  
  
class RegisterButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
      WarningBanner(true);
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
 
 
 
  
  
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        
        <button onClick={this.handleToggleClick}>
        {this.state.showWarning ? "<FeaturePost/>" : "<FeatureRegister/>"}
                
        </button>
        {this.state.showWarning ? <div></div> : <FeatureRegister/>} 
      </div>
      
    );
  }
}
  
  
  class FeatureRegister extends React.Component{
    render(){
      return(
        <div className="Post-feature">
        <form>
        <label>
    Name:
      <br>
                </br>
    <input type="text" name="name" />
  </label>
  <br>
                </br>
  
                <label>
    password:
      <br>
                </br>
    <input type="password" name="password" />
  </label>
    <br>
                </br>
  <input type="submit" value="Submit" />
</form>
        </div>
      
      );
    }
    
  }
  
ReactDOM.render(
    <div>
        <WarningBanner warn={false}    />
        <App />
     
        <FeaturePost />
       
    </div>, 
    document.getElementById('root'));
    
    
    



ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);


