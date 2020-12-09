import React, { Component } from 'react';
import {ItemConsumer} from './Context'
import {Link} from 'react-router-dom'

class ItemInfo extends Component {


    state = {
        clicked: false
    }

    render() {
        return (
            <ItemConsumer>
                {value => {
                    const {id, name, image, description, price} = value.singleItem
                    
                    return (
                        <div className="container py-5 "> 

                            <div className="row "> 
                                <div className="col-10 mx-auto text-center my-5" >
                                <h1>{name}</h1>
                                </div> 
                            </div>
                                <div className="row"> 
                                    <div className="col-10 mx-auto col-md-2 my-3">
                                    <img src={image} className="img-fluid" alt="item" />
                                </div>

                                <div className="mx-auto my-3"> 
                                <h4>
                                    <strong> 
                                        Price: <span> ${price}</span>
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold">
                                    <span>Description: </span>
                                </p>
                                <p> {description} </p>


                                <button className="btn btn-primary" onClick={()=> {
                                        value.addToCart(id)
                                    }}> Add to cart </button>
                                    <br/>
                                    <br/>
                                <div> 
                                    <Link to="/">
                                       <button className="btn btn-primary"> Keep Shopping </button> 
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ItemConsumer>
        );
    }
}

export default ItemInfo;