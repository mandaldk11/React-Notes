import React from 'react'
import ComponentC from './ComponentC'

export default function ComponentB(props) {
  console.log(props);
  
  return (
    <div>
       <h1>hello from component B</h1>
       <ComponentC name={props.name}/>  
    </div>
  )
}



