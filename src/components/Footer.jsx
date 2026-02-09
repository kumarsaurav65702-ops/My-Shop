import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='bg-red-950 h-64 text-white px-4 py-8 mb-18 md:mb-0'>
        <div className=' text-center border-b-2'>
          <h1 className='font-bold text-3xl'>MyShop</h1>
          <h3>Shop Smart. Live Better</h3>
        </div>
        <div className='bg-blue-800 p-6'>
          <div>
            <h4 className='font-semibold underline duration-300 ease-out hover:text-red-500'>Home</h4>
            <h4 className='font-semibold underline duration-300 ease-in-out hover:text-red-500'>About</h4>
            <h4 className='font-semibold underline duration-300 ease-in-out hover:text-red-500'>Vendor</h4>
            <h4 className='font-semibold underline duration-300 ease-in-out hover:text-red-500'>Contact</h4>
          </div>
        </div>

      </div>

    </>
  )
}

export default Footer