import { Search, List, CircleUserRound, ShoppingBag } from 'lucide-react'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CountItemContext } from '../context/CountContext'

const Navbar = (props) => {

    const CartCount = 0
    const [count, setCount] = useContext(CountItemContext)

    const [menu, setMenu] = useState(false)


    let showmenu = () => {
        setMenu(!menu)
    }



    return (
        <>
            <nav className='bg-(--c5) h-16 p-3 border-b-3  flex items-center justify-evenly w-full'>
                <Link to="/" className='font-bold text-3xl'>MyShop</Link>
                <div className='hidden md:flex gap-8 m-5 font-semibold text-lg  '>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className='bg-black text-white flex items-center w-44 sm:w-96 rounded-4xl p-1 md:m-5'>
                    <input className='bg-transparent text-white outline-none w-full pr-6 m-1' type="text" placeholder='Search...' />
                    <Search className='  text-white mr-2 ' />
                </div>
                <Link to='/cart' className='hidden md:flex bg-black text-white rounded-full p-2 active:scale-95 hover:bg-gray-700 relative md:m-3 '>
                    {count > 0 && (
                        <div className="bg-red-600 rounded-full absolute right-0 top-0 w-5 h-5 text-center leading-tight text-sm">
                            {count}
                        </div>
                    )}
                    <ShoppingBag />
                </Link>
                <div>
                    <button className="px-3 py-1 font-semibold text-white bg-gray-600 rounded-md shadow-md hover:bg-(--c6) focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-150 ease-in-out hidden md:inline-block">
                        <Link to="/login">Login</Link>
                    </button>
                </div>
                <Link to='/vendorform'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200">
                        Vendor
                    </button>
                </Link>
                <div>
                    <button onClick={showmenu} className=' lg:hidden md:hidden xl:hidden 2xl:hidden  p-2 rounded-full active:scale-95'>
                        <List className='cursor-pointer' />
                    </button>
                    <div
                        className={`
    ${menu} lg:hidden
    flex flex-col items-center
    bg-red-800 text-white
    w-32 h-40 rounded-md
    absolute right-1 top-18 gap-3 p-3

    transition-all duration-300 ease-out
    ${menu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
  `}
                    >
                        <Link to='/login' onClick={() => setMenu(false)}><CircleUserRound /></Link>
                        <Link to="/" onClick={() => setMenu(false)}>Home</Link>
                        <Link to="/about" onClick={() => setMenu(false)}>About</Link>
                        <Link to="/contact" onClick={() => setMenu(false)}>Contact</Link>
                    </div>
                </div>


            </nav>
        </>
    )
}

export default Navbar 