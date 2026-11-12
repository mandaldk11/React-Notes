import React, { Component } from 'react'

export default class ChildComp extends Component {
   constructor(){
      super();
    }
  
    componentWillUnmount(){
      console.log("component will unmount called...");
      
    }
  render() {
    return (
      <div>
        <h1>hello from child</h1>
      </div>
    )
  }
}
