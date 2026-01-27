import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className="min-h-screen bg-(--c5) flex items-center relative justify-center">
    <div className='h-auto shadow-xl/50 w-80 md:w-1/2 rounded-xl bg-(--c6) text-(--c5) absolute '>
    <form className='flex flex-col gap-6 p-8 items-center'>
     <h1 className='text-center text-4xl mt-5 font-bold underline'>SignUp</h1>
     <input className='border-b-2 p-4 text-l outline-none md:w-1/2' type="text" placeholder='Full Name' />
     <input className='border-b-2 p-4 text-l outline-none md:w-1/2' type="tel" placeholder='Phone' />
     <input className='border-b-2 p-4 text-l outline-none md:w-1/2' type="text" placeholder='Email...' />
     <input className=' border-b-2  p-4 text-l outline-none md:w-1/2' type="text" placeholder='Password...' />
     <button className='bg-yellow-400 text-black p-4 w-1/2 rounded-xl text-xl font-semibold active:scale-95'>SignUp</button>
     <h3>Already have an account?<Link className='underline font-semibold' to='/login'> Login</Link></h3>
    </form>
    </div>
   </div>
  )
}

export default SignUp