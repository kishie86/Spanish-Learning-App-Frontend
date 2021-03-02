import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class ProgressFormCard extends Component {



  

  render() {
    return (
      <div className="progress-form-card">
    
        <h1>{this.props.progress_form.name}</h1>
        <h1>{this.props.progress_form.date}</h1>
        <h1>{this.props.progress_form.quiz}</h1>
        
        <p>{this.props.progress_form.content}</p>
        <div>
        <button onClick = {() => this.props.handleEdit (this.props.progress_form)}>Edit</button>
        <br>
        </br>
        <button onClick = {() => this.props.removeProgressForm (this.props.progress_form)}>Delete</button>
        <br>
        </br>
        </div>
        <br>
        </br>
        <NavLink to="/"> <strong> Return to Homepage</strong></NavLink>
      </div>
    )
  }
}

export default ProgressFormCard