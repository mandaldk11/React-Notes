import React, { useState } from 'react'
import ChildOne from './components/ChildOne.jsx'
import ChildTwo from './components/ChildTwo.jsx'

function App() {
  const [dataFromParent,setDataFromParent]=useState("");
  const addData =(data)=>{
    console.log(data);
    setDataFromParent(data)
    
  }
  return (
    <div>
      {/* <ChildOne addData={addData} /> */}
      <ChildOne  name="gaurav"  email="gaurav@gmail.com"/>
      {/* <ChildTwo dataFromParent={dataFromParent}/> */}
    </div>
  )
}

export default App
