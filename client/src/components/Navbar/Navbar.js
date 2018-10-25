import React, { Component } from "react";
import "./Navbar.css";
import axios from "axios";

class Navbar extends Component {
    constructor(){
        super()
        this.logout = this.logout.bind(this)
    }


    
   logout(event){
       event.preventDefault();
       console.log(`loggin out`);
       axios.post("logout").then(response => {
           console.log(`responsdatafromLoggout ${response.data}`);
           if (response.status === 200) {
               this.props.updateUser({
                   loggedIn: false,
                   username: null
               });
           }
       }).catch(error => {
           console.log("logout error");
    });
} 

   



    render(){
        const loggedIn = this.props.loggedIn;
        console.log(`navbar render props`);
        console.log(this.props);
        return(
            <nav>
            <div className="nav-wrapper teal lighten-2">
            <div className="container">

              <a href="/UserInventory" className="brand-logo center">Inventory</a>
                <ul id="nav-mobile" className="left hide-on-small-only ">
                    <li><a href="/UserInventory">Inventory</a></li>
                    <li><a href="/AddItem">Add Item</a></li>
                    <li><a href="/Signup">Signup</a></li>
                    <li><a href="/Login">Login</a></li>
                </ul>


              </div>
            </div>
          </nav>
        )
    }

}
export default Navbar;