import React, { Component } from 'react';

function CartItem({item, value}) {
    const{id, name, image, price, amount, total} = item 
    const{increment, decrement, removeItem} = value
    return (
    <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
        <img src={image} style={{width: "5rem", height: "5rem" }} 
        className="img-fluid" alt="" />
             </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg=none"> </span>
                    {name}
             </div>

             <div className="col-10 mx-auto col-lg-2"> 
             <span> price: $</span>
             {price}
             </div>
            <div className="col-10 mx-auto col-lg-2 my-lg-0">

                <div className="d-flex justify-content-center">
                <span className="btn btn-black mx-1" onClick={() => decrement(id)} > 
                -
                </span>
                <span className="btn btn-black mx-">{amount}</span>
                <span className="btn btn-black mx-1" onClick={() => increment(id)} > + </span>
                </div> 

            </div>

            <div className="col-10 mx-auto col-lg-2"> 
                <button className="btn btn-danger"onClick={() => removeItem(id)}> x </button> 
             </div>

            <div className="col-10 mx-auto col-lg-2"> 
                <strong> item total: ${total}</strong>
             </div>
    </div>
    )
}

export default CartItem