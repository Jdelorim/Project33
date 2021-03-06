import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect} from "react-router-dom";
import "./SignUp.css";


class SignUp extends Component {

    state= {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        signedUp: false,
        showTaken: false
    };

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;

        if(name === "password" || name === "confirmPassword"){
            value = value.substring(0,15);
        }

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if(this.state.username === "") {
            alert("please fill out username");
        } else if (this.state.email === "") {
            alert("please fill out email");
        } else if (this.state.password === "") {
            alert("please fill out password");
        } else if (this.state.confirmPassword === "") {
            alert("please Confirm your Password")
        } else if(this.state.password !== this.state.confirmPassword) {
            alert("passwords do not match!");
        } else {
      this.setState({
          username: "",
          email: "",
          password: "",
          confirmPassword: ""
          
      });


      axios.post("/api/signup", {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
          
      }).then(response => {
          console.log("REPONSE ON FRONT END: ",response);
          if(!response.data.errmsg) {
              console.log("successful signup");
                this.setState({
                  redirectTo: "/login"
                })
            } else {
              console.log("username already taken!");
          
          }
      }).catch(error => {
          console.log(`sign up server errors ${error}`);
      })
     }
    };



    render(){
        if(this.state.signedUp === true){
          return <Redirect to="/UserInventory" />
        }

        return(

            <div className="SignUp-main">
                <div className="container">
               {this.state.showTaken ?  <div className="taken">username already taken</div> : null}
                    <div className="signupWrapper">
                    <div className="SignUp-header">
                        <h1 className="SignUp-text">Sign Up</h1>
                    </div>
                <form className="SignUp-form">
                <label htmlFor="userName">Username</label>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="user@gmail.com"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
                <label htmlFor="confirmPassword">Confim Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="confirm password"
                    value={this.state.confirmPassword}
                    onChange={this.handleInputChange}
                />
                <div className="btnHolder">
                    <button 
                    className="submitBtn"
                    onClick={this.handleFormSubmit}
                    type="submit" 
                    >Submit</button> 
                </div>
                <br></br>
                <div className="go-login">
                    <Link to="/Login">Already got an account? Log in!</Link>
                </div>
                </form>
                </div>
                </div>    
            </div>
        )
    }
}

export default SignUp;