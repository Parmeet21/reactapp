import React,{ useState } from 'react'
import PropTypes from 'prop-types';


export default function Form(props) {

const [text, settext]= useState('');

    function uppercase(){
        var newtext=text.toUpperCase();
        settext(newtext)
        props.alert("text converted to uppercases","success")
    }
    function lowercase(){
        var newtext=text.toLowerCase();
        settext(newtext)
        props.alert("text converted to lowercases","success")

    }

    function empty(){
      let te=""
      settext(te)
      
      
      
    }

    function change(e){
      settext(e.target.value)
    }

const [clr, stclr] = useState({
  color: 'white',
  backgroundColor: 'black'
})

const [btntx, stbtntext]= useState('choose red green theme');

const mystyle = () => {
  if(clr.color === 'white'){
    stclr({
      color: 'black',
  backgroundColor: 'grey'
    })
    stbtntext("choose white black theme")

    
  }
  else{
    stclr({
      color: 'white',
  backgroundColor: 'black'
    })
    stbtntext("default theme")
  }

}
let copybtn=()=>{
let copytext=document.getElementById('copytxt')
navigator.clipboard.writeText(copytext.value)
console.log(copytext.value )
console.log(text )
props.alert("text copied","success")
}
  return ( 
    <div className='container'>
      <div className='container-fluid p-4' style={clr}>
        <h1 >{props.title}</h1>
        <textarea id='copytxt'  type="email" className="form-control mb-3  copytext"  placeholder={props.value} rows="6" value={text} onChange={change}/>
        <button  type="button" className="btn btn-light m-1" onClick={mystyle}>{btntx}</button>
        <button disabled={text.length===0} type="submit" className="btn btn-light m-1" onClick={uppercase}>convert to uppercase</button>   
        <button disabled={text.length===0} type="submit" className="btn btn-light m-1" onClick={lowercase}>convert to lowercase</button>   
        <button disabled={text.length===0} type="submit" className="btn btn-light m-1" onClick={empty}>empty</button>   
        <button disabled={text.length===0}  onClick={copybtn} className="btn btn-light m-1">copy</button>
      </div>
      
    <h1>text stats</h1>
    <p> {text.split(/\s+/).filter((e)=>e.length!==0).length} Words {text.length} Char</p> 
    <p> {text.split(" ").filter((e)=>e.length!==0).length} Words {text.length} Char</p> 
    <p>
      {text.split(" ").length!==0}
    </p>
    <h1>Text Preview</h1>
    <p>{`${text.length===0?"Nothing to appear":text}`}</p>
  
 </div>
//   function copybtnfunc(){
//     let coptext=document.getElementById("copytext")

//  navigator.clipboard.writeText(coptext.value);
 
//   }
  )
}


Form.propTypes = {
    title: PropTypes.string.isRequired,
    // value: PropTypes.string,
}