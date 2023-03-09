import React, { useState } from 'react'

export default function Capitalize(props) { 
  let [text, setter]= useState('enter something')
  let border="dark"
  let changer=()=>{ 
      let capt= text.toUpperCase()
      setter(capt)
       if(border==="dark"){
        border="danger"
      console.log("danger")}
        else if(border==="danger"){
          border="dark"
          console.log("dark")
        }} 
 

 

  return (
   
    <div className='container '>
      {/* <h1> {text}</h1> 
        <textarea className={`border border-4 border-${border}`} value={text}  name="" id="" cols="30" rows="10" onChange={fontleter}>
           
        </textarea>
        <button onClick={changer}>click</button>
         */}
        
          
        
        
    </div>
  )
}
