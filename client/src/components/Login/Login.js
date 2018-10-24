import React, { Component } from "react";
import "./Login.css";
import axios from "axios";

class Login extends Component {

    state= {
        email: "",
        password: "",
        redirectTo: null
    };

    handleInputChange = e => {
      
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleLoginSubmit = e => {
        e.preventDefault();
        console.log("into submit");
        /*
        if(this.state.email === "" || this.state.password === "") {
            alert("please fill out email and password");
        } else {
        this.setState({
            email: "",
            password: ""
        });
        console.log(`email: ${this.state.email}`);
        console.log(`password: ${this.state.password}`);
        }
        */
       axios.post("/login", {
           username: this.state.username,
           password: this.state.password
       }).then(response => {
           console.log(`response: ${response}`);
           if (response.status === 200) {
               this.probs.updateUser({
                   loggedIn:true,
                   username: response.data.username
               })
               this.setState({
                   redirectTo: "/"
               })
           }
       }).catch(error => {
           console.log(`login error ${error}`);
       })
    }


render(){
    return(
    <div className="login-main">
        <div className="container">
            <div className="login-header">
                <h1 className="grey-text">Login</h1>
            </div>
        <form className="login-form">
        <label htmlFor="email">Email: </label>
        <input
            type="text"
            name="email"
            placeholder="User@aol.com"
            value={this.state.email}
            onChange={this.handleInputChange}
        />
        <label htmlFor="password">Password: </label>
        <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleInputChange}
        />
        <div className="btnHolder">
            <button 
            className="submitBtn"
            onClick={this.handleLoginSubmit}
            type="submit" 
            >Submit</button> 
        </div>
        <br></br>
        <div className="go-login">
            <a href="/Signup">Sign Up to gain access to Inventory</a>
        </div>
        </form>
        </div>
        </div>
    )
}


}

export default Login;