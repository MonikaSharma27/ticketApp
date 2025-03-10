import React from 'react'


const PriorityDisplay = ({priority}) => {
  return (
    <div className=' flex text-2xl'>
      <p className={`pr-1 ${priority > 0 ? "text-red-500": "text-slate-400"} `}>*</p>
      <p className={`pr-1 ${priority > 1 ? "text-red-500": "text-slate-400"} `}>*</p>
      <p className={`pr-1 ${priority > 2 ? "text-red-500": "text-slate-400"} `}>*</p>
      <p className={`pr-1 ${priority > 3 ? "text-red-500": "text-slate-400"} `}>*</p>
      <p className={`pr-1 ${priority > 4 ? "text-red-500": "text-slate-400"} `}>*</p>
    </div>
  )
}

export default PriorityDisplay
