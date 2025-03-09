import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-gray-700 p-5  font-bold'>
      <div className='flex items-center gap-4'>
       <Link to='/'>Home</Link>
       <Link to='/ticketpage/id'>TicketPage</Link>
      </div>
      <div>
     <p>moni@gmail.com</p>
      </div>
    </nav>
  )
}

export default Navbar
