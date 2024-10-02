import React, { useContext } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { CartContext } from '../../Feature/Context';

const ProductsCard = (props) => {
    const {dispatch} = useContext(CartContext);
    const {id, name, price, image} = props.data;
  return (
    <div>
        <div className='w-full lg:p-2 md:p-4 p-2 bg-white hover:scale-95 duration-300 rounded-xl shadow-xl border border-semiblack'>
            <img src={image} alt='' className='lg:w-[100%] md:[100%] lg:mb-0 md:mb-1 mb-3 w-[100%] object-scale-down lg:h-[50vh] md:h-[35vh] h-[12vh]'/>
            <h1 className='lg:text-[35px] md:text-[25px] mb-2 font-semibold'>{name}</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mb-4'>
                <p className='mb-1 font-semibold'>${price}</p>
                <del className='mb2 font-semibold text-redish'>$3.150</del>
                <button onClick={() => dispatch({type: "Add",})}  className='flex items-center w-full p-2 bg-black text-orange hover:text-whitesmoke duration-300 rounded-md hover:opacity-75 text-lg'>
                    <TiShoppingCart className='lg:text-[25px] md:text-[25px] text-[15px]'/><p>Add To Cart</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductsCard