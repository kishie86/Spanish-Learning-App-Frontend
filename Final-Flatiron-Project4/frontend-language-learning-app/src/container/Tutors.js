import TutorCard  from '../cards/TutorCard'
import React, { Component } from "react";

class Tutors extends Component {

    state = {
        review: "",
        user_id: "",
    }

    handleEditTutorReview = (tutor) => {
        console.log(tutor)
        this.setState({
          review: tutor.review,
          user_id: tutor.user_id,
        })
      }

   render(){
    return( 

<div className= "tutor-card" >
    {
    this.props.tutors.map((tutor) => { 
    return <TutorCard tutor={tutor} 
    handleEditTutorReview={this.handleEditTutorReview}
    />

    
    
})

}
</div>
)
}}

    

export default Tutors