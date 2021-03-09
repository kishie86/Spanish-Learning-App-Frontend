import React, { Component } from "react";
import HeroSection from './components/HeroSection'

//import Header from './components/Header'
//import Footer from './components/Footer'
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
class Home extends Component {
  render() {
    return (
      <>
    <HeroSection />
      </>
    );
  }
}

export default Home;

