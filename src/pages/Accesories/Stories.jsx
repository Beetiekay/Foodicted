import React from 'react'
import { Bakers } from './Bakers'
import Card from './Card'
import b1 from "../../assets/b2.jpg";


const Stories = () => {
    
  return (
    <div>
        <div>
            <h1 className='lg:text-3xl md:text-2xl text-xl font-semibold  mb-5'>Suggest For You</h1>
            <div className='mb-5'><img src={b1} className='w-full h-[50vh] object-cover border-2 border-black opacity-60 rounded-2xl'/>
            <h1 className='lg:text-4xl md:text-3xl text-xl font-bold absolute -mt-56 lg:ml-10 md:ml-10 ml-1'>6 Secrets On How To Become A Baker In<br className='lg:flex md:flex hidden'/> 2024 <span className='text-redish animate-pulse'>(Career Guide)</span></h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5'>
                {Bakers.map((Bakers, key) =>
                 <Card key={key} data={Bakers}/>
                )}
            </div>
            <h1 className='lg:text-2xl md:text-2xl text-lg font-semibold hover:translate-y-2 hover:text-semiblack lg:text-center md:text-center text-left mt-2'>View More..</h1>
        </div>
    </div>
  )
}

export default Stories