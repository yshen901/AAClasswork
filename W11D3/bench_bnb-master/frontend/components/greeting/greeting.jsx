import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Greeting extends Component {
  render() {
    if(this.props.currentUser)
      return (
        <div className="greeting">
          <p>{welcomeMessage}</p>
          <button onClick={()=>this.props.logout()}>Logout</button>
        </div>
      )
    else
      return (
        <div className="greeting">
          <Link to="/api/users">Sign Up</Link>
          <br/>
          <Link to="/api/session_index">Sign In</Link>
        </div>
      )
  }
}