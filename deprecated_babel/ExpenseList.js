import React, { Component } from 'react';
import SingleExpense from './SingleExpense.js';
/*import './BlogList.css';*/
class ExpenseList extends Component{
    render(){
      return(
        <div className="BlogList">
            <SingleExpense date="13 April - 2018" 
              event="Meme Denominator" 
              content=
                    "Anotherest STEAMING WORK IN IN pragruss"/>
            <SingleExpense date="12 April - 2018" event="Meme Dominator" 
            content=
                "Another STEAMING WORKIN IN PROGRESS"/>
            <SingleExpense date="11 April - 2018" event="Meme generator" 
                content=
                    "A STEAMING WORK IN IN PROGRESS"/>
        </div>
      );
    }
  }



export default ExpenseList;