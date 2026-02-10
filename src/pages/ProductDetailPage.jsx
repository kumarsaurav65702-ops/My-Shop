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
    <div className="min-h-screen bg-(--c5) flex items-center justify-center p-2">
      <div className="bg-black min-h-screen text-white rounded-xl shadow-xl p-6 max-w-4xl grid md:grid-cols-2 gap-6 ">

        {/* Image */}
        <img
          src={product.images}
          className="w-full h-80 object-fit rounded-2xl"
        />

        {/* Details */}
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-400">{product.category?.name}</p>
          <h2 className="text-2xl text-green-500 font-bold">
            ₹ {product.price}
          </h2>
          <p>{product.description}</p>

          <button onClick={()=> addToCart(product)} className="bg-red-600 py-2 rounded-4xl active:scale-95">
            Add To Cart
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductDetailPage
