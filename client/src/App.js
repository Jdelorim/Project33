import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserInventory from "./components/UserInventory";
import Mannequin from "./components/Mannequin";
import AddItem from "./components/AddItem";
import FacebookLoginButton from "./components/FacebookLoginButton";

import "./App.css";
// import axios from "axios";


class App extends Component {

  state = {
    username: null
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name
      });
    } else {
      alert('Facebook login error');
    }
  }

  render() {
    const { username } = this.state;
    return (
      <Router>
      <div className="App">
 
      <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
    
          <Route exact path="/" component={Home} />
          <Route path="/Login" />

          <Route exact path="/Signup" component={SignUp} />
          <Route exact path="/AddItem" component={AddItem} />

        <div className="App-intro">
          { !username &&
            <div>
              <FacebookLoginButton onLogin={this.onFacebookLogin}>
                <button>Facebook</button>
              </FacebookLoginButton>
            </div>
          }
          {username &&
            <p>Welcome back, {username}</p>
          }
        </div>
          
          <div className='flex-container'>
         
          <Route path="/UserInventory" render={(props) => (<UserInventory {...props} clothing={this.state.clothing} handleShirt={this.handleShirt} handlePants={this.handlePants} handleShoes={this.handleShoes} handleHat={this.handleHat} saveOutfit={this.saveOutfit}/>)} /> 
          <Route path="/UserInventory" render={(props) => (<Mannequin {...props} shirtIcon={this.state.shirtIcon} pantsIcon={this.state.pantsIcon} shoesIcon={this.state.shoesIcon} hatIcon={this.state.hatIcon} />)} /> 
         
          </div>

      </div>
      </Router>
    ); 
  }
}

export default App;