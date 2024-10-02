import React from 'react'
import chopper from "../../assets/f6.png";

const Find = () => {
  return (
    <div className='w-full lg:h-[80vh] md:h-[50vh] h-[80vh] flex justify-center items-center lg:p-24 p-8'>
        <main className='w-full bg-black bg-opacity-80 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 rounded-s-3xl lg:border-0 border-b-2 border-t-2 border-l-2 border-orange'>
            <div className='flex justify-center items-center'>
                <div>
                  <div className='lg:mb-8 md:mb-2 lg:mt-0 md:-m-3 ml-4 mr-2 lg:p-0 md:p-5 relative z-20'><h1 className='lg:text-3xl md:text-lg text-xl font-bold text-whitesmoke'>Discover Restaurant <br/> Near From You </h1></div>
                 <div className='lg:p-2 p-0'>
                  <button className='lg:p-3 md:p-3 p-1 md:text-balance text-xs bg-orange font-semibold ml-2 mr-2 hover:border-2 hover:border-redish rounded-full outline-none duration-300 hover:bg-whitesmoke'>Find Restaurants</button>
                  <button className='lg:p-3 md:p-3 p-1 md:text-balance text-xs bg-redish ml-2 mr-2 text-whitesmoke font-semibold hover:border-2 lg:mt-0 mt-4 hover:text-black hover:border-orange rounded-full outline-none duration-300 hover:bg-whitesmoke'>Explore Menu</button>  
                </div>  
              </div>    
            </div>
           
           <div className='flex justify-center'>
            <img src={chopper} className='w-96 duration-200 lg:scale-150 md:scale-125 scale-125 lg:mt-0 md:mt-0 mt-8'/>
           </div>

           <div className='w-2 h-10 lg:bg-gray bg-orange absolute ml-36 animate-pulse rounded-b-full'></div>
           <div className='w-10 absolute ml-48 mt-3 animate-pulse h-10 lg:bg-gray bg-orange rounded-full'></div>
        </main>
    </div>
  )
}

export default Find