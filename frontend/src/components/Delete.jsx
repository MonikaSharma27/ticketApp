import React from 'react'
import axiosInstance from '../../axios';


const Delete = ({id}) => {

const deleteTicket = async()=>{
  try{
    const res = await axiosInstance.delete(` /ticket/${id}`)
    console.log(res.data);
    window.location.reload();
   
    
  }catch(error){
    console.log(error)
  }
  
}

  return (
    <div className='text-red-500 cursor-pointer'>
      <p onClick={deleteTicket}>close</p>
    </div>
  )
}

export default Delete
