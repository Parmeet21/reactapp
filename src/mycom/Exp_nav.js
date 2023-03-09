import React, { useState } from 'react';
import Exp_alert from './Exp_alert';


export default function Exp_nav(props) {
  const [clr,set]=useState({
    backgroundColor:"red",
    color:"white"
   
  })

  const setbgcolor = () =>{
   
   if(clr.backgroundColor==="red"){
    set({
      backgroundColor:"purple",
      color:"white"
    })}
  else{
    set({ backgroundColor:"red",
    color:"white"}) 
  }
  setalert('clicked')
  }
const[text,mode]=useState('type somethig')
let rr=(e)=>{
  mode(e.target.value)
}
const [alt, setalert]=useState(alert)


  return (
    <div>
      
      <nav className={`navbar navbar-${props.textcolor} navbar-expand-lg bg-${props.bgcolor}`}>
      <Exp_alert mess={alt} />
  <div className="container-fluid  ">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse navbar-text-primary" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
        <li className="nav-item"  >
          <a className="nav-link disabled" href='/'>Disabled</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="form-check form-switch" >
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"  onChange={props.changer}/>
 </div>
</nav>
<h1>{text}</h1> 
<div style={clr} className='container   d-flex justify-content-center'>
<textarea value={text} className="" onChange={rr} name="" id="" cols="30" rows="10"></textarea></div>
    <button onClick={setbgcolor}>bgcolor</button>
   </div>
    
  )
}


