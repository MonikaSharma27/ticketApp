import React from 'react';
import { useParams } from 'react-router-dom'
import TicketForm from './TicketForm';
import Navbar from './Navbar';

const TicketPage = () => {
    const {id} = useParams();
  return (
    <>
    <Navbar/>
    <div className='text-white'>
      <TicketForm id={id}/>
    </div>
    </>
  )
}

export default TicketPage
