import React from 'react'
import card1 from "../../assets/c1.png";
import card2 from "../../assets/c2.png";
import card3 from "../../assets/c3.jpeg";

const LastF = () => {
  return (
    <div className='lg:mt-0 md:mt-0 mt-0'>
        <div className='flex  justify-around items-center flex-wrap p-5 bg-white lg:space-y-0 md:space-y-0 space-y-4'>
            <div>
                <p className='font-semibold text-semiblack text-sm'>Copyright @2024 Products All Right Reserved</p>
            </div>

            <div className='flex justify-around space-x-4'>
              <img src={card1} className='lg:w-12 md:w-12 w-8 lg:h-fit md:h-fit h-4 shadow-md'/>
              <img src={card2} className='lg:w-12 md:w-12 w-8 lg:h-fit md:h-fit h-4 shadow-md'/>
              <img src={card3} className='lg:w-12 md:w-12 w-8 lg:h-fit md:h-fit h-5 shadow-md'/>
            </div>
        </div>
    </div>
  )
}

export default LastF;