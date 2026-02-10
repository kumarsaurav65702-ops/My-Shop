import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-(--c5) flex items-center relative justify-center">
    <div className='h-auto shadow-xl/50 w-80 md:w-1/2 rounded-xl bg-(--c6) text-(--c5) absolute '>
    <form className='flex flex-col gap-6 p-8 items-center'>
     <h1 className='text-center text-4xl mt-5 font-bold underline'>Contact Form</h1>
     <input className='border-b-2 p-4 text-l outline-none md:w-1/2' type="text" placeholder='Your Full Name' />
     <input className='border-b-2 p-4 text-l outline-none md:w-1/2' type="email" placeholder='Email' />
     <input className='border-b-2 p-4 text-l outline-none md:w-1/2' type="text" placeholder='Subject' />
     <input className=' border-b-2 p-4 text-l outline-none md:w-1/2' type="text area" placeholder='Message' />
     <button className='bg-yellow-400  text-black p-3 w-auto rounded-xl text-xl font-semibold active:scale-95'>Submit Form</button>
     
    </form>
    </div>
   </div>
  )
}

export default Contact