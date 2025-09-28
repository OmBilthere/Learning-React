import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {

//   const  [data , setdata ] = useState([])

//     useEffect(()=>{
//           fetch('https://api.github.com/users/hiteshchoudhary')
//      .then(response => response.json())
//      .then(res=> setdata(res))
//     } , [])
   
const data = useLoaderData()

  return (
    
    <div className='p-5 flex flex-col justify-center items-center gap-5 '>
    <div className=' w-full text-center bg-gray-700 text-white p-5'>
        Followers: {data.followers}
    </div>
        <img  width={300} src={data.avatar_url} alt="" />
  </div>
  )
}

export default Github



// method 2 
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}