import React, { useState } from 'react'

function App() {
  // const [data,setData] = useState("Dk");
  const [counter,setCounter]=useState(0)

  function increment(){
    setCounter((previousState)=>setCounter(previousState+1))
  }
 
  
  return (
    <div>
      <h1>hello from App {counter}</h1>
      {/* <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <button onClick={()=>setCounter(counter-1)}>decrement</button> */}

       <button onClick={increment}>Increment</button>
    </div>
  )
}

export default App
