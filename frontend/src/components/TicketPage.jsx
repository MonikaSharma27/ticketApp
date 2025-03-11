import React from 'react';
import { useParams } from 'react-router-dom'
import TicketForm from './TicketForm';

const TicketPage = () => {
    const {id} = useParams();
  return (
    <div className='text-white'>
      <TicketForm id={id}/>
    </div>
  )
}

export default TicketPage
