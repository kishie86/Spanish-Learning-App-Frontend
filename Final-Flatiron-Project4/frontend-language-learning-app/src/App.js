import React, { Component } from "react";
import "./App.css";
import SignUp from "./signup";
import Login from "./login";
import Home from "./Home"
import LearnLanguage from "./container/LearnLanguage"
import PickLanguage from "./components/PickLanguage"
import AboutUs from "./components/AboutUs"
import ProgressFormInfo from "./components/ProgressFormInfo"
import ProgressForm from "./components/ProgressForm"
import Help from "./components/Help"
import AuthDemo from "./authdemo";
import NavBar from "./cards/NavBar"
import StoredWords from "./container/StoredWords"
import Tutors from "./container/Tutors"
import editForm from "./components/editForm"

import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
<Route exact path="/" component={Home}></Route>



class App extends Component {
  state = {
    spanish_languages: [],
    words: [],
    tutors: [],
    searchText: "",
    progress_forms: [],
    storedWords: [],
    showForm: true,
    user: {},
    loggedIn: false,
    name: "",
    date: "",
    quiz: "",
    content: "",
    id: null,
    
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
        <div className = "please-log-in">
        <h1 className="greeting-text">

          Welcome back {this.state.user.username}!
        </h1>
        </div>
      );
    } else {
      return (
        <div className="please-log-in" >
          <h2>Please log in below!</h2>
        </div>
      );
    }
  };


  homeGreeting = () => {
    if (this.state.loggedIn) {
      return (
        
        <h1 className = "please-log-in" className="greeting-text" className ="row justify-content-center">

        Welcome back {this.state.user.username}!
        </h1>
        
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

      fetch("http://localhost:3000/api/v1/tutors")
      .then(res => res.json())
      .then(tData => this.setState({
        tutors: tData
      
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

  


    addToStoredWords = (word) => {
      if(!this.state.storedWords.includes(word))
     this.setState({
      storedWords: [...this.state.storedWords, word]
     })
      
    }

    removeStoredWords = (word) => {
      this.setState({
        storedWords: this.state.storedWords.filter(eachword => eachword.id !== word.id)
      })
    }
  
    

  render() {
    const filteredLanguage = this.state.spanish_languages.filter(spanish_languages => spanish_languages.name.toLowerCase().includes(this.state.searchText.toLowerCase()) )
    
    return (

      
  
      <div className="main-div">
       
        <BrowserRouter>
       
        <NavBar logOut= {this.logOut}  loggedIn={this.state.loggedIn}/>


          <Switch>

            <Route exact path="/" component={Home}>
             
              {this.homeGreeting()}
           
              <Home loggedIn={this.state.loggedIn} />
            </Route>

            <Route exact path="/login">

            {this.displayGreeting()}
            
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
            <StoredWords  removeStoredWords= {this.removeStoredWords} storedWords={this.state.storedWords}/>
              <LearnLanguage addToStoredWords={this.addToStoredWords} words={this.state.words} />
              </Route>

            <Route exact path="/ProgressForm">
              <ProgressForm  name={this.state.name} 
              date={this.state.date}
              quiz={this.state.quiz}
              content={this.state.content}
              id={this.state.id}
              addToProgressForm={this.addToProgressForm} />

              <editForm name={this.state.name} 
              date={this.state.date}
              quiz={this.state.quiz}
              content={this.state.content}
              id={this.state.id}/>

              {/* {this.state.showForm ? <editForm/> : null}  */}
          
              <ProgressFormInfo handleEdit={this.handleEdit} 
              removeProgressForm = {this.removeProgressForm} 
              progress_forms={this.state.progress_forms}/>
              </Route>


              <Route exact path="/help">
              <Help tutors={this.state.tutors} 
              
              />
              
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


