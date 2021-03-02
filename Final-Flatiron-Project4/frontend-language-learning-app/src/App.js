import React, { Component } from "react";
import "./App.css";
import SignUp from "./signup";
import Login from "./login";
import Home from "./home";
import LearnLanguage from "./components/LearnLanguage"
import PickLanguage from "./components/PickLanguage"
import AboutUs from "./components/AboutUs"
import ProgressFormInfo from "./components/ProgressFormInfo"
import ProgressForm from "./components/ProgressForm"
import AuthDemo from "./authdemo";

import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

class App extends Component {
  state = {
    spanish_languages: [],
    words: [],
    searchBar: "",
    progress_forms: [],
    user: {},
    loggedIn: false,
    name: "",
    date: "",
    quiz: "",
    content: "",
    id: null
  };

  setCurrentUser = (user) => {
    this.setState({
      user: user,
      loggedIn: true,
    });
  };

  logOut = () => {
    this.setState({ user: {}, loggedIn: false });
    localStorage.token = "";
  };

  displayGreeting = () => {
    if (this.state.loggedIn) {
      return (
        <h1 className="greeting-text">
          Welcome back {this.state.user.username}!
        </h1>
      );
    } else {
      return (
        <div className="please-log-in">
          <h2>Please log in below!</h2>
        </div>
      );
    }
  };

  componentDidMount = () => {
    let token = localStorage.token;
    if (typeof token !== "undefined" && token.length > 1) {
      this.tokenLogin(token);
    } else {
      console.log("No token found, try logging in!");
    }
  };



  tokenLogin = (token) => {
    fetch("http://localhost:3000/auto_login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token }),
    })
      .then((r) => r.json())
      .then((user) => this.setCurrentUser(user));
  };

    componentDidMount = () => {
      fetch("http://localhost:3000/api/v1/spanish_languages")
      .then(res => res.json())
      .then(spData => this.setState({
        spanish_languages: spData
        
      }))

      fetch("http://localhost:3000/api/v1/words")
      .then(res => res.json())
      .then(wordData => this.setState({
        words: wordData
      
      }))

      fetch("http://localhost:3000/api/v1/progress_forms")
      .then(res => res.json())
      .then(pfData => this.setState({
        progress_forms: pfData
      
      }))
    }


    searchBar = (text) => {

      //console.log(text)
      this.setState({
        searchText: text
      })
        
    }

    addToProgressForm = (progress_form) => {
      console.log(progress_form)
      //if(!this.state.user_events.includes(user_event))
      this.setState({
        progress_forms: [...this.state.progress_forms, progress_form]
      })
    }

      removeProgressForm = (progress_form) => {
        console.log(progress_form, 'im deleted')
        fetch("http://localhost:3000/api/v1/progress_forms/" + progress_form.id, {method: "DELETE"})
        .then(res => res.json)
        .then(() => { 
          this.setState({
            progress_forms: this.state.progress_forms.filter(pf_form => pf_form != progress_form)
          })
        })

      
    }

    handleEdit =(progress_form)=> {
      this.setState({
        name: progress_form.name,
        date: progress_form.date,
        quiz: progress_form.quiz,
        content: progress_form.content,
        id: progress_form.id
      })
    }

  render() {
    const filteredLanguage = this.state.spanish_languages.filter(spanish_languages => spanish_languages.name.toLowerCase().includes(this.state.searchBar.toLowerCase()) )
    
    return (
      <div className="main-div">
       
        <BrowserRouter>
          <Link className="pretty-link" to="/login">
            Login
          </Link>
          <span className="pretty-link"> </span>
          <br/>
          <Link className="pretty-link" to="/signup">
            SignUp
          </Link>
          <br />
          {this.state.loggedIn ? (
            <span className="pretty-link">
              <br />


              <button onClick={this.logOut}>Log Out</button>
            </span>
          ) : null}
          <br />
          
            
          <Link className="pretty-link" to="/">
            Home 
          </Link>
            <br/>



          <Link to="/about">About Us</Link>
            <br/>
          <Link to="/picklanguage">Pick Language</Link>
            <br/>
            <Link to="/learnlanguage">Learn Language</Link>
            <br/>
            <Link to="/progressform">Progress Form</Link>
            <br/>
          <Link to="/help">Help</Link>
            <br/>


         
        
          <Link className="pretty-link" to="/auth">
          Auth Check{" "}
            {!this.state.loggedIn
              ? "(Works better if you're logged in!)"
              : "(Try it now you're logged in!)"}
          </Link>{" "}
         
        
          <br />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/login">
              {this.state.loggedIn ? (
                <Redirect to="/" />
              ) : (
                <Login setCurrentUser={this.setCurrentUser} />
              )}
            </Route>

            <Route exact path="/signup">
              {this.state.loggedIn ? <Redirect to="/" /> : <SignUp />}
            </Route>





            <Route  exact path="/About">
              <AboutUs  />
              </Route>

            <Route  exact path="/PickLanguage">
              <PickLanguage searchBar = {this.searchBar} spanish_languages={filteredLanguage}  />
              </Route>

            <Route exact path="/LearnLanguage">
              <LearnLanguage words={this.state.words} />
              </Route>

            <Route exact path="/ProgressForm">
              <ProgressForm   name={this.state.name} 
              date={this.state.date}
              quiz={this.state.quiz}
              content={this.state.content}
              id={this.state.id}
              addToProgressForm={this.addToProgressForm} />
              <ProgressFormInfo handleEdit={this.handleEdit} removeProgressForm = {this.removeProgressForm} progress_forms={this.state.progress_forms}/>
              </Route>
            

            <Route exact path="/auth">
                <AuthDemo loggedIn={this.state.loggedIn} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


