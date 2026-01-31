import React from 'react'

const ProductCard = (props) => {
  return (
    <>

      <div className='py-6 flex items-center justify-around'>
        <div className='flex flex-col gap-1 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-2xl bg-black h-78 w-46 md:w-52 lg:w-60 lg:h-96 xl:w-72 xl:h-96 text-white items-center justify-center rounded-xl shadow-xl/50 '>

          <div className='bg-red-600 rounded aspect-square w-38 h-38 lg:h-50 lg:w-50 flex items-center justify-center overflow-hidden object-cover mt-2'>
            <img src={props.elem.images[0]} alt="" className='aspect-square' />
          </div>

          <div className='flex flex-col text-center'>
            <h2>{props.elem.category.name}</h2>
            <h2 className='line-clamp-1 ml-3'>{props.elem.title}</h2>
            <h1>₹{props.elem.price}</h1>
          </div>

          <button className='bg-red-600 w-40 rounded active:scale-95 lg:mt-10'>Add to Cart</button>


        </div>

      </div>

    </>
  )
}

export default ProductCard