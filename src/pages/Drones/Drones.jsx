import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Intro from './Intro'
import Section from './Section'
import Suggestion from './Suggestion'

//aos
import AOS from "aos";
import "aos/dist/aos.css";

const Drones = () => {
  useEffect(() => {
    AOS.init({duration:1200})
 })

  return (
    <div className='lg:p-10 md:p-10 p-2'>
      <div className='lg:bg-redish lg:bg-opacity-10 bg-black lg:border-0 border-2 border-y-green w-full h-full lg:rounded-t-3xl md:rounded-t-3xl rounded-2xl bg-opacity-10'>
        <Navbar/>
      <div data-aos="flip-up"><Intro/></div>
      </div>  
      <div data-aos="fade-up"><Section/></div>
      <div data-aos="fade-up"><Suggestion/></div>
    </div>
  )
}

export default Drones