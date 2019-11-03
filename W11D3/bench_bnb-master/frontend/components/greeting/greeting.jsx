import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Greeting extends Component {
  render() {
    // debugger
    if(this.props.currentUser)
      return (
        <div className="greeting">
          <p>Hello {this.props.currentUser.username}, welcome back!</p>
          <button onClick={() => this.props.logout()}>Logout</button>
        </div>
      )
    else
      return (
        <div className="greeting">
          <Link to="/signup">Sign Up</Link>
          <br/>
          <Link to="/login">Sign In</Link>
        </div>
      )
  }
}