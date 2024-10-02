import React from 'react'
import bag from "../../assets/d3.jpg";
import { GiDeliveryDrone } from "react-icons/gi"
import { FaLocationDot } from 'react-icons/fa6';

const Suggestion = () => {
  return (
    <div>
        <div className='bg-green rounded-2xl mb-5'><img src={bag} className='w-full lg:h-[60vh] md:h-[60vh] h-fit object-cover rounded-2xl border-2 opacity-65'/></div>
        <div className='absolute lg:-mt-[15rem] md:-mt-[15rem] -mt-[20rem] px-5'><h1 className='lg:w-[70%] md:w-[70%] w-[100%] lg:text-4xl md:text-4xl text-3xl font-bold lg:text-orange md:text-orange text-orange shadow-3xl'>Drone delivery operations underway in 27 countries Unmanage-airspace</h1></div>
        <div>
             <h1 className='text-3xl mb-5'>Delivered Places</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'> 
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                  <div className='p-2 border border-orange rounded-2xl'>
                    <button className='flex lg:p-2 md:p-1 p-2 mb-4 gap-4 border-b-2 border-b-semiblack'>
                        <div className='flex justify-center items-center'><GiDeliveryDrone className='lg:text-3xl md:text-2xl'/></div> 
                        <h1 className='text-xs font-semibold border bg-whitesmoke shadow-md text-semiblack p-2 mt-1 rounded-2xl'>Manhattan</h1>
                        <div className='flex justify-center items-center mt-1 animate-bounce duration-700'><FaLocationDot className='lg:text-3xl md:text-2xl text-redish'/></div> 
                    </button>
                    <div className='flex items-center lg:h-[5vh] md:h-[2vh] w-[100%] bg-black bg-opacity-15 rounded-3xl'><p className='bg-orange p-1 lg:font-semibold md:font-semibold lg:text-lg md:text-xs font-normal lg:h-[5vh] md:h-[2vh] w-[25%] rounded-3xl hover:w-[30%]'>25%</p></div>
                   </div>

                   <div className='p-2 border border-orange rounded-2xl'>
                    <button className='flex lg:p-2 md:p-1 p-2 mb-4 gap-4 border-b-2 border-b-semiblack'>
                        <div className='flex justify-center items-center'><GiDeliveryDrone className='lg:text-3xl md:text-2xl'/></div> 
                        <h1 className='text-xs font-semibold border bg-whitesmoke shadow-md text-semiblack p-2 mt-1 rounded-2xl'>San Fransisco</h1>
                        <div className='flex justify-center items-center mt-1 animate-bounce duration-700'><FaLocationDot className='lg:text-3xl md:text-2xl text-redish'/></div> 
                    </button>
                    <div className='flex items-center lg:h-[5vh] md:h-[2vh] w-[100%] bg-black bg-opacity-15 rounded-3xl'><p className='bg-orange p-1 lg:font-semibold md:font-semibold lg:text-lg md:text-xs font-normal lg:h-[5vh] md:h-[2vh] w-[35%] rounded-3xl hover:w-[30%]'>45%</p></div>
                   </div>

                   <div className='p-2 border border-orange rounded-2xl'>
                    <button className='flex lg:p-2 md:p-1 p-2 mb-4 gap-4 border-b-2 border-b-semiblack'>
                        <div className='flex justify-center items-center'><GiDeliveryDrone className='lg:text-3xl md:text-2xl'/></div> 
                        <h1 className='text-xs font-semibold border bg-whitesmoke shadow-md text-semiblack p-2 mt-1 rounded-2xl'>Queens</h1>
                        <div className='flex justify-center items-center mt-1 animate-bounce duration-700'><FaLocationDot className='lg:text-3xl md:text-2xl text-redish'/></div> 
                    </button>
                    <div className='flex items-center lg:h-[5vh] md:h-[2vh]  w-[100%] bg-black bg-opacity-15 rounded-3xl'><p className='bg-orange p-1 lg:font-semibold md:font-semibold lg:text-lg md:text-xs font-normal lg:h-[5vh] md:h-[2vh] w-[45%] rounded-3xl hover:w-[50%]'>50%</p></div>
                   </div>

                   <div className='p-2 border border-orange rounded-2xl'>
                    <button className='flex lg:p-2 md:p-1 p-2 mb-4 gap-4 border-b-2 border-b-semiblack'>
                        <div className='flex justify-center items-center'><GiDeliveryDrone className='lg:text-3xl md:text-2xl'/></div> 
                        <h1 className='text-xs font-semibold border bg-whitesmoke shadow-md text-semiblack p-2 mt-1 rounded-2xl'>The Bronx</h1>
                        <div className='flex justify-center items-center mt-1 animate-bounce duration-700'><FaLocationDot className='lg:text-3xl md:text-2xl text-redish'/></div> 
                    </button>
                    <div className='flex items-center lg:h-[5vh] md:h-[2vh] w-[100%] bg-black bg-opacity-15 rounded-3xl'><p className='bg-orange p-1 font-semibold lg:font-semibold md:font-semibold lg:text-lg md:text-xs lg:h-[5vh] md:h-[2vh] w-[55%] rounded-3xl hover:w-[60%]'>60%</p></div>
                   </div>
                </div>
        
                <div className='flex justify-center items-center lg:bg-green md:bg-black lg:text-black md:text-semiblack lg:bg-opacity-25 p-2'>
                <div>
                   <h1 className='lg:text-3xl md:text-3xl text-xl lg:font-semibold md:font-semibold font-bold mb-5'>Miles Can a Drone Fly</h1>
                   <p className='lg:text-sm md:text-sm text-xs'>The longest range of a drone is Currently More than 10 kilometers (about 6.3 miles). This range
                    can vary depending on the drone model,battery life,and enviromental conditions. How to make a drone Last
                    longer? To make your drone last longer, keep it clean and well-maitained, avoiding flghts is bad weather.
                    <span className='text-semiblack'>16 sep 2024</span>
                    </p> 
                </div>   
              </div>
          </div>
        </div>
    </div>
  )
}

export default Suggestion