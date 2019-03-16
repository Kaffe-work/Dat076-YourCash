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
        
                <div className="row"> 
                    <div className="column-left-App-logo">
                        <img src={"goldlogo2.svg"} height="100%"/>
                   </div>
                <div className ="column-middle-App-titles">  
                    <h1 className="App-title">YourCash App</h1>
                    <h3 className="App-subtitle">"Does thou even hoist your cash?"</h3>
                </div>
      
                <div className="column-right">
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
                </div>
        </header>
        <h3 className="App-intro">Let us help you track your expenses!</h3>
        <p>Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe diem lol Carpe </p>
        
               
        
      </div>
    );
  }
}

class Welcome extends React.Component{
    render(){
        return <h1>Lift the cash, {this.props.name}!</h1>
    }
}

class AppUser extends React.Component {
  render() {
    return (
             <div className="Appuser">
        <header className="App-header">
        <div className="left-App-logo">
        <img/>
                </div>
                <div className ="App-titles">  
            <Welcome name="105 iq godmode"/>
          
          <h3 className="App-subtitle">"CASHMAN"</h3>
           </div>
      
                <div className="right">
                
                </div>
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
                    Set a budget for yourself! Though, it's up to you to keep the budget...
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
 
 class UserExpense extends React.Component{
    render(){
      return(
        <div className="Post-feature">
        <FlavorForm ></FlavorForm>
        </div>
      
      );
    }
    
  }
 
 
 
 
 
 class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="RENT">Grapefruit</option>
            <option value="TRANSPORTATION">Lime</option>
            <option value="FOOD">Coconut</option>
            <option value="ENTERTAINMENT">Mango</option>
            <option value="TRAVEL">Mango</option>
            <option value="INSURANCE">Mango</option>
            <option value="OTHER">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
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
        {this.state.showWarning ? "Click me to Register" : "Nevermind i dont want to"}
                
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
        <App />
     
        <FeaturePost />
        <UserExpense/>
       
    </div>, 
    document.getElementById('root'));
    
    
    



ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);



