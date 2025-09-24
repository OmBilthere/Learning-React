import { useCallback, useState , useEffect , useRef} from 'react'
import './App.css'

function App() {

  const [length, setlength] = useState(8)
  const [numberAllowed , setnumberAllowed] = useState(false)
  const [charAllowed , setcharAllowed ] = useState(false)
  const [password , setpassword] = useState("")

  // hum password ko copy krna h copy button pe click krke to uske liye input ko copy button se link krna hoga isiliye useRef kaam aata h
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXTYZabcdefghijklmnopqrstuvwxyz"
     if(numberAllowed) str +="0123456789";
     if(charAllowed)  str+= "!~@#$%&*" ;
     for (let l = 1; l <= length; l++) {

      let ind = Math.floor(Math.random()*str.length+1)

      pass += str.charAt(ind)
      
     }

     setpassword(pass)

  }, [length , numberAllowed , charAllowed , setpassword])
  

  useEffect(()=>{

    passwordGenerator()

  } , [length , numberAllowed , charAllowed , passwordGenerator ])
  

  const copyPasswordOnClipboard = () =>{

        passwordRef.current?.select() // user ko selected part dikhane ke liye
        window.navigator.clipboard.writeText(passwordRef.current.value)
    //     window.navigator.clipboard.writeText(password) -- ye bhi chlega lekin useRef smjhne ke liye sahi h upar wala

  }
  return (
    <>
   <div className="w-100 p-5 flex flex-col justify-center items-center gap-5 mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-white">

    <h1 className='w-full text-center p-5 bg-gray-800'>Password Generator</h1>

    <input ref={passwordRef} type="text" placeholder='Password' value={password} readOnly className='outline-none w-full py-1 px-3 text-white bg-gray-700'  />

     <button onClick={copyPasswordOnClipboard} className='bg-gray-700 p-3 w-full'>Copy Password</button>

      <div className="range bg-gray-800 p-3 flex w-full justify-center items-center gap-5">

        <input type="range" min={8} max = {100} value= {length}  className='cursor-pointer' onChange={(e)=>setlength(e.target.value)}/>

        <label  className='bg-gray-700 p-3 w-full'> length : {length}</label>
        
      </div>

      <div className="input flex gap-5 bg-gray-700 p-3 w-full">

        <input type="checkbox" defaultChecked = {numberAllowed} id='numberInput' onChange={()=>{setnumberAllowed((prev)=> !prev)}} />

        <label htmlFor="numberInput">Number</label>

        <input type="checkbox" defaultChecked = {charAllowed}

        id='charInput' onChange={()=>{setcharAllowed((prev)=> !prev)}} />
        
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>    
    </>
  )
}

export default App
