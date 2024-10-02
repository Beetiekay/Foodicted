import React from 'react'
import { IoLogoApple, IoLogoGooglePlaystore } from 'react-icons/io5'
import advert from "../../assets/Advert.png";
import stick1 from "../../assets/stick7.png";
import stick2 from "../../assets/stick8.png";

const Order = () => {
  return (
    <div  className='w-full lg:h-[80vh] md:h-[50vh] h-[50vh] lg:p-24 p-8 flex justify-center items-center'>
        <div className='w-full lg:h-[55vh] md:h-[20vh] h-[25vh] lg:overflow-visible md:overflow-visible overflow-visible border-t-2 border-redish bg-orange shadow-md rounded-t-3xl'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-2 md:gap-5 p-2'>
              <div className='flex justify-center items-center'>
                <img src={stick2} className='w-[10%] lg:animate-none md:animate-none animate-bounce absolute lg:-mt-[18rem] md:-mt-[15rem] -mt-[10rem] lg:-ml-56 md:-ml-56 ml-52'/>
                <div>
                 <h1 className='font-bold lg:text-4xl md:text-2xl text-sm mb-5 '><span className='animate-pulse'>Simple way to</span><br/> order your foods</h1>

                 <div className='lg:flex md:flex block gap-4 lg:mt-0 md:mt-8'>
                  <button className='outline-none hover:border hover:border-redish hover:scale-90 duration-300 flex items-center gap-2 bg-whitesmoke p-2 rounded-lg hover:bg-black hover:text-whitesmoke'>
                    <p><IoLogoGooglePlaystore color='red' className='lg:text-[40px] md:text-[20px] text-[10px]'/></p>
                    <div>
                        <p className='lg:text-sm md:text-sm text-xs text-start'>Get it on</p>
                        <h1 className='font-semibold lg:text-sm md:text-sm text-xs '>Google Play</h1>
                    </div>
                 </button>

                  <button className='outline-none lg:mt-0 md:mt-0 mt-2 hover:border hover:border-redish hover:scale-90 duration-300 flex items-center gap-2 bg-whitesmoke p-2 rounded-lg hover:bg-black hover:text-whitesmoke'>
                    <p><IoLogoApple color='red' className='lg:text-[40px] md:text-[20px] text-[10px]'/></p>
                    <div>
                        <p className=' lg:text-sm md:text-sm text-xs  text-start'>Download it on</p>
                        <h1 className='text-start font-semibold lg:text-sm md:text-sm text-xs '>App Store</h1>
                    </div>
                  </button>
                </div>        
               </div>
              </div>
          {/* Adver container */}
             <div className='lg:flex block justify-center lg:mt-0 md:mt-0'>
                <img src={advert} className='lg:w-[35%] md:w-[40%] w-[80%] lg:top-[0.2rem] -top-[1rem] lg:scale-y-150 md:scale-150 scale-150 md:-top-[1.9rem] lg:ml-0 md:ml-[5rem] ml-[3rem] relative'/>
                <div className='absolute lg:block md:hidden block'>
                    <img src={stick1} className='lg:opacity-100 opacity-0 lg:w-[15%] w-[20%] mb-40 absolute right-0 mt-[15rem]'/>
                    <img src={stick1} className='lg:mt-0 md:mt-0 -mt-[13.5rem] lg:ml-0 md:ml-0 ml-[8rem] lg:w-[15%] w-[20%]'/>
                </div>
                
             </div>
            </div>  
        </div>
    </div>
  )
}

export default Order