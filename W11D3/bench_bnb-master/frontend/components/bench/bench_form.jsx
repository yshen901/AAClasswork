import React from 'react';
import { Redirect } from 'react-router-dom';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      lat: 0.00,
      lng: 0.00,
      seating: 0,
      redirect: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  // RETURN A REDIRECT SO YOU RE-RENDER...THIS COINCIDENTALLY ADDS THE FILTER WHILE ALSO CHANGING STATE
  handleSubmit(e) {
    e.preventDefault();
    this.props.addBench(this.state);
    this.setState({redirect: true});
  }

  //USE SETSTATE
  updateForm(type) {
    return (e) => {
      let info;
      if (type === 'lat' || type === 'lng')
        info = parseFloat(e.currentTarget.value)
      else if (type === 'seating')
        info = parseInt(e.currentTarget.value)
      else
        info = e.currentTarget.value

      this.setState({ [type]: info })
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/"/>;
    }
    return (
      <div className="new-bench-form">
        <form onSubmit={this.handleSubmit}>
          <label>Description: 
            <input type="text" onChange={this.updateForm('description')}/>
          </label>

          <label>Latitude:
            <input type="text" onChange={this.updateForm('lat')}/>
          </label>

          <label>Longitude:
            <input type="text" onChange={this.updateForm('lng')}/>
          </label>

          <label>Seating:
            <input type="text" onChange={this.updateForm('seating')}/>
          </label>

          <input type="submit" value="Add Bench"/>
        </form>
      </div>
    );
  }
}

export default BenchForm