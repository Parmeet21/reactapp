import React from 'react'


export default function Tittle(props) {
  return (
    <div >
   <h1> this is {props.name}</h1>
   <input type="text" value="THIS IS UPPER TO LOWER CASE"/><br />
   <button>
    click to uppercase
   </button>
</div> 
  )
}
