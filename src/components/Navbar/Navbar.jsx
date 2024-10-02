import React, { useContext } from 'react'
import { TiShoppingCart } from 'react-icons/ti'
import { CartContext } from '../../Feature/Context'
import { Link } from 'react-router-dom'
import logo from "../../Favicon/favicon1.png";
import Rnavbar from '../Rnavbar/Rnavbar';
import Singin from '../../pages/Signin/Signin';
import Singup from '../../pages/Signup/Signup';


const Navbar = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className='p-5'>
         {/* Foodicted Header */}
       <header className='flex lg:justify-around justify-between items-center'>
         {/* Foodicted logo */}
        <div className='flex items-center gap-2'>
            <img src={logo} className='w-10'/>
            <span className='font-bold lg:text-xl text-xs'>Foodicted</span>
        </div>
         {/* Foodicted logo */}

          <div className='flex  items-center gap-4'>
          {/* Foodicted Navbar */}
         <ul className='lg:flex md:flex hidden space-x-6'>
            <Link className='focus:font-semibold' to={"/"}><li>Home</li></Link>
            <Link className='focus:font-semibold' to={"/Drones"}><li>Drone</li></Link>
            <Link className='focus:font-semibold' to={"/Accessories"}><li>Accessories</li></Link>
            <Link className='focus:font-semibold' ><li><Singin/></li></Link>
            <Link className='focus:font-semibold'><li><Singup/></li></Link>
         </ul>
          {/* Foodicted Navbar */} 
          <div className='w-[15%] flex justify-center items-center gap-4'>
             {/* Mobil responsive */}
          <div className='flex lg:hidden md:hidden -ml-8' ><Rnavbar/></div>
          {/* Mobil responsive */}

          {/* Foodicted notications */}
          <div>
            <button className='lg:p-2 md:p-2 p-3 bg-orange bg-opacity-80 rounded-xl'><TiShoppingCart size={25}/>
            <div className='absolute bg-whitesmoke w-4 h-5 flex justify-center items-center -mt-10 ml-6 rounded-full shadow-md'><span className=' '>{cart.length}</span></div>
           </button>
          </div>
          {/* Foodicted notications */}
         </div>
          </div>
       </header>
       {/* Foodicted Header */}
    </div>
  )
}

export default Navbar