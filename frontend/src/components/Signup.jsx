import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import  axios  from 'axios';


const Signup = () => {

  const {
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();

  const onSubmit =async (data)=>{
    const userInfo ={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
  await axios.post("http://localhost:3000/user/signup", userInfo)
   .then((res)=>{
    console.log(res.data)
    if(res.data){
      alert("signup successfully")
    }
   }).catch((err)=>{
alert("Error:"+err ,"Please enter correct information")
   })
  }


  return (
    <div className='bg-[#2b3441] text-[#f1f3f5]  max-h-screen'>
    <div className='bg-[#47566a] w-[85%] 
    relative top-32 mx-auto p-3  rounded-md sm:w-[60%] md:w-[35%] lg:w-[30%] '>
      <h1 className='text-3xl font-bold mb-10 mt-10 text-center lg:mt-14 lg:text-4xl'>Sign up</h1>
      <form action="" className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
        <input type="text" placeholder='Full Name' {...register("fullname",{required:true})}
        className='outline-none border-2 border-white w-full  rounded-md py-1 px-2 mb-4'/>
        {errors.fullname && (<span className='text-sm text-red-500 '>This field is required </span>)}
       
        </div>
        
       <div className='mb-3'>
       <input type="email" placeholder='Email' {...register("email",{required:true})}
        className='outline-none border-2 border-white w-full rounded-md py-1 px-2 mb-4'/>
        {errors.email && (<span className='text-sm text-red-500 '>This field is required </span>)}
       </div>
       
     
     <div className='mb-14 lg:mb-16'>
     <input type="password" placeholder='Password' {...register("password",{required:true})}
        className='outline-none border-2 border-white w-full rounded-md py-1 px-2 '/>
        {errors.password && (<span className='text-sm text-red-500 '>This field is required </span>)}
      
     </div>
        
        <div className='flex justify-between items-center mb-6 lg:mb-7'>
        <button className=' bg-[#2b3441] text-white px-2 py-1 rounded-md font-bold 
        hover:bg-white hover:text-[#2b3441] lg:text-2xl'>Sign up</button>
        <p className='text-sm'>Already Signed up? <Link to='/login' className='text-lg font-medium'> Login</Link></p>
        </div>
       
    </form>
    </div>
    
  </div>
  )
}

export default Signup
