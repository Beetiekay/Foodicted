import React from 'react'
import logo from "../../assets/flogo.png";
import { FaAngleRight, FaFacebookF, FaGooglePlusG, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { MdHeadsetMic, MdMail } from 'react-icons/md';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  
  return (
    <div className='flex lg:justify-center justify-start items-center w-full lg:h-[50vh] h-full bg-white lg:p-5 p-0'>
      <ScrollToTop smooth top={20} width='30' color='black' className='flex justify-center p-2'/>
        <div className='flex justify-around space-x-20 flex-wrap'>
            {/* First footer */}
             <div className='relative lg:left-0 -left-6'>
              <div>
                <div><img src={logo} className='w-36'/></div>
                <div className='px-10 -m-6 mb-8'>
                    <p className='text-semiblack'>Dytivutis 10 East 50th Street 4th<br/> float new York My 32223</p>
                </div>
              </div>
            <div className='flex gap-6 px-3'>
                <div className='hover:bg-black p-2 hover:text-orange rounded-full duration-200'><FaFacebookF size={18}/></div>
                <div className='hover:bg-black p-2 hover:text-orange rounded-full duration-200'><FaTwitter  size={18}/></div>
                <div className='hover:bg-black p-2 hover:text-orange rounded-full duration-200'><FaGooglePlusG  size={18}/></div>
                <div className='hover:bg-black p-2 hover:text-orange rounded-full duration-200'><FaYoutube  size={18}/></div>
            </div>
            </div>
            {/* second footer */}
            <div className='flex relative -left-8 items-center p-2'>
                <div className='space-y-2 mt-6 relative lg:left-0 -left-20'>
                    <h1 className='font-semibold text-lg mb-5'>Categories</h1>
                    <p className='text-sm text-semiblack cursor-pointer'>Fruts &Vegetablen</p>
                    <p className='text-sm text-semiblack cursor-pointer'>Dairy Products</p>
                    <p className='text-sm text-semiblack cursor-pointer'>Package Food</p>
                    <p className='text-sm text-semiblack cursor-pointer'>Bevirsg</p>
                </div>
            </div>
            {/* thurd footer */}
            <div className='flex items-center relative lg:left-0 -left-28 p-2'>
                <div className='space-y-2 mt-7'>
                    <h1 className='font-semibold text-lg mb-5'>Userful Links</h1>
                    <p className='text-sm text-semiblack cursor-pointer'>Paymert & Tax</p>
                    <p className='text-sm text-semiblack cursor-pointer'>Terms Serdse</p>
                    <p className='text-sm text-semiblack cursor-pointer'>My Account </p>
                    <p className='text-sm text-semiblack cursor-pointer'>Serdce Polcy</p>
                </div>
            </div>
            {/* Fourth footer */}
              <div className='flex items-center p-2'>
                <div className='relative lg:left-0 -left-12 mt-10 p-2'>
                    <h1 className='font-semibold text-lg mb-4'>Stay connected</h1>
                    <form action='' className='bg-white flex items-center p-2 rounded-xl shadow-md mb-4'>
                        <div><input type='email' placeholder=' Email Address' className='bg-white text-semiblack outline-none'/></div>
                        <button type='submit' className='p-2 outline-none bg-black rounded-xl hover:text-orange text-whitesmoke duration-300 hover:scale-110'><FaAngleRight size={18}/></button>
                    </form>
                    <div className='flex gap-2 items-center mb-4'><MdHeadsetMic size={20} className='text-orange hover:scale-125 duration-200 cursor-pointer'/><p className='text-semiblack text-sm'>+223 463882872-867</p></div>
                    <div className='flex gap-2 items-center'><MdMail size={20} className='text-orange hover:scale-x-125 duration-200 cursor-pointer'/><p className='text-semiblack text-sm'>support@foodicts.com</p></div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Footer