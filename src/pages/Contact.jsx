import React, { useState } from 'react'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmitContact = (e) => {
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(subject)
    console.log(msg)

  }



  return (
    <div className="min-h-screen bg-(--c5) flex items-center relative justify-center">
      <div className='h-auto shadow-xl/50 w-80 md:w-1/2 rounded-xl bg-(--c6) text-(--c5) absolute '>
        <form onSubmit={handleSubmitContact} className='flex flex-col gap-6 p-8 items-center'>
          <h1 className='text-center text-4xl mt-5 font-bold underline'>Contact Form</h1>
          <input
          onChange={(e) => {setName(e.target.value)}}
            value={name}
            className='border-b-2 p-4 text-l outline-none md:w-1/2'
            type="text"
            placeholder='Your Full Name' />
          <input
          onChange={(e) => {setEmail(e.target.value)}}
            value={email}
            className='border-b-2 p-4 text-l outline-none md:w-1/2' type="email"
            placeholder='Email' />
          <input
          onChange={(e) => {setSubject(e.target.value)}}
            value={subject}
            className='border-b-2 p-4 text-l outline-none md:w-1/2'
            type="text"
            placeholder='Subject' />
          <input
          onChange={(e) => {setMsg(e.target.value)}}
            value={msg}
            className=' border-b-2 p-4 text-l outline-none md:w-1/2'
            type="text area"
            placeholder='Message' />
          <button type='submit' className='bg-yellow-400  text-black p-3 w-auto rounded-xl text-xl font-semibold active:scale-95'>Submit Form</button>

        </form>
      </div>
    </div>
  )
}

export default Contact