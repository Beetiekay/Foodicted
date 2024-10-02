import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import f1 from "../../assets/f1.png";
import {TiArrowRight, TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import Offer from './Offer';
import stick from "../../assets/stick3.png";
import Explore from './Explore';
import Find from './Find';
import Rating from './Rating';
import Order from './Order';

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
   useEffect(() => {
   AOS.init({duration:1200})
})

  return (
    <div className='lg:p-10 md:p-10 p-2'>
        <div className='bg-lace lg:border-0 border-2 border-y-Yellow w-full h-full lg:rounded-t-3xl md:rounded-t-3xl rounded-2xl bg-opacity-35' >
           <div><Navbar/></div> 

            <div data-aos="flip-up" className='w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-5'>
             <div className='flex lg:justify-center md:justify-start justify-start items-center'>
               <div>
                <h1 className='lg:text-6xl text-4xl font-bold mb-8 '>Meet, Eat & <br/>Enjoy The true<br/> taste</h1>

                <button className='flex items-center justify-around w-40 p-3 bg-black hover:text-orange text-whitesmoke mb-8 rounded-full'>
                    <p className='text-sm'>Explore Menu</p>
                    <div className='p-1 bg-Yellow rounded-full'><TiArrowRight className='text-xl'/></div>
               </button>

               <div>
                 <ul className='space-y-4'>
                    <button className='flex justify-between duration-300 items-center overflow-hidden w-10 lg:hover:w-[30%] hover:w-[50%] hover:border-2 hover:border-x-redish p-2 rounded-3xl bg-black text-whitesmoke'><li><TiSocialFacebook className='text-2xl'/></li> <p className='ml-2'>Facebook</p></button>
                    <button className='flex justify-between duration-300 items-center overflow-hidden w-10 lg:hover:w-[30%] hover:w-[50%] hover:border-2 hover:border-x-redish p-2 rounded-3xl bg-black text-whitesmoke'><li><TiSocialTwitter className='text-2xl'/></li> <p className='ml-2'>Twitter</p></button>
                    <button className='flex justify-between items-center duration-300 overflow-hidden w-10 lg:hover:w-[30%] hover:w-[50%] hover:border-2 hover:border-x-redish p-2 rounded-3xl bg-black text-whitesmoke'><li><TiSocialYoutube className='text-2xl'/></li><p className='ml-2'>Youtube</p></button>
                 </ul>
               </div>
               </div>
                <div className='absolute right-0 lg:-top-24 md:-top-44 top-64 animate-bounce md:animate-none'><img src={stick} className='w-32 md:relative md:top-[9rem] '/></div>
            </div>

            <div><img src={f1} className='animate-pulse'/></div>
            </div>
        </div>
                 <div data-aos="fade-up"><Offer/></div>
                 <div data-aos="fade-up"><Explore/></div>
                 <div data-aos="fade-up"><Find/></div>
                 <div data-aos="fade-up"><Rating/></div>
                 <div data-aos="fade-up"><Order/></div>
    </div>
  )
}

export default Home