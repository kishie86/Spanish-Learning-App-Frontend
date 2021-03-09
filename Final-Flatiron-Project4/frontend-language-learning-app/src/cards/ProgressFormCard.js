import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class ProgressFormCard extends Component {



  render() {
    return (
      <div className="progress-form-card"  className="block-example border border-secondary" style= {{width:300}}  >
        <body>

          <br/>
        
        <h2> <strong>{this.props.progress_form.name}</strong> </h2>
        <h2>Date: {this.props.progress_form.date}</h2>
        <h2>{this.props.progress_form.quiz}</h2>
        <br/>
        <strong> Message: </strong> {this.props.progress_form.content} 
        <div>
          <br/>
          <br/>
        <button  type="button"
  class="btn btn-outline-secondary btn-rounded"
  data-mdb-ripple-color="dark" onClick = {() => this.props.handleEdit (this.props.progress_form)}>Edit</button>
        <br>
        </br>
        <button   type="button"
  class="btn btn-outline-secondary btn-rounded"
  data-mdb-ripple-color="dark" onClick = {() => this.props.removeProgressForm (this.props.progress_form)}>Delete</button>
        <br>
        </br>
        </div>
        <br>
        </br>
        <NavLink to="/"> <strong> Return to Homepage</strong></NavLink>
        </body>
      </div>
    )
  }
}

export default ProgressFormCard