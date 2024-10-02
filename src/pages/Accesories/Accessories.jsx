import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Products } from './Products'
import ProductsCard from './ProductsCard'
import Stories from './Stories'

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Accessories = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 })

  return (
    <div className='lg:p-10 md:p-10 p-2'>
      <div className='bg-olivedrab w-full h-full lg:rounded-3xl md:rounded-3xl rounded-2xl lg:bg-opacity-5 md:bg-opacity-35 bg-opacity-15 lg:border-none md:border-none border-2 border-orange'>
        <Navbar/>
        <div data-aos="flip-up" className='lg:p-8 p-3'>
          <div>
            <button className='border-b-2 outline-none p-2 mb-2 border-b-orange'><h1 className='lg:text-4xl font-semibold'>Foodicted Accessories List</h1></button>
           <div  className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3'>
            {Products.map((Products, key) =>
             <ProductsCard key={key} data={Products}/>
            )}
           </div>
          </div>
        </div> 
      </div> 
       <div data-aos="fade-up" className='lg:p-8 p-3'><Stories/></div>
    </div>
  )
}

export default Accessories