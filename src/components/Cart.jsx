import React from 'react'
import Header from './Header'
import '../sass/Cart.scss'

function Cart() {
  return (
    <div className='cart-container'>
      <div className='cart-header'>
      <Header />
      </div>
      <div className="cart-content"></div>
        

    </div>
  )
}

export default Cart