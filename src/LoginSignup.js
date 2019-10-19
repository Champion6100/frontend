import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import validator from 'validator';
import {Login} from './Login';
import {Signup} from './Signup';

export class LoginSignup extends React.Component {
  constructor(props){
    super(props);
    this.state= { isLoggedIn : props.handleLogin };
  }
  
  render() {
    const {isLoggedIn} = this.state;
    console.log("isLoggedIn", this.state.isLoggedIn);
    return(
      <Router>
        <div className="container">
        <nav className="navbar">
          <ul style={{float: "right"}}>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                {!isLoggedIn && <Link to="/signup">Signup</Link>}
              </li>
            </ul>
            </nav>
          <hr />
          <Route path="/login" component={login} />
          <Route path="/signup" component={signup} />
        </div>
      </Router>
    );
  } 
}

LoginSignup.defaultProps={
    handleLogin: false
}


function login() {
  return(
    <Login />
  );
}

function signup() {
  return(
    <Signup />
  );
}
