import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Product = () => {
  const [data, setData] = useState([])

  //  useEffect(() => {
  //     fetch("https://api.escuelajs.co/api/v1/products")
  //       .then((res) => res.json())
  //       .then((result) => setData(result))
  //       .catch((err) => console.log(err))
  //       console.log(data)
  //   }, [])
  //     

  const getData = async () => {
    const response = await axios.get("https://api.escuelajs.co/api/v1/products")
    setData(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  let printUserData = <h3 className='text-gray-200 text-xs absolute top-1/2 left-1/2 -translate-x-1 -translate-y-1'>Loading...</h3>

  return (
    <>


      <div className="min-h-screen w-full bg-(--c5)">

        <h1 className='text-red-900 font-extrabold text-2xl px-3 py-2 h-auto'>Top Products</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  items-center justify-around'>


          {data.map((elem, idx) => (
            <ProductCard key={idx} elem={elem} />
          ))}
        </div>
      </div>
    </>





  )
}

export default Product