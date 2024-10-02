import React from 'react'
import plate from "../../assets/f3.png";
import stick from "../../assets/stick4.webp";
import Rateswipe from '../../components/Rateswipe';

const Rating = () => {
  return (
    <div className='w-full lg:h-[80vh] md:h-[40vh] flex justify-center items-center'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
            <div>
                <div className='flex justify-center'><img src={plate} className='lg:w-[70%] md:w-[80%] w-[70%] duration-150 '/></div>
            </div>

            <div className='flex items-center'>
                <div>
                   <h1 className='font-bold lg:text-left md:text-left text-center text-green lg:text-4xl md:text-3xl text-2xl mb-5'>What people's Say<br/> about Foodicted.</h1>
                   <p className='lg:w-[60%] lg:text-start md:text-left text-center w-full text-semiblack mb-5'>
                    The Food we had enjoyed at the time of dinner It was realy delicioua taste with great cuaity evarything had unique taste which we had ordored.
                  </p>
                    <div><Rateswipe/></div>
                </div>
            </div>
        </div>
       <div className='absolute lg:left-0 right-0 md:left-0 lg:mt-48 lg:ml-6 ml-0 duration-200 -mt-64'><img src={stick} className='w-32 lg:animate-bounce animate-none'/></div>
    </div>
  )
}

export default Rating