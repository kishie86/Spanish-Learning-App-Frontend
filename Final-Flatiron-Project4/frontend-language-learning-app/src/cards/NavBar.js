import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import {NavLink} from 'react-router-dom'


class NavBar extends Component {

    render() {
        return (
<div>
<nav className ="navbar">


    <div>
<Link to="" className="logo">
  
<h4>Libby's </h4>
</Link>
</div>


 
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


<Link className="topnav-right"  to="/login">
 Login
</Link>


<Link className="topnav-right" to="/signup">
 SignUp
</Link>



{this.props.loggedIn ? (
 <span className="pretty-link">
 

 <  button onClick={this.props.logOut}>Log Out</button> 
 </span>
) : <Redirect to="/" />}


</nav>
</div>
        )
    }
}

export default NavBar
