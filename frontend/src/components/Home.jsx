import React from 'react'
import TicketCard from './TicketCard'


const Home = () => {
  return (
    <div className='p-5'>
        <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
        <TicketCard/>
      <TicketCard/>
      <TicketCard/>
      
        </div>
      
    </div>
  )
}

export default Home
