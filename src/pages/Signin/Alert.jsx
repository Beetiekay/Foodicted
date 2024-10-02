import React from 'react'
import {IoMdCloseCircle} from "react-icons//io";
import { FaAngleRight } from 'react-icons/fa6';
import Singup from '../Signup/Signup';
import logo from "../../Favicon/favicon1.png";


export default function Alert({Visible, onClose}) {
    if (!Visible) return null;

  return(
    <div className='w-full h-full fixed inset-0 bg-opacity-50  z-30 backdrop-blur-sm flex justify-center items-center'>
     <div className='flex-col bg-black bg-opacity-85 p-5 border-2 border-orange rounded-3xl'> 
        <div className='mb-5 flex justify-end'><button onClick={onClose}><IoMdCloseCircle size={25} className='text-whitesmoke'/></button></div>
        <div className='flex justify-center'><img src={logo} className='w-12 absolute -mt-10'/></div>
        <h1 className='text-4xl mb-2 font-bold text-whitesmoke'>Welcome Back</h1>
        <p className='mb-10 text-seagreen text-xs text-center'>Welcome back Sir.<br/> Here we update our site to make it so comfortable<br/> for you to Use it. Thank You !</p>
        <form action='' method='post' className='grid grid-cols-1 space-y-5'>
            <input type='Email' placeholder='Your Email' 
            className='p-2 outline-none rounded-lg text-black hover:border-2 hover:border-orange'
            required/>
            <input type='Password' placeholder='Password'
            className='p-2 outline-none rounded-lg text-black hover:border-2 hover:border-orange'
             required/>
             <div className='text-whitesmoke cursor-pointer text-sm'>Forgot Password</div>

            <div className='flex'><h1 className='text-whitesmoke'><Singup/></h1><button type='submit' className='p-1 bg-whitesmoke text-black rounded-2xl ml-[12rem] outline-none hover:bg-orange'><FaAngleRight size={25}/></button></div>
        </form>
     </div>      
    </div>
  )};