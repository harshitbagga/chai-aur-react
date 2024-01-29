import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  //let counter  = 15

  const addValue = ()=>{
    //counter  = counter + 1;
    if(counter == 20 || counter > 20){
      //counter = 20
      setCounter(20)
    } 
    else{
      setCounter(counter + 1)
     // For Interview 
     //if we want to add setCounter(counter + 1) multiple times
     //we can write setCounter((prevCounter => prevCounter + 1 )) 
     //here prevCounter is a callback function and multiple setCounter is considered as one batch
     //coz its just variable  
      console.log("Value added",counter);
    }
    
    
  }

  const minusvalue = ()=>{
   
   if(counter <= 0){
    counter = 0
    setCounter(counter)
   }
   else{
    setCounter(counter - 1)
    console.log("Value decreased", counter);
   }
    
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addValue}>increase Value {counter}</button>
      <br/>
      <button onClick={minusvalue}>decrease Value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
