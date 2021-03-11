import React, { Component } from 'react';




export default class TutorCard extends Component {

  state= {

    review: "",
    name: "",
    image: "",
    language: "",
    bio: "",
    years_of_experience:"",
    user_id: "",
  }
  
  
  
  handleSubmit(e) {
  
    e.preventDefault()
    //console.log(this.state)
    let newReview = {
      review: this.state.review,
     
    }
  
  
      
    let reqObj = {}
    reqObj.headers = {"Content-Type":"application/json"}
    reqObj.method = "POST"
    reqObj.body = JSON.stringify(newReview)
    console.log(reqObj)
  
  
  fetch('http://localhost:3000/api/v1/tutors', reqObj)
  .then(res => res.json())
  .then(newReview =>
    this.props.addTutorCard(newReview))
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
            <footer><a href="#!" class="btn btn-secondary">Leave a Review</a></footer>
            <br>
            </br>
           </div>
          </div>
        )
      }
    }
    