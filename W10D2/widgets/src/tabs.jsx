import React from 'react'
import Header from "./header"

export default class Tabs extends React.Component {
  constructor(props){
    super(props)
    this.state = {tabIndex: 0}
  }

  handleClick(e) {
    console.log(e);
  }

  render(){
    return (
      <div className="tabs">
        <div className="headers">
          {this.props.tabs.map( (tab, idx) => {
            return( 
              //creates an event listener, with a hardcoded idx that is set when this is created
              <div onClick={e => this.setState({tabIndex: idx})}> 
                <Header index={idx} title={tab.title}/>
              </div>
            )
          })}
        </div>

        <article>{this.props.tabs[this.state.tabIndex].content}</article>
      </div>
    )
  }
}