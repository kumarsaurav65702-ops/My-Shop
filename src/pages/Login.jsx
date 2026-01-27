import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="min-h-screen bg-(--c5) flex items-center relative justify-center">
 <div className='h-auto shadow-xl/50 w-80 md:w-1/2 rounded-xl bg-(--c6) text-(--c5) absolute '>
 <form className='flex flex-col gap-6 p-8 items-center'>
  <h1 className='text-center text-4xl mt-5 font-bold underline'>Login</h1>
  <input className='border-b-2 outline-none p-4 text-l md:w-1/2' type="text" placeholder='Email...' />
  <input className=' border-b-2 outline-none  p-4 text-l md:w-1/2' type="text" placeholder='Password...' />
  <button className='bg-yellow-400 text-black text-xl font-semibold p-4 w-1/2 rounded-xl active:scale-95'>Login</button>
  <h3>Don't have an account?<Link className='underline font-semibold' to='/singup'>  Sing Up</Link></h3>
 </form>
 </div>
</div>
  )
}

export default Login