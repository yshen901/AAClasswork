import React from "react"
import Clock from "./clock"
import Tabs from './tabs'
// import Weather from './weather'
class Root extends React.Component {



  render () {
    return (
      <div id="root">
        <Clock/>
        <br/>
        <Tabs tabs={[{title: 'AppAcademy', content: 'Is a great bootcamp program!'}, {title: 'General Assembly', content: 'Is lame bootcamp, you don\'t even learn anything!'}]}/>
        {/* <Weather/> */}
      </div>
    )
  }
}

export default Root