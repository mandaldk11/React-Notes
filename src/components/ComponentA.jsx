// export default function App() {
// // const [data,setData]=  useState("dk")
//   return (
//     <div>
//       <ComponentA name="Dk"/> 
//     </div>
//   )
// }





import React from 'react'
import ComponentB from './ComponentB.jsx'

export default function ComponentA(props) {
  // console.log(props);
  
  return (
    <div>
       <h1>hello from component A</h1>
       <ComponentB name={props.name}/>  
    </div>
  )
}
