import React, { createContext, useReducer } from 'react'
import CartReducer from './Cardreducers'


export const CartContext = createContext()

const Context = ({children}) => {
    const [cart, dispatch] = useReducer(CartReducer, [])
  return (
    <CartContext.Provider value={{cart, dispatch}}>
       {children}
    </CartContext.Provider>
  )
}

export default Context