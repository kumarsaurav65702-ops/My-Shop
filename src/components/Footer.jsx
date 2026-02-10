import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='bg-red-950 h-64 text-white px-4 py-8 mb-18 md:mb-0'>
        <div className=' text-center border-b-2'>
          <h1 className='font-bold text-3xl'>MyShop</h1>
          <h3>Shop Smart. Live Better</h3>
        </div>
        <div className='bg-(--c6) flex justify-around p-6'>
          <div className='w-auto'>
            <h4 className='font-semibold underline duration-300 ease-out hover:text-red-500'>Home</h4>
            <Link to='/product'><h4 className='font-semibold underline duration-300 ease-in-out hover:text-red-500'>Store</h4></Link>
            <h4 className='font-semibold underline duration-300 ease-in-out hover:text-red-500'>About</h4>
            <h4 className='font-semibold underline duration-300 ease-in-out hover:text-red-500'>Orders</h4>
          </div>
          <div className=' p-1 flex flex-col gap-4'>
            <Link to='/contact'><h4 className='bg-red-800 rounded px-2 text-center font-medium'>Contact</h4></Link>
            <Link to='/vendorform'><h4 className='bg-white text-red-600 px-2 rounded font-medium'>Vendor</h4></Link>
          </div>
        </div>

      </div>

    </>
  )
}

export default Footer