import React from 'react'
import { Link } from "react-router-dom";

const LoginLeft = () => {
  return (
    <div className='text-white text-center sm:mt-36 lg:mt-52 p-2 '>
    <h1 className='font-bold md:text-5xl mb-2 sm:text-4xl'>Welcome to our Tickets App!</h1>
    <p className='text-sm mb-3 '>Login to access your ticket management dashboard. New user? Sign up now!</p>
    <Link to="/Signup" className=" font-bold border-2 border-white p-1 px-4 rounded-md text-2xl
    hover:bg-white hover:text-[#2b3441]"> Signup</Link>
  </div>
  )
}

export default LoginLeft
