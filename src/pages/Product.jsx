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


  return (
      <div className="min-h-screen bg-(--c5) ">
     {/* {data.map(function(elem, idx){
      return <h1>hello {idx}</h1>
    })} */}
    <ProductCard/>
  </div>
  )
}

export default Product