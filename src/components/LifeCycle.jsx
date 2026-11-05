import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor(){
    super()
    console.log("constructor run...");
    
  }
  componentDidMount(){
    console.log('component did mount is called...');
    
  }

  componentDidUpdate(){
     console.log('component did update is called...');
  }
   componentWillUnmount(){
     console.log('component will unmount is called...');
  }
  render() {
    console.log("render run...");
    return (
      <div>
        <h1>Hello from lifeCycle</h1>
      </div>
    )
  }
}
