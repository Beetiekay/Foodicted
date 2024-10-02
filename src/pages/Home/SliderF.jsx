import React from 'react'
import { LuApple, LuHeart } from "react-icons/lu";
import { FaArrowRight, FaBowlFood } from "react-icons/fa6";
import { MdFace2, MdFastfood, MdRadar} from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';


const SliderF = () => {

  return (
    <div>
        <div className='flex justify-end gap-2 lg:-mt-5 md:mt-0 mt-2 lg:ml-0 md:ml-0 ml-20 '><h1 className='lg:text-2xl md:text-2xl text-lg font-semibold'>Swipe For More</h1> <button><FaArrowRight className='lg:text-2xl md:text-2xl text-sm animate-pulse'/></button></div>
    <div className='w-full h-[50vh] flex justify-center items-center overflow-hidden'>
      <Swiper
       freeMode={true}
       grabCursor={true}
       modules={FreeMode}
       breakpoints={{
        0: {
         slidesPerView:1,
         spaceBetween:10,
        },
        480: {
         slidesPerView:2,
         spaceBetween:10,
        },
        768: {
         slidesPerView:3,
         spaceBetween:15,
        },
        1024: {
         slidesPerView:4,
         spaceBetween:15,
        },
        1280: {
         slidesPerView:5,
         spaceBetween:30,
        },
       }}
       className='w-full p-2'
      >
          <SwiperSlide>
          <button className='bg-white w-[100%] shadow-lg p-4 h-[40vh] rounded-lg outline-none border border-black'>
            <div className='flex justify-center mb-10'><LuApple  className='text-8xl text-orange'/></div>
            <div className='p-3 rounded-lg hover:bg-orange'><p className='font-bold'>Healthy Food</p></div>
          </button>
          </SwiperSlide>

           <SwiperSlide>
          <button className='bg-white w-[100%] shadow-lg p-4 h-[40vh] rounded-lg border border-black'>
            <div className='flex justify-center mb-10'><FaBowlFood className='text-8xl text-orange'/></div>
            <div className='p-3 rounded-lg hover:bg-orange'><p className='font-bold'>Meal Food</p></div>
          </button>
           </SwiperSlide>

           <SwiperSlide>
          <button className='bg-white w-[100%] shadow-lg p-4 h-[40vh] rounded-lg border border-black'>
            <div className='flex justify-center mb-10'>< MdFastfood className='text-8xl text-orange'/></div>
            <div className='p-3 rounded-lg hover:bg-orange'><p className='font-bold'>Fast Food</p></div>
          </button>
           </SwiperSlide>

           <SwiperSlide>
          <button className='bg-white w-[100%] shadow-lg p-4 h-[40vh] rounded-lg border border-black'>
            <div className='flex justify-center mb-10'>< LuHeart className='text-8xl text-orange'/></div>
            <div className='p-3 rounded-lg hover:bg-orange'><p className='font-bold'>Meat Food</p></div>
          </button>
           </SwiperSlide>

           <SwiperSlide>
          <button className='bg-white w-[100%] shadow-lg p-4 h-[40vh] rounded-lg border border-black'>
            <div className='flex justify-center mb-10'>< MdFace2 className='text-8xl text-orange'/></div>
            <div className='p-3 rounded-lg hover:bg-orange'><p className='font-bold'>Faster Food</p></div>
          </button>
           </SwiperSlide>

            <SwiperSlide>
            <button className='bg-white w-[100%] shadow-lg p-4 h-[40vh] rounded-lg border border-black'>
             <div className='flex justify-center mb-10'>< MdRadar className='text-8xl text-orange'/></div>
             <div className='p-3 rounded-lg hover:bg-orange'><p className='font-bold'>Radar Food</p></div>
            </button>
            </SwiperSlide>
      </Swiper>
    </div>
  </div>
  )
}

export default SliderF