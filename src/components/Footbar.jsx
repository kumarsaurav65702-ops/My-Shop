import { CircleUserRound, Heart, ShoppingBag, Store } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CountItemContext } from '../context/CountContext'

const Footbar = () => {

  const [count, setCount] = useContext(CountItemContext)

  return (
    <>
    <div className='flex bg-red-950 text-white items-center w-full p-4 justify-around bottom-0 fixed md:hidden'>
        <Link to='/product'><Store /></Link>
        <Link to='/wishlist'><Heart /></Link>
         <Link to='/cart' className=' md:flex  text-white rounded-full p-2 active:scale-95 hover:bg-gray-700 relative md:m-3 '>
                 {count > 0 && (
    <div className="bg-red-600 rounded-full absolute right-0 top-0 w-5 h-5 text-center leading-tight text-sm">
      {count}
    </div>
  )}
                    <ShoppingBag />
                </Link>
         <Link to='/login'><CircleUserRound /></Link>
    </div>
    </>
  )
}

export default Footbar