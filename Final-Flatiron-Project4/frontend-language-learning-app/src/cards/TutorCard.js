import React, { Component } from 'react';
import ReactStars from '../ReusableComponents/ReactStars'




export default class TutorCard extends Component {

  state= {

    review: "",
    user_id: "",
    id: null  
  }


  addToTutorReview = (newReview) => {
    if(!this.state.review.includes(newReview))
   this.setState({
    review: [...this.state.review, newReview]
   })
    
  }
  
  
  handleEdit(e, id){
       

    let editTutorReview = {
      review: this.state.review,
      user_id: this.state.user_id,
      id: this.state.id
      
  }


  let reqObj = {}
        reqObj.headers = {"Content-Type":"application/json"}
        reqObj.method = "PATCH"
        reqObj.body = JSON.stringify(editTutorReview)
        console.log(reqObj)
      
    
      fetch(`http://localhost:3000/api/v1/tutors'/${id}`, reqObj)
      .then(res => res.json())
      .then(editTutor =>
        this.props.addToTutorReview(editTutor))
        e.target.reset()
      }


    render() {

      

        return (
    
    
          <div className="tutor" className="block-example border border-secondary" >
             <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light"></div>
            
            <h2><img   class="card-img-top img-fluid" src={this.props.tutor.image} /></h2>
            <div class="card-body">
           
            <h2 class="card-title" className="row justify-content-center my-4 h2" >{this.props.tutor.name}</h2>
            <h3 class="card-title" className="row justify-content-center my-4 h2"> Teaches: {this.props.tutor.language}</h3>
            <h4 ><strong>{this.props.tutor.years_of_experience}</strong> Years of Experience</h4>
            <br/>
            <h4><strong>Bio:</strong> {this.props.tutor.bio}</h4>
            <br/>
            <h4><strong>Student Review:</strong></h4>
            <h5>{this.props.tutor.review}</h5>
            <button type="button" class="btn btn-outline-warning">Schedule a Meeting</button>
            <br/>
            <button class="btn btn-secondary" >Leave a Review</button>
            <br/>
            <footer><a onClick = {() => this.props.handleEditTutorReview (this.props.tutor.review)} href="#!" class="btn btn-outline-secondary">Edit Review</a></footer>
            <textarea onChange = {(e)=> this.setState({review: e.target.value})} value = {this.state.review} name = "review" type="textarea" label= {this.props.review}></textarea>
            <br>
            </br>
            <ReactStars/>
           </div>
           
          </div>
        )
      }
    }
    