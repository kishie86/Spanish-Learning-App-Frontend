import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';

class SignInForm extends Component {
  state={

    name: "",
    date: "",
    quiz: "",
    content: "",
    id: null
    
   
    
  }


  

  handleEdit(e, id){
   
    console.log(e)

    let editProgressForm = {
      name: this.state.name,
      date: this.state.date,
      quiz: this.state.quiz,
      content: this.state.content,
      id: this.state.id
      
      
      
  }

  
  //console.log(newProgressForm)

  let reqObj = {}
    reqObj.headers = {"Content-Type":"application/json"}
    reqObj.method = "PATCH"
    reqObj.body = JSON.stringify(editProgressForm)
    console.log(reqObj)
  

  fetch(`http://localhost:3000/api/v1/progress_forms/${id}`, reqObj)
  .then(res => res.json())
  .then(editProgressForm =>
    this.props.addToProgressForm(editProgressForm))
    e.target.reset()
  }



  handleSubmit(e){
    e.preventDefault()
    //console.log(this.state)
    let newProgressForm = {
      name: this.state.name,
      date: this.state.date,
      quiz: this.state.quiz,
      content: this.state.content,
      
  }
  //console.log(newProgressForm)

  let reqObj = {}
    reqObj.headers = {"Content-Type":"application/json"}
    reqObj.method = "POST"
    reqObj.body = JSON.stringify(newProgressForm)
    console.log(reqObj)
  

  fetch('http://localhost:3000/api/v1/progress_forms', reqObj)
  .then(res => res.json())
  .then(newProgressForm =>
    this.props.addToProgressForm(newProgressForm))
    e.target.reset()
  }



  render() {
    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={(e) => this.handleSubmit(e)} className="add-newProgres-form">
            <p className="h5 text-center mb-4">Progress Form</p>
            <div className="grey-text">
              <MDBInput onChange = {(e)=> this.setState({name: e.target.value})} name ="name" label="Your name" icon="user" group type="text" validate error="wrong"
                success="right" />
              <MDBInput onChange = {(e)=> this.setState({date: e.target.value})}  name ="date" label="Today's Date" icon="envelope" group type="text" validate error="wrong"
                success="right" />
              <MDBInput onChange = {(e)=> this.setState({quiz: e.target.value})} name ="quiz" label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
              <MDBInput onChange = {(e)=> this.setState({content: e.target.value})} name = "content" type="textarea" rows="2" label="Your message" icon="pencil-alt" />
            </div>
            <div className="text-center">
              <MDBBtn outline color="secondary">
                Submit Progress Report
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtn>
            </div> 
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
    };
  }



export default SignInForm