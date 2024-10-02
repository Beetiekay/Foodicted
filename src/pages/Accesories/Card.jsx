import React from 'react'

const Card = (props) => {
  const {tittle, description, image} = props.data;
  return (
    <div className='grid lg:grid-cols-1 md:grid-cols-1 grid-cols-2 lg:border-none md:border-none border-b p-2'>
      <img src={image} className='lg:w-[100%] md:w-[100%] w-[80%] object-fill lg:h-44 md:h-40 h-[10vh] hover:border mt-2'/>
      <div className='lg:w-fit md:w-fit w-full'>
        <h1 className='lg:text-2xl md:text-2xl text-sm font-semibold cursor-pointer'>{tittle}</h1>
        <p className='text-semiblack lg:text-sm md:text-sm text-xs'>{description}</p>
      </div>
    </div>
  )
}

export default Card