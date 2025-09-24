
import { useState } from 'react'
import './App.css'

function App() {

  const [bgColor , setbgColor] = useState("black")


  return (

  <div style= {{backgroundColor:bgColor}} className="w-full h-screen">
     
     <div className="colors w-full fixed bottom-0 text-black flex gap-5 justify-center items-center bg-amber-400 h-20">

        <span onClick={()=>setbgColor("red")} className='rounded-xl bg-red-800 p-3'>Red</span>
        <span onClick={()=>setbgColor("green")} className='rounded-xl bg-green-800 p-3'>Green</span>
        <span onClick={()=>setbgColor("gray")} className='rounded-xl bg-gray-800 p-3'>Gray</span>
        <span onClick={()=>setbgColor("orange")} className='rounded-xl bg-orange-800 p-3'>Orange</span>

     </div>
  </div>
  )
}

export default App
