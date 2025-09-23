import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

 function MyApp()  {
  const username = Om
  return (
    <div>
      <h1> HELLO {username}!!!!!</h1>
    </div>
  )
 }

createRoot(document.getElementById('root')).render(
    //MyApp() 
    <App/>

)


// Basic Rule in vite app

// 1. function ka name upperCase hi hoga file ka ho ya na ho frk nhi padta h lekin file name captial se start krna ek acchi practice maani jaati h
// 2. ek saath bina wrap kiye 2 element nhi render ho skte h isiliye <></> ye use krte h
// ise fragment bola gya react ke andar
// 3.html return krne wale function ki file ka type jsx hona chahiye aur agar simple js likhi h to type js hi reh skta h 
// 4. upar ke MyApp wale eg jaisa bhi kr skte h aur function jaise call bhi kr skte h lekin react optimization nhi hoga isiliye <name/> ese hi 
// krna sahi rhta h
// 5. React m variable ko {} inke andar pass krte h js m `${}` hota h