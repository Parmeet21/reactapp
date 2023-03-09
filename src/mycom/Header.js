import React from 'react'
import {Link} from "react-router-dom";


export default function Header(props) {
  return (
    
    <div className="container-fluid border-bottom">
 
  <nav className={`navbar navbar-expand-md navbar-${props.navbarmode} bg-${props.navbarmode}`}>
      <ul className="navbar-nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><Link to="/features" className="nav-link">Features</Link></li>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/example" className="nav-link">Example</Link></li>
        <li><Link to="/faq" className="nav-link">FAQs</Link></li>
        <li><Link to="/" className="nav-link">About</Link></li>
      </ul>
      
      <div className='d-flex'>
  <div className='bg-danger rounded mx-1' onClick={()=>{props.settoggle('danger')}} style={{width:'20px',height:'20px',cursor:'pointer'}}></div>
  <div className='bg-primary rounded mx-1' onClick={()=>{props.settoggle('primary')}} style={{width:'20px',height:'20px',cursor:'pointer'}}></div>
  <div className='bg-info rounded mx-1' onClick={()=>{props.settoggle('info')}} style={{width:'20px',height:'20px',cursor:'pointer'}}></div>
  <div className='bg-success rounded mx-1' onClick={()=>{props.settoggle('success')}} style={{width:'20px',height:'20px',cursor:'pointer'}}></div>
  <div className='bg-light rounded mx-1' onClick={()=>{props.settoggle('light')}} style={{width:'20px',height:'20px',cursor:'pointer'}}></div>
  <div className='bg-dark border rounded mx-1' onClick={()=>{props.settoggle('dark')}} style={{width:'20px',height:'20px',cursor:'pointer'}}></div>
</div>

<div className={`form-check form-switch ${props.navbarmode==='dark'?'text-white':'text-dark'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="flex" onChange={props.settoggle}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.navbarmode==='dark'?'switch lightmode':'dark mode'}`} </label>
</div>
</nav>
  </div>
  

  )
}
