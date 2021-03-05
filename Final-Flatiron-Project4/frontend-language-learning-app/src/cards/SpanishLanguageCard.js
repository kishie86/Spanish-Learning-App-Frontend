import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
//import {NavLink} from 'react-router-dom'
import {useHistory} from "react-router-dom"


 function SpanishLanguageCard(props) {

  const history = useHistory()
 
  const handleRoute = () => {
    history.push("/LearnLanguage")
  }

  
    return (
      <div className="spanish-lang-card">
    
    
        <h2 onClick = {handleRoute}>{props.spanish_language.name}</h2>
        <h2>French</h2>
        <h2>Portuguese</h2>
        <h2>Hindi</h2>

        
        {/* <NavLink to="/NewEventForm"> <strong> Plan your next {this.props.event.name}</strong></NavLink> */}
        
        <br>
        </br>
      </div>
    )
  }


export default SpanishLanguageCard