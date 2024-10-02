import React from 'react'
import bg from "../../assets/ai1.jpeg";
import video from "../../assets/Dronex.mp4";


const Intro = () => {
  return (
    <div className='flex justify-center items-center p-5'>
        <div className='grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 grid-flow-row'>
            <div className='lg:bg-opacity-0 bg-opacity-100 bg-black p-2 rounded-xl mb-4 md:ml-2 md:mr-2'>
               <div className='w-[100%]  flex lg:justify-start justify-center'><img src={bg} className='w-full lg:border-2 lg:border-black md:border-2 md:border-orange rounded-t-xl border-2 border-redish2'/></div> 
               <div className='w-full flex items-center duration-300 transition-all lg:bg-opacity-65 lg:bg-black bg-black bg-opacity-0 rounded-b-xl'>
                <div className='p-5'>
                    <h1 className='lg:text-2xl text-xxl lg:text-whitesmoke text-orange font-semibold mb-5'>Can Foodicted food be<br/> delivered by drone ?</h1>
                    <p className='lg:w-96 text-sm w-full text-whitesmoke'>
                    We use certified drones to deliver your goods directly to your yard -no rush hour traffic included. We're the safest and fastest delivery option, guaranteed!
                    </p>
                </div>
               </div>
            </div>

             <div className='lg:p-2 p-0 md:ml-2 md:mr-2'>
                <div className='lg:bg-whitesmoke md:bg-semiblack bg-black rounded-xl shadow-md p-5 border-2 border-redish md:border-black'> 
                    <div className='mb-5'><video src={video} controls className='w-[100%] lg:h-[37vh] md:h-[45vh] h-[40vh] lg:rounded-lg rounded-none border-2 lg:border-redish border-none'/></div>
                     <h1 className='lg:text-3xl text-xl lg:font-semibold font-bold lg:text-semiblack mb-8 md:text-white text-orange'>How do foodicted<br/> drone delivery service work ?</h1>
                     <p className='lg:text-semiblack text-sm mb-4 md:text-white text-whitesmoke'>
                     In the age of rapid technological advancement, drone food delivery services are taking the convenience of online ordering to new futuristic heights. Once a concept from a sci-fi movie, the idea of drones buzzing through the sky to deliver your favorite meals is now becoming a reality.  <span className='md:hidden flex'> This service promisesto make food delivery faster, more efficient, and possibly even more eco-friendly. Let's explore how these high-flying systems are transforming the way we think about meal delivery.</span> 
                     </p>
                </div>   
            </div>
        </div>
    </div>
  )
}

export default Intro