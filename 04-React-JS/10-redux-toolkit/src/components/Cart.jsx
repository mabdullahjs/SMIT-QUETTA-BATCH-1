import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const selector = useSelector(state => state.cart.cart)
    console.log(selector);
    
  return (
    <span>Cart {selector.length}</span>
  )
}

export default Cart