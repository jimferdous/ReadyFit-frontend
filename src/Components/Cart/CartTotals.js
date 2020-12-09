import React, { Component } from 'react';
import Paypal from './PayPal'


function CartTotals ({value, history}){
    const{cartSubTotal, cartTax, cartTotal, clearCart} = value
    return (
      <>
      <div className="container" >
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right" > 
          <h5> 
              <span> total: </span>
              <strong> $ {cartTotal}</strong>
          </h5>
          <Paypal total={cartTotal} clearCart={clearCart} history={history} /> 
                </div>
            </div>
        </div>
      </>
    )
}

export default CartTotals