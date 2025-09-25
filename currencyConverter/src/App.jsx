import { useState } from 'react'
import './App.css'

import {InputBox} from './components'
import UseCurrencyInfo from './hooks/useCurrencyinfo'
function App() {
  const [amount, setAmount] = useState(0)
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [convertedAmount , setConvertedAmount] = useState(0)
 
  const currencyInfo = UseCurrencyInfo(from)
  
  const option = Object.keys(currencyInfo)

  const swap = () =>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

    return (
   <>
    <h1 className='bg-gray-800'>OM </h1>
   </>
  )
}

export default App
