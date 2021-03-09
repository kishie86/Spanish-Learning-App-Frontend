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
      <div className="spanish-lang-card" className="block-example border border-secondary" style= {{width:300}} >
    
    
        <h2 className="row justify-content-center my-4 h2"   onClick = {handleRoute}> <strong>{props.spanish_language.name}</strong></h2>
        <h2> <img src={props.spanish_language.image} style={{width:300}} class="rounded-circle z-depth-2"/></h2>
       
        

        
        {/* <NavLink to="/NewEventForm"> <strong> Plan your next {this.props.event.name}</strong></NavLink> */}
        
        <br>
        </br>
      </div>
    )
  }


export default SpanishLanguageCard