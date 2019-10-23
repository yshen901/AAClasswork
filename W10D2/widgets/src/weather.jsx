import React from 'react';


const weatherAPI = (lat, long) => `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&id=524901&APPID=8edd3e184dda2e18dc4117836b2cbd20`
let long, lat;


export default class Weather extends React.Component {

  constructor(){
    super();
    this.state = {
      lat:0,
      long:0
    }
    this.updateLocation();
    console.log(this.state);
    // console.log(this.getRequest(weatherAPI(this.state.lat, this.state.long)))

  }

  updateLocation() { 
    let that = this;
    navigator.geolocation.getCurrentPosition(function (position) {
      that.setState({ lat: position.coords.latitude, long: position.coords.longitude}) 
      
    });
  }

  getRequest(url){
    let request = new XMLHttpRequest();
    let response;
    request.open('GET', url, true);

    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        // Success!
        return JSON.parse(this.response) 
        // response = this.response;
   
      } else {
        // We reached our target server, but it returned an error
        return 'fail'
      }
    };

    request.onerror = function () {
      return 'connection error'
      // There was a connection error of some sort
    };
    return request.send();
  }


  render () {
    return (
      <div>
        <h1>{ this.state} </h1>
      </div>
    )
  }
}