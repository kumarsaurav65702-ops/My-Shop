import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { StoreContext } from "../context/StoreContext"

const ProductDetailPage = (props) => {
  const { id } = useParams() 
  const [product, setProduct] = useState(null)
    const {addToCart} = useContext(StoreContext)
  

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      )
      setProduct(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getSingleProduct()
  }, [id])

  if (!product) {
    return (
      <div className="h-screen bg-(--c5) flex items-center justify-center text-2xl">
        Loading...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-(--c6) flex items-center justify-center p-2">
      <div className="bg-transparent min-h-screen min-w-full text-white rounded-xl shadow-xl p-6 max-w-4xl grid xl:grid-cols-2  ">

        {/* Image */}
        <img
          src={product.images}
          className="aspect-square xl:h-150 object-fit overflow-hidden rounded-2xl"
        />

        {/* Details */}
        <div className="flex flex-col  gap-3">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-400">{product.category?.name}</p>
          <h2 className="text-2xl text-green-500 font-bold">
            ₹ {product.price}
          </h2>
          <p>{product.description}</p>

          <button onClick={()=> addToCart(product)} className="bg-red-600 items-center  py-2 max-w-72 rounded-4xl active:scale-95">
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductDetailPage
