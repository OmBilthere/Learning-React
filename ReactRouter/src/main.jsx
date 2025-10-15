import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github , {githubInfoLoader} from './components/Github/Github.jsx'
import Om from './components/Om.jsx'
// First way
// const router = createBrowserRouter([
 
//  {
//    path:'/',
//    element: <Layout /> ,
   
//    children: [
//     {
//       path:"",
//       element: <Home />

//     }, 
//     {
//       path: "about" , 
//       element: <About />

//     } ,

//     {
//       path: "contact" , 
//       element: <Contact />

//     }

//    ]
//  } 
  
// ])

// 2nd way

const myRouter = createBrowserRouter (createRoutesFromElements(
  <Route path='/' element ={<Layout />}>
 
   <Route path= '' element={<Home />} />
   <Route path= 'about' element={<About />} />
   <Route path= 'contact' element={<Contact />} />
   <Route path= 'user/:userid' element={<User />} />
   <Route 
   loader= {githubInfoLoader}
   path= 'github' element={<Github />} />
   <Route path='contact/om' element = {<Om/>} />
  {/* upar wala user component ka jo userid hum show krwana chahte h wo 
  user file m bhi same name se honga chahiye ye hum variable input type ka router banane ke liye seekh rhe h */}


  </Route>

))



createRoot(document.getElementById('root')).render(
  <StrictMode>

   <RouterProvider router={myRouter} />

  </StrictMode>,
)
