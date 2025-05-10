import React, { useEffect, useState } from 'react'
import TicketCard from './TicketCard'
import Navbar from './Navbar';
import axiosInstance from '../../axios';

const Home = () => {

  const [tickets, setTicket]=useState([]);
  const [errror, setError]=useState(null);

useEffect(()=>{
  const getTicket = async ()=>{
    try{
     const res  = await axiosInstance.get("/ticket");
     console.log(res.data);
     if (Array.isArray(res.data)){
      setTicket(res.data)
     }else{
      setError("data is not error",errror)
     }
     
    }catch(error){
console.log(error)
setError(error.message)
    }
  }
  getTicket();
},[errror])


  return (
    <>
    <Navbar/>
    <div className='p-5 '>
      
      <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
        {tickets.map((ticket)=>(
          <div key={ticket._id} >
        <h3 className='font-bold text-xl '>{ticket.category}</h3>
       <TicketCard ticket={ticket} />

        </div>
        ))}
      
      </div>
    </div>
    </>
  )
}

export default Home
