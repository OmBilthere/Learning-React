import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {

  return (
  <>
   <h1  className='text-white text-center text-2xl p-5 '>Todo using redux toolkit</h1>
   <AddTodo/>
   <Todos/>
  </>
  )
}

export default App
