import React from 'react'
import { Link } from "react-router-dom";

const SignupRight = () => {
  return (
    <div className='text-white text-center mt-60'>
      <h1 className='font-bold text-5xl mb-2'>Welcome Back!</h1>
      <p className='text-lg mb-3'>Already have an account ?</p>
      <Link to="/" className=" font-bold border-2 border-white p-1 px-4 rounded-md text-2xl 
      hover:bg-white hover:text-[#2b3441]"> Login</Link>
    </div>
  )
}

export default SignupRight
