import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter , setcounter] = useState(0)
 
 const addValue = () => {
   if(counter<20)
   setcounter(counter+1)
 }

 function removeValue() {
  if(counter>0) {
     counter--;
  setcounter(counter)
  }
 
 }
  return (
    <>
      <h1>Learning Hooks</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue} >Add value Now Counter is {counter}</button>
      <br /> 
      <button onClick={removeValue}>Remove value Now Counter is {counter}</button>
    </>
  )
}

export default App

// agar hum direct onclick pe setcounter ko likh denge to wo turant execute ho jyga
// eventlisteners ko reference chahiye hota h jo ki hum kisi wrapper function se de dete h aur wo tab hi execute
// hota h jab hum click krte h
// setcounter new value leta h jo hum update krte h
