// import React from 'react'

// export default function ChildOne({addData,name="Dharmendra"}) {
//   // const {addData }=props;
//   // console.log(addData);
  
  
//   return (
//     <div>
//       <h1>I am from child 1 component {name}</h1>
//       <button onClick={()=>addData("Student of Skillected")}>Ckick me1</button>
//     </div>
//   )
// }

//classical component-

import React, { Component } from 'react'

export default class ChildOne extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <h1>hello from class component-Name: {this.props.name}</h1>
        <h1>email: {this.props.email}</h1>
      </div>
    )
  }
}

