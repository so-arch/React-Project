import { useState } from 'react';
import './App.css';
import { LC, NC, SC, UC } from './data/Passchar';

function App() {
  let[uppercase, setUppercase] = useState(false)
  let[lowercase, setLowercase] = useState(false)
  let[numbers, setNumbers] = useState(false)
  let[symbols, setSymbols] = useState(false)
  let[passwordlength, setpasswordlength] = useState(10)
  let[fpass, setfpass] =useState(' ')

  let createPassword=()=>{
    let finalPass = ' '
    let charSet = ' '
    if(uppercase || lowercase || numbers ||symbols){
      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(numbers)   charSet+=NC;
      if(symbols) charSet+=SC;
      for(let i=0; i<passwordlength; i++){
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length))
        setfpass(finalPass)
      }
    }
    else{
      alert("please click one checkbox")
    }
  }
  
  let copyPass=()=>{
    navigator.clipboard.writeText(fpass)
  }
  return (
    <>
    <div className="passwordBox">
      <h3>Password Generator</h3>
      <div className='passwordBoxin'>
        <input type='text' readOnly value={fpass}/> <button onClick={copyPass}>Copy</button>
      </div>
      <div className='passlength'>
        <label>Password Length</label>
        <input type='number' value={passwordlength} onChange={(event)=>setpasswordlength(event.target.value)}/>
      </div>
      <div className='passlength'>
        <label>Include UpperCase</label>
        <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
      </div>
      <div className='passlength'>
        <label>Include LowerCase</label>
        <input type='checkbox' checked={lowercase} onChange={() => setLowercase(!lowercase)}/>
      </div>
      <div className='passlength'>
        <label>Include Numbers</label>
        <input type='checkbox' checked={numbers} onChange={() => setNumbers(!numbers)}/>
      </div>
      <div className='passlength'>
        <label>Include Symbols</label>
        <input type='checkbox' checked={symbols} onChange={() => setSymbols(!symbols)}/>
      </div>
      <button className='btn' onClick={createPassword}>
        Generate Password
      </button>
    </div>
    </>
  );
}

export default App;