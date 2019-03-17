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
                        <LoginForm/>
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
            
        <div className="App">
            <header className="App-header">
        
                <div className="row"> 
                    <div className="column-left-App-logo">
                        <img src={"goldlogo2.svg"} height="100%"/>
                   </div>
                <div className ="column-middle-App-titles">  
                    <Welcome name="sgsgsg"/>
                </div>
      
                <div className="column-right">
                    <form>
                    <div>
                    <button className="Button-Logout">LOG OUT!!!!</button>
                        </div>
                    </form>
                </div>
                </div>
        </header>
        <p></p>
        
               
        
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
            <div className="Post-feature-center">
            <header className="Post-feature-header">
       
                      <Page2></Page2>
              </header>
            </div>
      
      );
    }
    
  }
 
 
 class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password:""};

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }
  
  handlePassword(event) { 
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite username is: ' + this.state.username + " your favorite password is:" + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          USE A NAME:<br></br>
        <input type="text" onChange={this.handleUsername} />
        <br></br>
        PASS A WORD:<br></br>
          <input type="password" onChange={this.handlePassword}/>
          <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

 class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password:""};

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsername(event) {
    this.setState({username: event.target.value});
  }
  
  handlePassword(event) { 
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    alert('Your wanted username is: ' + this.state.username + " your wanted password is:" + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          USE A NAME <br></br>
        <input type="text" onChange={this.handleUsername} />
        <br></br>
        PASS A WORD:<br></br>
          <input type="password" onChange={this.handlePassword}/>
          <br></br>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
 
 class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'OTHER', cost: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleCost = this.handleCost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    handleCost(event){
        this.setState({cost: event.target.value});
    }



  handleSubmit(event) {
    
    alert('Your favorite expense is: ' + this.state.value + ' And dollars: ' + this.state.cost);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite Expense:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="OTHER">Other</option>
            <option value="RENT">Rent</option>
            <option value="TRANSPORTATION">Transportation</option>
            <option value="FOOD">Food</option>
            <option value="ENTERTAINMENT">Entertainment</option>
            <option value="TRAVEL">Travel</option>
            <option value="INSURANCE">Insurance</option>
          
          </select>
        </label>
        <input type="number" onChange={this.handleCost} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
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
 
 
 
 
 
 
 //tableclass with features for sorting 
 
 class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
  
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  
  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }
  
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

//this is temp untill we get backend input
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'sad', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
  
  
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
 
 class Page2 extends React.Component {
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
      <div>
        
        <button onClick={this.handleToggleClick}>
        {this.state.showWarning ? "Click me to Register" : "Nevermind i dont want to"}
                
        </button>
        {this.state.showWarning ? <div></div> : <ExpenseForm/>} 
      </div>
      <FilterableProductTable products={PRODUCTS} />
              </div>
    );
  }
}
 
  
  class FeatureRegister extends React.Component{
    render(){
      return(
        <div className="Post-feature">
            <RegisterForm/>
        </div>
      
      );
    }
    
  }
  
ReactDOM.render(
    <div>
        <App />
        <FeaturePost />
        <AppUser />
        <UserExpense/>
       
    </div>, 
    document.getElementById('root'));
    
    
    



ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);



