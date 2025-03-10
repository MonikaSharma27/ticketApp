import React from 'react'
import Delete from './Delete'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'




const TicketCard = ({ticket}) => {


const formatTimestamp = (timestamp)=>{
  const options = {
    year:"numeric",
    month: "2-digit",
    day:"2-digit",
    hour:"2-digit",
    minute:"2-digit",
    hour12:true,
  };
  const date = new Date(timestamp)
  const formattedDate = date.toLocaleString("en-US", options);

  return formattedDate;
}



  return (
    <div className='flex flex-col bg-[#47566a] hover:bg-[#4f5e74] rounded-md shadow-lg p-3 m-2 '>
      <div className='flex mb-3'>
      <PriorityDisplay priority={ticket.priority} />
      <div className='ml-auto'>
      <Delete/>
      </div>
      </div>
     <h4 className='font-bold text-xl'>{ticket.title}</h4>
     <hr className='h-px border-0 bg-[#2b3441] mb-2'/>
     <p className='whitespace-pre-wrap text-sm'> {ticket.description}</p>
     <div className='flex-grow'></div>
     <div className='flex mt-2'>
        <div className='flex flex-col '>
            <p>{formatTimestamp(ticket.createdAt)}</p>
        <ProgressDisplay progress= {ticket.progress}/>
        </div>
      <div className='ml-auto flex items-end'>
      <StatusDisplay status = {ticket.status}/>
      </div>
      
      </div>
    </div>
  )
}

export default TicketCard
