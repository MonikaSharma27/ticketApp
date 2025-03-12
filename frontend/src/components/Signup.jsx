import React from 'react'
import { Link } from 'react-router-dom';


const Signup = () => {
  return (
    <div className='bg-[#2b3441] text-[#f1f3f5]  max-h-screen'>
    <div className='bg-[#47566a] w-[85%] 
    relative top-32 mx-auto p-3  rounded-md sm:w-[60%] md:w-[35%] lg:w-[30%] '>
      <h1 className='text-3xl font-bold mb-10 mt-10 text-center lg:mt-14 lg:text-4xl'>Sign up</h1>
      <form action="" className='flex flex-col'>
        <input type="text" placeholder='Full Name' 
        className='outline-none border-2 border-white w-full  rounded-md py-1 px-2 mb-4'/>
       
        <input type="email" placeholder='Email'
        className='outline-none border-2 border-white w-full rounded-md py-1 px-2 mb-4'/>
     
        <input type="password" placeholder='Password'
        className='outline-none border-2 border-white w-full rounded-md py-1 px-2 mb-14 lg:mb-16'/>
      
        <div className='flex justify-between items-center mb-6 lg:mb-7'>
        <button className=' bg-[#2b3441] text-white px-2 py-1 rounded-md font-bold 
        hover:bg-white hover:text-[#2b3441] lg:text-2xl'>Sign up</button>
        <p className='text-sm'>Already Signed up? <Link to='/login' className='text-lg font-medium'> Login</Link></p>
        </div>
       
    </form>
    </div>
    
  </div>
  )
}

export default Signup
