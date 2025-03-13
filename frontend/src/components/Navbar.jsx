import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-gray-700 p-3  font-bold text-2xl'>
      <div className='flex items-center gap-4'>
       <Link to='/home'>Home</Link>
       <Link to='/ticketpage/id'>TicketPage</Link>
      </div>
     
      <div className='flex justify-end gap-2 items-center  pr-5 '>
            <p>moni@gmail.com</p>
        </div>
      
    </nav>
  )
}

export default Navbar
