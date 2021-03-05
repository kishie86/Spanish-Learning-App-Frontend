import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import SignInForm from './SignInForm'

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

class signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    created: false,
    errorMessage: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  createUser = (event) => {
    event.preventDefault();
    event.target.reset();
    const { username, email, password } = this.state;

    let user = {
      username: username,
      email: email,
      password: password,
    };

    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.status === "created") {
          this.setState({ created: true, errorMessage: "" });
        }
      })
      .catch((response) =>
        this.setState({
          errorMessage:
            "Uh-oh! It didn't work...Make sure your server is running!",
        })
      );
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
                  <MDBIcon icon="lock" /> SignUp:
                </h3>
              </MDBCardHeader>
        <form onSubmit={this.createUser} >
    
        <div className="grey-text">

        <MDBInput
                    label="Email"
                    icon="envelope"
                    group
                    
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={this.handleChange}
                  />

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
            Signup
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

export default signup;