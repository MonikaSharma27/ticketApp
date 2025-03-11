import React from 'react'
import  axios  from './../../../backend/node_modules/axios/dist/esm/axios';


const Delete = ({id}) => {

const deleteTicket = async()=>{
  try{
    const res = await axios.delete(`http://localhost:3000/ticket/${id}`)
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
