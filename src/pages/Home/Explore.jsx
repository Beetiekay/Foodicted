import React from 'react'
import flate from "../../assets/f4.png";
import soup from "../../assets/f7.png";
import cabbage from "../../assets/stick2.png";
import { MdArrowCircleRight } from 'react-icons/md';

const Explore = () => {
  return (
    <div className='w-full flex justify-center items-center'>
        <main className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
            <div className='lex justify-center items-center'>
                <div>
                    <img src={flate}/>
                    <img src={soup} className=';g:w-24 w-16 absolute -mt-24 lg:ml-20 ml-0'/>
                </div>  
            </div>

            {/* pharagraph section */}
            <div className='flex lg:text-start text-center items-center'>
                <div>
                   <h1 className='lg:text-4xl text-2xl font-bold mb-8'>Living well begins <br/> with eating well.</h1>
                    <p className='text-semiblack mb-7 lg:w-[70%] w-full'> 
                      Your safety is our frst priority So everything we do to keep your Shome Bazaar experience safe is informed by the most recent CDC recammendations We remain in constant contact with our state and local health offhcials in our ongoing offort to provide a safe.
                   </p>
                   <div className='flex lg:justify-start justify-center'>
                     <button className='flex items-center duration-150 p-3 rounded-full bg-black gap-2 outline-none hover:gap-3'>
                      <p className='font-semibold text-whitesmoke text-sm'>Explore Story</p> 
                     <MdArrowCircleRight className='text-3xl text-orange'/>
                    </button> 
                  </div>   
                </div>  
            </div>
            <div className='absolute right-0 mt-14'><img src={cabbage} className='lg:w-40 w-16'/></div>
        </main>  
    </div>
  )
}

export default Explore