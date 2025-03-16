import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import  axios  from 'axios';
import LoginLeft from './LoginLeft';



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
  await axios.post("https://ticket-app-zjr9.vercel.app/user/login", userInfo)
   .then((res)=>{
    console.log(res.data)
    if(res.data){
      
     window.location.href='/home';
    }
   }).catch((err)=>{
    console.log( err +'Please enter correct Username or password!');
   })
  }

  return (
    <div className=" bg-[#2b3441] sm:bg-[#47566a] h-screen sm:p-16 p-7 sm:px-28">
      
      
      <div className="sm:flex sm:bg-white h-full content-center sm:justify-center rounded-md">
         <div className="w-[50%] bg-[#2b3441] rounded-br-[25%] rounded-tr-[25%] rounded-tl-md rounded-bl-md hidden sm:block ">
          <LoginLeft/>
        </div>
        <div className=" text-[#2b3441] sm:w-[50%] sm:p-10 xl:px-20 bg-white rounded-md">
          <div
            className=" w-full p-6 rounded-md  "
          >
            <h1 className="text-3xl font-bold mb-10 mt-10 text-center lg:mt-10 lg:text-5xl">
              Login
            </h1>
            <form
              action=""
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                  className="outline-none border-2 border-gray-300 w-full rounded-md py-1 px-3 mb-4 bg-gray-200"
                />
                {errors.email && (
                  <span className="text-sm text-red-500 ">
                    This field is required{" "}
                  </span>
                )}
              </div>

              <div className=" mb-8">
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                  className="outline-none border-2 border-gray-300 w-full rounded-md py-1 px-2 bg-gray-200"
                />
                {errors.password && (
                  <span className="text-sm text-red-500 ">
                    This field is required{" "}
                  </span>
                )}
              </div>

              <button className="bg-[#2b3441] text-white p-1 text-2xl font-bold rounded-md 
            hover:bg-white hover:text-[#2b3441] hover:border-2 hover:border-[#2b3441] ">Login</button>
            <p className='text-end mt-2 sm:hidden'>Not registered ? <Link to="/signup" className='font-bold'>Signup</Link></p>
            </form>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Login



