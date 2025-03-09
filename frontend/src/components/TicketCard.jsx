import React from 'react'
import Delete from './Delete'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import StatusDisplay from './StatusDisplay'

const TicketCard = () => {
  return (
    <div className='flex flex-col bg-[#47566a] hover:bg-[#4f5e74] rounded-md shadow-lg p-3 m-2 '>
      <div className='flex mb-3'>
      <PriorityDisplay/>
      <div className='ml-auto'>
      <Delete/>
      </div>
      </div>
     <h4 className='font-bold text-xl'>Ticket Title</h4>
     <hr className='h-px border-0 bg-[#2b3441] mb-2'/>
     <p className='whitespace-pre-wrap text-sm'> This is the ticket description! please do this ticket</p>
     <div className='flex-grow'></div>
     <div className='flex mt-2'>
        <div className='flex flex-col '>
            <p>05/03/25  05:50</p>
        <ProgressDisplay/>
        </div>
      <div className='ml-auto flex items-end'>
      <StatusDisplay/>
      </div>
      
      </div>
    </div>
  )
}

export default TicketCard
