import React from 'react'
import heroimg from "../assets/hero.png"
import heroimg2 from "../assets/hero2.png"
import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>    <div
  className="h-screen bg-cover bg-no-repeat bg-position-[center_right_-11rem] overflow-hidden sm:bg-position-[center_right_-8rem] md:bg-position-[center_right_0rem] lg:bg-position-[center_right_0rem] xl:bg-position-[center_right_0rem] 2xl:bg-position-[center_right_0rem] relative z-0 flex  "
  style={{ backgroundImage: `url(${heroimg})` }}
>
 <div className='text-white  bg-transparent z-10 h-20 rounded-2xl mt-20 flex    items-center justify-around w-62 font-bold flex-col absolute sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden'><h1 className='font-bold text-4xl text-yellow-400'>ShopSmart</h1>
 <Link to='/product' className='bg-red-900 px-7 text-l py-2 flex gap-3 rounded-2xl active:scale-95 m-4'>Products<ShoppingBag size={22} /></Link></div>

{/* for sm */}
 <div className='text-white  bg-transparent z-10 h-20 rounded-2xl mt-30 ml-20     items-center justify-around w-62 font-bold flex-col absolute hidden sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden'><h1 className='font-bold text-5xl text-yellow-400'>ShopSmart</h1>
 <Link to='/product' className='bg-red-900 px-9 text-xl py-4 flex gap-3 rounded-2xl active:scale-95 m-4'>Products<ShoppingBag size={29} /></Link></div>
{/* for sm */}

{/* for md */}
 <div className='text-white  bg-transparent z-10 h-20 rounded-2xl mt-30 ml-20     items-center justify-around w-62 font-bold flex-col absolute hidden sm:hidden md:flex lg:hidden xl:hidden 2xl:hidden'><h1 className='font-bold text-5xl text-yellow-400'>ShopSmart</h1>
 <Link to='/product' className='bg-red-900 px-9 text-xl py-4 flex gap-3 rounded-2xl active:scale-95 m-4'>Products<ShoppingBag size={29} /></Link></div>
{/* for md */}

{/* for lg */}
 <div className='text-white  bg-transparent z-10 h-20 rounded-2xl mt-30 ml-28 items-center justify-around w-62 font-bold flex-col absolute hidden sm:hidden md:hidden lg:flex xl:hidden 2xl:hidden'><h1 className='font-bold text-5xl text-yellow-400'>ShopSmart</h1>
 <Link to='/product' className='bg-red-900 px-9 text-xl py-4 flex gap-3 rounded-2xl active:scale-95 m-4'>Products<ShoppingBag size={29} /></Link></div>
{/* for lg */}

{/* for xl */}
 <div className='text-white  bg-transparent z-10 h-20 rounded-2xl mt-36 ml-72     items-center justify-around w-62 font-bold flex-col absolute hidden sm:hidden md:hidden lg:hidden xl:flex 2xl:hidden'><h1 className='font-bold text-5xl text-yellow-400'>ShopSmart</h1>
 <Link to='/product' className='bg-red-900 px-9 text-xl py-4 flex gap-3 rounded-2xl active:scale-95 m-4'>Products<ShoppingBag size={29} /></Link></div>
{/* for xl */}

{/* for 2xl */}
 <div className='text-white  bg-transparent z-10 h-20 rounded-2xl mt-36 ml-96     items-center justify-around w-62 font-bold flex-col absolute hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:flex'><h1 className='font-bold text-5xl text-yellow-400'>ShopSmart</h1>
 <Link to='/product' className='bg-red-900 px-9 text-xl py-4 flex gap-3 rounded-2xl active:scale-95 m-4'>Products<ShoppingBag size={29} /></Link></div>
{/* for 2xl */}


</div>
 

</>
 







  )
}

export default Home