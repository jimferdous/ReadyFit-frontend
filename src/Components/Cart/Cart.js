import React, { Component } from 'react';
import Name from '../Name'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import {ItemConsumer} from '../Context'
import CartList from './CartList'
import CartTotals from './CartTotals'

class Cart extends Component {
    render() {
        return (
            <section>
                <ItemConsumer>
                    {value => {
                        const {cart} = value
                        if(cart.length > 0){
                            return(
                                <>
                                <Name name="Your cart" />
                                <CartColumns />
                                <CartList value={value}/>
                                <CartTotals value={value} history={this.props.history} />
                                </>
                            )
                        }
                        else{
                            return ( <EmptyCart />)
                        }
                    }}
                </ItemConsumer>
            </section>
        );
    }
}

export default Cart;