import React from 'react';
import { Redirect, Link } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    if (this.props.formType === 'signup') this.state["email"] = "";

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    //const user = Object.assign({}, this.state); //why do we need this?
    this.props.processForm(this.state);
  }

  // curried so it has access to e...inner call has access to all outer call
  changeValue(type){
    return (e) => this.setState({[type]: e.currentTarget.value})
  }

  render() {
    if (this.props.formType === 'login')
      return (
        <div className="session-form">
          <h1>Login!</h1>
          <h3>{this.props.errors[0]}</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Username: 
              <input type="text" onChange={this.changeValue('username')}/>
            </label>
            <label>Password: 
              <input type="password" onChange={this.changeValue('password')}/>
            </label>
            <input type="submit" value="Log In"/>
          </form> 
          <Link to="/signup">Sign Up</Link>
        </div>
      )
    else if (this.props.formType === 'signup')
      return (
        <div className="session-form">
          <h1>Sign Up!</h1>
          <h3>{this.props.errors[0]}</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Username: 
              <input type="text" onChange={this.changeValue('username')}/>
            </label>
            <label>Email: 
              <input type="text" onChange={this.changeValue('email')}/>
            </label>
            <label>Password: 
              <input type="password" onChange={this.changeValue('password')}/>
            </label>
            <input type="submit" value="Sign Up" />
          </form>
          <Link to="/login">Log In</Link>
        </div>
      )
  }
}

export default SessionForm