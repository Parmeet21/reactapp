import './App.css';
import Header from './mycom/Header'
import Footer from './mycom/Footer'
import Sider from './mycom/Sider'
import Content from './mycom/Content'
import Form from './mycom/Form'
import Tittle from './mycom/Tittle'
import Exp_nav from './mycom/Exp_nav'
import { useState } from 'react';
import Capitalize from './mycom/Capitalize';
import Alert from './mycom/Alert';
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Newcopm from './mycom/Newcopm';
import AnotherComp from './mycom/AnotherComp';



function App() { 
  
  const [alert, setalert]=useState("null")

 const showalert=(message,type)=>{
  setalert({
    msg: message, 
    tp: type,
    

  })
  setTimeout(()=>{
    showalert();
  },5000
  )
}
 const [mode,setmode] = useState('dark')

 const removecolor=()=>{
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-info')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark') 
 
 }
 const toggle=(cls)=>{
removecolor()
document.body.classList.add('bg-'+cls)
  if(mode==='dark'){
    setmode('light');
    showalert("dark theme change su","success");
    document.title="darktheme"
    
  }
  else{
    setmode('dark');
    showalert("light theme change su","danger");
    
    document.title="lighttheme"
   
  }
 }
 const[text,setmode1] =useState('white')
 const clicker=()=>{
    if(text==='white'){
      setmode1('dark')
    }
    else{
      setmode1('white')
    }
 }

  
  return (
  <Router>
    <div className='container-fluid'>
      <Header navbarmode={mode} settoggle={toggle} />
      <Newcopm/>
      <AnotherComp/>
      <Alert alert={alert} />
            

      <Routes>
          <Route path="/" element={<Form title='Type Something' alert={showalert} value="start typing.."/>}>
            
          </Route>
          <Route  path="/features" element={<Tittle name="react js "  />}>
         
          </Route>
   <Route path="/example" element={ <Exp_nav navcolor={text} textcolor={text} bgcolor={text} changer={clicker}/>}>
           
          </Route>
          
          <Route path="/faq" element={ <Footer />}>
           
            
          </Route>
        </Routes>
        
        </div>         
        <Capitalize  />
        
        

    </Router>
      
      
       
       
         
    
  );
}


export default App;
