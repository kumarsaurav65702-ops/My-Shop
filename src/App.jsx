import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Product from './pages/Product'
import ShoppingCart from './pages/Cart'
import Footbar from './components/Footbar'
import WishList from './pages/WishList'
import SignUp from './pages/SignUp'
import ProductDetailPage from './pages/ProductDetailPage'
import AddProductForm from './pages/VendorsPage/AddProductForm'
import Cart from './pages/Cart'


const App = () => {
  return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/wishlist' element={<WishList/>}/>
    <Route path='/singup' element={<SignUp/>}/>
    <Route path='/product/:id' element={<ProductDetailPage/>}/>
    <Route path='/vendorform' element={<AddProductForm/>}/>

   </Routes>
   <Footbar/>
    </>
  )
}

export default App
