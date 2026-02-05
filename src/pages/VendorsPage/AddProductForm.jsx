import axios from 'axios'
import React, { useState } from 'react'


const AddProductForm = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [image, setImage] = useState('')
  const [responseMessage, setResponseMessage] = useState('');

  let handleSubmit = async (e) => {
    e.preventDefault()

    const post = {
      title,
      price: Number(price),
      description,
      categoryId: Number(categoryId),
      images: [image]
    }

    try {
      const response = await axios.post(
        'https://api.escuelajs.co/api/v1/products',
        post
      )

      setResponseMessage('Post created successfully!')
      console.log(response.data)

      setTitle('')
      setPrice('')
      setDescription('')
      setCategoryId('')
      setImage('')

    } catch (error) {
      setResponseMessage('Error creating post')
      console.error(error)
    }
  }




  return (
    <div className="min-h-screen bg-(--c5) flex items-center relative justify-center">

      <div className='h-auto shadow-xl/50 w-80 md:w-1/2 rounded-xl bg-(--c6) text-(--c5) absolute '>

        <form className='flex flex-col gap-6 p-8 items-center'
          onSubmit={handleSubmit}>
          <h1 className='text-center text-4xl mt-5 font-bold underline'>Add Product</h1>
          <input
            className='border-b-2 p-4 text-l outline-none md:w-1/2'
            type="text"
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)} />


          <input
            className='border-b-2 p-4 text-l outline-none md:w-1/2'
            type="tel"
            placeholder='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)} />


          <input

            className='border-b-2 p-4 text-l outline-none md:w-1/2'
            type="text"
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)} />


          <input
            className=' border-b-2  p-4 text-l outline-none md:w-1/2'
            type="text"
            placeholder='CategoryId'
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)} />


          <input
            className=' border-b-2  p-4 text-l outline-none md:w-1/2'
            type="text"
            placeholder='Image URL'
            value={image}
            onChange={(e) => setImage(e.target.value)} />


          <button type='submit' className='bg-yellow-400 text-black p-4 w-1/2 rounded-xl text-xl font-semibold active:scale-95'>Add Product</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  )
}

export default AddProductForm