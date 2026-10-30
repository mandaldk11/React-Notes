// * React State Management in Class based component -
// ---------------------------------------------------------------------


// import React from 'react'
// class State extends React.Component{
//   constructor(){
//     super();
//     this.state ={
//       name:"Dk",
//       email:"mandal11@gmail.com",
//       counter:1,
//       display:true
//     }
//   }
//   updateCounter=()=>{
//     this.setState({counter:this.state.counter+1})
//   }
//   render(){
//     return(
//       <>
//       <h1>hello from state {this.state.name}</h1>
//       <h1>hello from state {this.state.email}</h1>
//       <h1>hello from state {this.state.counter}</h1>
//       {/* <button onClick={()=>this.setState({counter:this.state.counter+1})}>Update+</button> */}
//       <button onClick={this.updateCounter}>Update+</button>
     
//       </>
//     )
//   }
// }

// export default State









//state management in React functional component-
// ------------------------------------------------------

// import React, { useState } from 'react'

// function App() {
//   // const [data,setData] = useState("Dk");
//   const [counter,setCounter]=useState(0)

//   function increment(){
//     setCounter((previousState)=>setCounter(previousState+1))
//   }
 
  
//   return (
//     <div>
//       <h1>hello from App {counter}</h1>
//       {/* <button onClick={()=>setCounter(counter+1)}>Increment</button>
//       <button onClick={()=>setCounter(counter-1)}>decrement</button> */}

//        <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// export default App


