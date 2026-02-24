import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signupFormSubmit = (e) => {
      e.preventDefault()
      console.log('Name is',name);
      console.log('Mobile number is',phone);
      console.log('Email is',email);
      console.log('Password is',password);

      setName('')
      setPhone('')
      setEmail('')
      setPassword('')
      
  }
  


  return (
    <div className="min-h-screen bg-(--c5) flex items-center relative justify-center">
    <div className='h-auto shadow-xl/50 w-80 md:w-1/2 rounded-xl bg-(--c6) text-(--c5) absolute '>
    <form onSubmit={signupFormSubmit} className='flex flex-col gap-6 p-8 items-center'>
     <h1 className='text-center text-4xl mt-5 font-bold underline'>SignUp</h1>
     <input value={name} onChange={(e)=> {setName(e.target.value)}} className='border-b-2 p-4 text-l outline-none md:w-1/2' type="text" placeholder='Full Name' />
     <input value={phone} onChange={(e)=> {setPhone(e.target.value)}} className='border-b-2 p-4 text-l outline-none md:w-1/2' type="tel" placeholder='Phone' />
     <input value={email} onChange={(e)=> {setEmail(e.target.value)}} className='border-b-2 p-4 text-l outline-none md:w-1/2' type="text" placeholder='Email...' />
     <input value={password} onChange={(e)=> {setPassword(e.target.value)}} className=' border-b-2  p-4 text-l outline-none md:w-1/2' type="text" placeholder='Password...' />
     <button type='submit' className='bg-yellow-400 text-black p-4 w-1/2 rounded-xl text-xl font-semibold active:scale-95'>SignUp</button>
     <h3>Already have an account?<Link className='underline font-semibold' to='/login'> Login</Link></h3>
    </form>
    </div>
   </div>
  )
}

export default SignUp