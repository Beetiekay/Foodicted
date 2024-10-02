import React from 'react'
import drone from "../../assets/a2.jpg"
import drone2 from "../../assets/ai3.jpg"
import drone3 from "../../assets/ai1.jpeg"
import drone4 from "../../assets/ai4.jpg"
import drone5 from "../../assets/ai5.jpg"
import drone6 from "../../assets/ai6.jpg"
import drone7 from "../../assets/ai7.jpeg"
import drone8 from "../../assets/ai8.jpg"

const Section = () => {
  return (
    <div >
       <div className='p-4'> 
        <div className='w-full flex lg:justify-center md:justify-start justify-center p-5'>
            <h1 className='lg:text-3xl text-xl text-center lg:font-semibold md:font-semibold font-bold'>Know What <span className='text-orange'>Drone Can Do</span> </h1>
        </div>

         <div className='flex lg:justify-center md:justify-start justify-center p-5'>
                <div className='w-52 border-b-2 border-semiblack'></div>
         </div>

        <div className='flex justify-center items-center lg:p-5 md:p-0 p-0'>
         <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            <div className='lg:bg-opacity-0 bg-opacity-100 bg-black p-2 rounded-xl mb-3 md:ml-2 md:mr-2'>
               <div className='w-[100%]  flex lg:justify-start justify-center'><img src={drone} className='w-full lg:border-2 lg:border-orange rounded-t-xl border-2 border-redish2 hover:scale-105'/></div> 
               <div className='w-full flex items-center duration-300 transition-all lg:bg-opacity-65 lg:bg-black bg-black bg-opacity-0 rounded-b-xl'>
                <div className='p-5'>
                    <h1 className='lg:text-xl lg:text-whitesmoke text-orange font-semibold mb-5'>What Is Drone Delivery?</h1>
                    <p className='text-sm text-whitesmoke'>
                    Drone delivery is a new way of delivering products to consumers. Rather than focusing on traditional delivery methods — people delivering via car, bicycle, or truck — this form of delivery gives the responsibility to a drone. 
                    </p>
                </div>
               </div>
            </div>
          
            <div className='lg:bg-opacity-0 bg-opacity-100 bg-black p-2 rounded-xl mb-3 md:ml-2 md:mr-2'>
               <div className='w-[100%]  flex lg:justify-start justify-center'><img src={drone2} className='w-full hover:scale-105 lg:border-2 lg:border-orange rounded-t-xl border-2 border-redish2'/></div> 
               <div className='w-full flex items-center duration-300 transition-all lg:bg-opacity-65 lg:bg-black bg-black bg-opacity-0 rounded-b-xl'>
                <div className='p-5'>
                    <h1 className='text-xl lg:text-whitesmoke text-orange font-semibold mb-5'>How fast is a delivery drone?</h1>
                    <p className=' text-whitesmoke text-sm'>
                      Delivery drones typically operate at speeds between 40 to 60 mph to ensure both efficiency and safety in populated areas. For instanc <span className='text-white font-semibold mt-3'>Read more</span>
                    </p>
                </div>
               </div>
            </div>

            <div className='lg:bg-opacity-0 bg-opacity-100 bg-black p-2 rounded-xl mb-3 md:ml-2 md:mr-2'>
               <div className='w-[100%]  flex lg:justify-start justify-center'><img src={drone3} className='w-full lg:h-[30.9vh] md:h-fit h-fit lg:border-2 lg:border-orange rounded-t-xl border-2 border-redish2 hover:scale-105'/></div> 
               <div className='w-full flex items-center duration-300 transition-all lg:bg-opacity-65 lg:bg-black bg-black bg-opacity-0 rounded-b-xl'>
                <div className='p-5'>
                    <h1 className='text-xl lg:text-whitesmoke text-orange font-semibold mb-5'>How long is drone delivery?</h1>
                    <p className=' text-whitesmoke'>
                    Amazon Drone Delivery is a service that will safely deliver your Amazon package in less than an hour.
                    </p>
                </div>
               </div>
            </div>

            <div className='lg:bg-opacity-0 bg-opacity-100 bg-black p-2 rounded-xl mb-3 md:ml-2 md:mr-2'>
               <div className='w-[100%]  flex lg:justify-start justify-center'><img src={drone4} className='w-full lg:h-[30.9vh] md:h-fit h-fit lg:border-2 lg:border-orange rounded-t-xl border-2 border-redish2 hover:scale-105'/></div> 
               <div className='w-full flex items-center duration-300 transition-all lg:bg-opacity-65 lg:bg-black bg-black bg-opacity-0 rounded-b-xl'>
                <div className='p-5'>
                    <h1 className='text-xl lg:text-whitesmoke text-orange font-semibold mb-5'>Can drones deliver food?</h1>
                    <p className='text-sm text-whitesmoke'>
                     Drones can adapt to various delivery scenarios, whether they're delivering common products like food or more urgent ones like medical supplies. This makes them suitable for a wide
                    </p>
                </div>
               </div>
            </div>

            <div className='lg:bg-opacity-0 bg-opacity-100 bg-black p-2 rounded-xl mb-3 md:ml-2 md:mr-2'>
               <div className='w-[100%]  flex lg:justify-start justify-center'><img src={drone5} className='w-full lg:h-[30.9vh] md:h-fit h-fit lg:border-2 lg:border-orange rounded-t-xl border-2 border-redish2 hover:scale-105'/></div> 
               <div className='w-full flex items-center duration-300 transition-all lg:bg-opacity-65 lg:bg-black bg-black bg-opacity-0 rounded-b-xl'>
                <div className='p-5'>
                    <h1 className='text-xl lg:text-whitesmoke text-orange font-semibold mb-5'>What software is used for delivery drones?</h1>
                    <p className='text-sm text-whitesmoke'>
                      Dronebase is a drone mission management sotware for various drone operation
                      including drone delivery.
                    </p>
                </div>
               </div>
            </div>

            <div className='lg:bg-opacity-0 bg-opacity-100 bg-black p-2 rounded-xl mb-3 md:ml-2 md:mr-2'>
               <div className='w-[100%]  flex lg:justify-start justify-center'><img src={drone6} className='w-full lg:h-[28vh] md:h-fit h-fit lg:border-2 lg:border-orange rounded-t-xl border-2 border-redish2 hover:scale-105'/></div> 
               <div className='w-full flex items-center duration-300 transition-all lg:bg-opacity-65 lg:bg-black bg-black bg-opacity-0 rounded-b-xl'>
                <div className='p-5'>
                    <h1 className='text-lg lg:text-whitesmoke text-orange font-semibold mb-5'>What are the disadvanges of drone delivery</h1>
                    <p className='text-sm text-whitesmoke'>
                      Drone have limited battery life, which can restrict the distance they can travel
                      and the number of deliveries they can make in a single flight.
                    </p>
                </div>
               </div>
            </div>

            <div className='lg:bg-opacity-0 bg-opacity-100 bg-black p-2 rounded-xl mb-3 md:ml-2 md:mr-2'>
               <div className='w-[100%]  flex lg:justify-start justify-center'><img src={drone7} className='w-full lg:h-[30.9vh] md:h-fit h-fit lg:border-2 lg:border-orange rounded-t-xl border-2 border-redish2 hover:scale-105'/></div> 
               <div className='w-full flex items-center duration-300 transition-all lg:bg-opacity-65 lg:bg-black bg-black bg-opacity-0 rounded-b-xl'>
                <div className='p-5'>
                    <h1 className='text-xl lg:text-whitesmoke text-orange font-semibold mb-5'>Can pizza be delivered by drone?</h1>
                    <p className='text-sm text-whitesmoke'>
                     a patio table the drone will be able to fit two 12-inch pizza along with salad.
                     because each zipline p2 drone is capable.
                    </p>
                </div>
               </div>
            </div>

            <div className='lg:bg-opacity-0 bg-opacity-100 bg-black p-2 rounded-xl mb-3 md:ml-2 md:mr-2'>
               <div className='w-[100%]  flex lg:justify-start justify-center'><img src={drone8} className='w-full lg:h-[30.9vh] md:h-fit h-fit lg:border-2 lg:border-orange rounded-t-xl border-2 border-redish2 hover:scale-105'/></div> 
               <div className='w-full flex items-center duration-300 transition-all lg:bg-opacity-65 lg:bg-black bg-black bg-opacity-0 rounded-b-xl'>
                <div className='p-5'>
                    <h1 className='text-xl lg:text-whitesmoke text-orange font-semibold mb-5'>How much does it cost for drone delivery?</h1>
                    <p className='text-sm text-whitesmoke'>
                     Drone delivery fees are $12.99 per delivery for welmart+ members & $19.99 per delivery for non-members.
                    </p>
                </div>
               </div>
            </div>
         </div> 
        </div>
    </div> 
    </div>
  )
}

export default Section