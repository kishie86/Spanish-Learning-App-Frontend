import React, { Component } from 'react';
//import {NavLink} from 'react-router-dom'


///take state and compare it to props for non english word
//render message to this card value if correct 

export default class WordCard extends Component {

  state = {
  userinput: ""

}

correctValue = () => {
  let value = this.state.userinput

  if (value == this.props.word.non_english_word )
  return "Correct" 
  else if (value !== this.props.word.non_english_word)
  return "Try Again"
}

 handleChange = (e) => { 
  this.setState({userinput: e.target.value})
}

  render() {

    return (


      <div className="word-card">
    
        <body>
        <h2> {this.props.word.english_word}</h2>
        <h2> <img src={this.props.word.image} style={{width:300}} /></h2>
        {/* <h2> {this.props.word.non_english_word}</h2> */}
        <input onChange = {this.handleChange} value = {this.state.userinput} placeholder = {"Type word here"}/> 
      {this.state.userinput !== this.props.word.non_english_word ? <p style={{color: "red"}}>Try again</p> : <p style={{color: "green"}}> correct </p>  }
        <br>
        </br>
        </body>
      </div>
    )
  }
}



  