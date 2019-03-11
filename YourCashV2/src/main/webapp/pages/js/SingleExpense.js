import React, { Component } from 'react';
import './BlogPost.css';

class SingleExpense extends Component{
    render(){
      return(
        <div className="BlogPost">
            <header className="Blog-header">
                <h1 className="Blog-date">{this.props.date}</h1>
                <h3 className="Event-name">{this.props.event}</h3>
            </header>
            <p className="Post-content">{this.props.content}</p>
        </div>
      );
    }
  }


export default SingleExpense;