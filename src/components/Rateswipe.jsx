import React from 'react'
import profile2 from "../assets/devk.jpg";


import 'swiper/css';

const Rateswipe = () => {
  return (
    <div>
       <div className='lg:w-60 md:w-full flex lg:justify-start md:justify-start justify-center bg-olivedrab bg-opacity-25 rounded-xl'>  
        <button className='w-full duration-300  outline-none flex gap-3 p-2 rounded-full mb-5 items-center'>
            <img src={profile2} className='lg:w-[40%] md:w-[40%] w-[20%] rounded-full lg:h-[14vh] md:h-[13vh] h-[8.5vh] shadow-md border-2 border-semiblack hover:scale-75 duration-200 object-cover mt-2'/>
                <div className='mt-2'>
                 <h1 className='font-bold text-[24px] text-semiblack mb-1'>Dev Khal</h1>
                 <p className='text-[12px] font-semibold text-semiblack'>Regular Customer</p>
                </div>
            </button>
          </div>
     </div>
  )
}

export default Rateswipe