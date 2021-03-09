import React, { Component } from 'react';
import SignInForm from '../SignInForm'
import '@fortawesome/fontawesome-free/css/all.min.css';




import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


class ProgressForm extends Component {

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
          
          
        
          <MDBContainer >
            
          <MDBRow className = "progress-form " >
            <MDBCol md="6">
              <form onSubmit={(e) => this.handleSubmit(e)} className="add-newProgres-form">
                <p className="h5 text-center mb-4">Progress Form</p>
                <div className="grey-text">
                  <MDBInput onChange = {(e)=> this.setState({name: e.target.value})} name ="name" label="Your name" icon="user" group type="text" validate error="wrong"
                    success="right" />
                  <MDBInput onChange = {(e)=> this.setState({date: e.target.value})}  name ="date" label="Today's Date" icon="far fa-calendar" group type="text" validate error="wrong"
                    success="right" />
                  <MDBInput onChange = {(e)=> this.setState({quiz: e.target.value})} name ="quiz" label="Subject" icon="far fa-file-alt" group type="text" validate error="wrong" success="right" />
                  <MDBInput onChange = {(e)=> this.setState({content: e.target.value})} name = "content" type="textarea" rows="2" label="Your message" icon="pencil-alt" />
                </div>

                
                
                
                <div className="text-center">
                  <MDBBtn outline color="secondary"  type="submit">
                    Submit Progress Report
                    <MDBIcon far icon="paper-plane" className="ml-1" />
                  </MDBBtn>
                </div> 
                
              </form>
            </MDBCol>
          </MDBRow>
          

          
  
<MDBRow className="edit-progress-form"   >
  <MDBCol md="6">
    <form onSubmit={(e) => this.handleEdit(e, this.props.id)} className="edit-newProgres-form">
      <p className="h5 text-center mb-4">Edit Progress Report</p>
      <div className="grey-text">
        <MDBInput onChange = {(e)=> this.setState({name: e.target.value})} value = {this.state.name} name ="name" label= {this.props.name} icon="user" group type="text" validate error="wrong"
          success="right" />
        <MDBInput onChange = {(e)=> this.setState({date: e.target.value})}  value = {this.state.date} name ="date" label= {this.props.date} icon="far fa-calendar" group type="text" validate error="wrong"
          success="right" />
        <MDBInput onChange = {(e)=> this.setState({quiz: e.target.value})} value = {this.state.quiz} name ="quiz" label= {this.props.quiz} icon="far fa-file-alt" group type="text" validate error="wrong" success="right" />
        <MDBInput onChange = {(e)=> this.setState({content: e.target.value})} value = {this.state.content} name = "content" type="textarea" rows="2" label= {this.props.content} icon="pencil-alt" />
      </div>
      
      <div className="text-center">
        <MDBBtn outline color="secondary"  type="submit">
          Edit Progress Report
          <MDBIcon far icon="paper-plane" className="ml-1" />
        </MDBBtn>
        
      </div> 
    </form>
  </MDBCol>
</MDBRow>


</MDBContainer>  

     
        )
      }
    }



   
  

export default ProgressForm