import React, { useEffect, useState } from 'react'
import TicketCard from './TicketCard'
import  axios  from './../../../backend/node_modules/axios/dist/esm/axios';

const Home = () => {

  const [tickets, setTicket]=useState([]);

useEffect(()=>{
  const getTicket = async ()=>{
    try{
     const res  = await axios.get("http://localhost:3000/");
     console.log(res.data);
     setTicket(res.data)
    }catch(error){
console.log(error)
    }
  }
  getTicket();
},[])


  return (
    <div className='p-5'>
      
      <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
        {tickets.map((ticket)=>(
          <div key={ticket.id} >
        <h3 className='font-bold text-xl '>{ticket.category}</h3>
       <TicketCard ticket={ticket} />

        </div>
        ))}
      
      </div>
    </div>
  )
}

export default Home
