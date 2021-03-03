import React, { Component } from 'react';


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
         <div>
            <div>
              <h1>Progress Form</h1>
          <form onSubmit={(e) => this.handleSubmit(e)} className="add-newProgres-form" >
             
              <input onChange = {(e)=> this.setState({name: e.target.value})} type="text" name="name" placeholder="Enter Name..." className="input-text"/>
              <br/>
              <input onChange = {(e)=> this.setState({date: e.target.value})} type="text" name="date" placeholder="Enter Date..." className="input-text"/>
              <br/>
              <input onChange = {(e)=> this.setState({quiz: e.target.value})}type="text" name="quiz" placeholder="Enter Quiz..." className="input-text"/>
              <br/>
              <input onChange = {(e)=> this.setState({content: e.target.value})} type="text" name="content" placeholder="Enter Content..." className="input-text"/>
              <br/>
              {/* <input onChange = {(e)=> this.setState({event_id: e.target.value})} type="text" name="event_id" placeholder="Enter Event..." className="input-text"/> */}
              {/* <br/> */}
              {/* <input onChange = {(e)=> this.setState({user_id: e.target.value})} type="text" name="event_id" placeholder="Enter Event..." className="input-text"/> */}
              {/* <br/> */}
              <input type="submit" name="submit" value="Create New Progress" className="submit"/>
            </form>
            
           </div>
          




<div>
  <h1>Edit Progress Form</h1>
  <form onSubmit={(e) => this.handleEdit(e, this.props.id)} className="edit-newProgres-form" >

   <input onChange = {(e)=> this.setState({name: e.target.value})} value = {this.state.name} type="text" name="name" placeholder= {this.props.name} />
    <br/>
    <input onChange = {(e)=> this.setState({date: e.target.value})} value = {this.state.date} type="text" name="date" placeholder={this.props.date}  />
    <br/>
    <input onChange = {(e)=> this.setState({quiz: e.target.value})} value = {this.state.quiz} type="text" name="quiz" placeholder={this.props.quiz} />
    <br/>
    <input onChange = {(e)=> this.setState({content: e.target.value})} value = {this.state.content} type="text" name="content" placeholder={this.props.content}  />
    <br/>
    <input type="submit" name="submit" value="Edit Progress Form" className="submit"/>

</form>
</div>
</div>

          
          
        );
     }
      
      }
   
  

export default ProgressForm


// (this.state.name.length > 1 ? editProgressForm.name = this.state.name: null)
//       (this.state.date.length > 1 ? editProgressForm.date = this.state.date : null)
//       (this.state.quiz.length > 1 ? editProgressForm.quiz = this.state.quiz : null)
//       (this.state.content.length > 1 ? editProgressForm.content = this.state.content : null)