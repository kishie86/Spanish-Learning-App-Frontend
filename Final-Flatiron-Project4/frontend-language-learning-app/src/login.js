import React, { Component } from "react";
import { Redirect } from "react-router-dom";


import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
MDBContainer,
MDBRow,
MDBCol,
MDBCard,
MDBCardBody,
MDBIcon,
MDBCardHeader,
MDBBtn,
MDBInput
} from "mdbreact";


class login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  login = (event) => {
    event.preventDefault();
    event.target.reset();

    const { username, password } = this.state;
    const user = { username, password };

    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        console.log(response)
        if (response.user){
          this.props.setCurrentUser(response.user)
          localStorage.token = response.jwt
        }else{

          
          console.log(response.message)
        }
       
      });
  };

  render() {
    return (
    

<MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
        <form onSubmit={this.login} >
    
        <div className="grey-text">

                  <MDBInput
                    label="Username"
                    icon="envelope"
                    group
                    name= "username"
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.handleChange}
                  />
       
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    name= "password"
                    type="password"
                    validate
                    onChange={this.handleChange}
                  />

                </div>


<div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                >
            Login
                </MDBBtn>
     </div>
        </form>
       
     

</MDBCardBody>
</MDBCard>
</MDBCol>
</MDBRow>
</MDBContainer>

    );
  }
}
export default login;