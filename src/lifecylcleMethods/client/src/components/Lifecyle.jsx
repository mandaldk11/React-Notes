import React, { Component } from 'react'
import ChildComp from './ChildComp.jsx';

export default class Lifecyle extends Component {
  constructor(){
    super()
    this.state={
      counter:0,
      display:true
    }
    console.log('hello from constructor..');
    
  }

  componentDidMount(){
    console.log('componendDidMount...');
    
  }

   componentDidUpdate(){
    console.log('componendDidUpdate...');
    
  }
incriment=()=>{
  this.setState({counter:this.state.counter+1})
}


  
  render() {
    console.log('hello from render');
    
    return (
      <div>
        {
          this.state.display ?   <ChildComp/>  :""
        }
      <button onClick={()=>{this.setState((prev)=>({display:!prev.display}))}}>Toggle</button>
        <h1>hello from lifeCycle {this.state.counter}</h1>
        <button onClick={this.incriment}>Increament</button>
      </div>
    )
  }
}
