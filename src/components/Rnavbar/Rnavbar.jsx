import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {TiThMenu, TiWorld, } from 'react-icons/ti';
import { IoMdArrowDropupCircle, IoMdCloseCircle } from "react-icons/io"
import image from "../../assets/f4.png"
import video from "../../assets/food.mp4"
import Singin from '../../pages/Signin/Signin';
import Singup from '../../pages/Signup/Signup';

const Rnavbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className='justify-center p-4'>
        <div>
        <div ><button onClick={() => setOpen(!open)} className='outline-none duration-700'><TiThMenu className='text-2xl'/></button></div>

        {
            open &&(
        <div className='w-[89%] overflow-hidden h-[80vh] bg-black p-4 absolute left-5 top-5 duration-500 transition-all z-30 rounded-3xl'>
            <div onClick={() => setOpen(false)}  className='text-whitesmoke text-right cursor-pointer mb-5 animate-bounce duration-500'><IoMdArrowDropupCircle className='text-3xl text-orange'/></div>
          <ul className='grid grid-cols-3 mb-10'>
            <Link className='focus:font-bold' to={"/"}><li className='w-28 font-semibold text-sm text-semiblack rounded-xl text-center  duration-300  hover:text-whitesmoke'>Home</li></Link>
            <Link className='focus:font-bold' to={"/Drones"}><li className='w-28 font-semibold text-sm text-semiblack hover:to-whitesmoke rounded-xl text-center duration-300'>Drone</li></Link>
            <Link className='focus:font-bold' to={"/Accessories"}><li className='text-sm font-semibold text-center text-semiblack duration-300 hover:text-whitesmoke'>Accessories</li></Link>
            <Link className='focus:font-bold' ><li className='ml-5 text-sm font-semibold text-semiblack hover:to-whitesmoke rounded-xl text-center duration-300 hover:text-whitesmoke'><Singin/></li></Link>
            <Link className='focus:font-bold' ><li className='text-sm ml-5 font-semibold text-semiblack hover:to-whitesmoke rounded-xl text-center border-whitesmoke'><Singup/></li></Link>
          </ul> 
          <div className='w-[100%]'>
            <div>
            <div className='absolute right-5 -ml-3 mt-2 w-3 h-3 bg-redish rounded-full duration-500 animate-pulse'></div>
              <i className='text-2xl text-orange px-2'>Newsletter</i>
              
            </div>
          <div className='h-80 p-2 overflow-y-scroll'>
           <div className='mb-6 border border-white p-2 mt-4'>
           <div className='flex gap-1 items-center'><p className='text-semiblack font-semibold mb-8 text-right text-lg'>Now .</p> <TiWorld size={20} className='text-semiblack relative -top-3'/></div>
            <video src={video} className='object-cover mb-5' autoPlay loop muted/>
            <div>
              <h1 className='text-xl text-orange font-semibold mb-2'>The Way Our Things Are Moving Is Different.</h1>
              <p className='text-gray'>
                Hungry people die first, Let's eat. <mark>Foodicted Food Full Of mood</mark> 
                Order Our Foodicted drone Will work for this it will reach your place immediately.
              </p>
            </div>  
           </div>
           
           <div className='mb-5 border border-white p-2'>
           <div className='flex gap-1 items-center'><p className='text-semiblack font-semibold mb-8 text-right text-lg'>Now .</p> <TiWorld size={20} className='text-semiblack relative -top-3'/></div>
            <img src={image} className='object-cover mb-5' autoPlay loop muted/>
            <div>
              <h1 className='text-xl text-orange font-semibold mb-2'>Delight In Every Bite.</h1>
              <p className='text-gray'>
                <mark>Every bite </mark> is a sensory trip. Life's too short for ordinary meals. 
                Dining is a love language.Elevate your dining experiences with us.
              </p>
            </div>  
           </div>
           </div>
          </div>
        </div>
         )
        }
        

        </div>
    </div>
  )
}

export default Rnavbar