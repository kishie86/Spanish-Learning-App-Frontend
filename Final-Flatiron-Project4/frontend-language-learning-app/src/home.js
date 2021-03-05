import React, { Component } from "react";
//import Header from './components/Header'
//import Footer from './components/Footer'
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      
      <div className="home-page">

    
      {/* Completely unneccessary welcome img, but why not make this at least a little fun */}
        <img className = "home-pic" src/>
        <br />

        
        <p>Welcome to Language Learning App. <br/> Love the Language you speak</p>
     
      </div>
    );
  }
}

export default Home;

