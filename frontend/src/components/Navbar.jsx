import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-gray-700 p-3  font-bold'>
      <div className='flex items-center gap-4'>
       <Link to='/home'>Home</Link>
       <Link to='/ticketpage/id'>TicketPage</Link>
      </div>
     
      <div className='flex justify-end gap-2 items-center  pr-5'>
            <Link to= '/signup' className='border-2 border-white rounded-md py-1 px-2 font-bold text-xl
            hover:bg-white hover:text-blue-500 duration-300'>
                Sign up</Link>
            <Link to= '/login' className='border-2 border-white rounded-md py-1 px-3 font-bold text-xl
            hover:bg-white hover:text-blue-500 text-center duration-300'>
                Login</Link>
        </div>
      
    </nav>
  )
}

export default Navbar
