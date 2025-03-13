import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import  axios  from 'axios';


const Login = () => {

  const {
    register,
    handleSubmit,
    formState:{errors},
  }=useForm();

  const onSubmit =async (data)=>{
    const userInfo ={
      email:data.email,
      password:data.password
    }
  await axios.post("http://localhost:3000/user/login", userInfo)
   .then((res)=>{
    console.log(res.data)
    if(res.data){
      alert("Login successfully")
    }
   }).catch((err)=>{
alert("Please enter correct information")
   })
  }

  return (
    <div className='bg-[#2b3441] text-[#f1f3f5]  max-h-screen'>
      <div className='bg-[#47566a] w-[85%] 
      relative top-32 mx-auto p-3  rounded-md sm:w-[60%] md:w-[35%] lg:w-[30%] '>
        <h1 className='text-3xl font-bold mb-10 mt-10 text-center lg:mt-14 lg:text-4xl'>Login</h1>
        <form action="" className='flex flex-col 'onSubmit={handleSubmit(onSubmit)}>
          
          <div className='mb-4'>
          <input type="email" placeholder='Email' {...register("email",{required:true})}
          className='outline-none border-2 border-white w-full rounded-md py-1 px-2 '/>
          {errors.email && (<span className='text-sm text-red-500 '>This field is required </span>)}
          </div>
         
       <div className='mb-12'>
       <input type="password" placeholder='Password'{...register("password",{required:true})}
          className='outline-none border-2 border-white w-full rounded-md py-1 px-2 '/>
          {errors.password && (<span className='text-sm text-red-500 '>This field is required </span>)}
       </div>
          

         <button className=' bg-[#2b3441] text-white px-2 py-1 rounded-md font-bold w-[80%] 
          hover:bg-white mb-5 hover:text-[#2b3441] lg:text-2xl mx-auto'>Login</button>
         
      </form>
      </div>
      
    </div>
  )
}

export default Login
