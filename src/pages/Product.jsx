import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'

const Product = () => {
  const [data, setData] = useState([])
  const { search } = useContext(StoreContext)

  



async function fetchProduct() {
  try {
    const response = await axios.get(" https://api.escuelajs.co/api/v1/products")

    setData(response.data) 
    console.log(response.data)

  } catch (error) {
    console.log(error)
  }
}



  useEffect(() => {
    // getData()
    fetchProduct();
  }, [])

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>


      <div className="min-h-screen w-full bg-(--c5)">

        <h1 className='text-red-900 font-extrabold text-2xl px-3 py-2 h-auto'>Top Products</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  items-center justify-around'>


          {filteredData.length > 0 ? (
            filteredData.map((elem, idx) => (
             <Link key={idx} to={`/product/${elem.id}`}><ProductCard elem={elem} /></Link>
            ))
          ) : (
            <p className="text-black text-2xl absolute top-1/2 left-1/2 -translate-x-12 -translate-y-12  sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1 sm:-translate-y-1">Loading...</p>
          )}
        </div>
        
      </div>
    </>





  )
}

export default Product