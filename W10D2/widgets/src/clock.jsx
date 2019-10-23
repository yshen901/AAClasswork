import React from "react"


export default class Clock extends React.Component {

  constructor() {
    super();
    this.state = { time: this.currentTime(new Date()), date: this.currentDate(new Date()) };
    this.tick = this.tick.bind(this);
  }

  tick(){
    this.setState({ time: this.currentTime(new Date()), date: this.currentDate(new Date())});
  }

  currentTime(date) {
    return [date.getHours(), date.getMinutes(), date.getSeconds()].join(":");
  }

  currentDate(date) {
    return date.toString().split(" ").slice(0, 4).join(" ");
  }

  componentDidMount(){
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    //use className not class
    return (
      <div className="clock-widget">
        <h1>Clock</h1>
        <div className="clock">
          <h3 className="time"> {this.state.time} </h3>
          <h3 className="date"> {this.state.date} </h3>
        </div>
      </div>
    )
  }

}