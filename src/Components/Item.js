import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {ItemConsumer} from './Context'

class Item extends Component {

    render() {
        const{id, name, image, description, price} = this.props.item
        return (
            <ItemWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
               <div className="card border-0"> 
                <ItemConsumer> 

                    {(value) => (
                    <div className="img-container p-5" onClick={() => {
                        value.handleItemInfo(id)
                    }}> 
                    <Link to="/itemInfo" >
                      <img src={image} alt="product" className="card-img-top cover center img" style={{width:"150px", height:"200px"}}/> 
                    </Link>
                    </div>)}
                    
                </ItemConsumer>

                    <div className='d-flex justify-content-between' >
                       <p className='align-self-center mb-0'>
                           {name}
                        </p> 
                        <h5 className='text-blue font-italic mb-0'>
                            <span className='mr-1'></span>
                            ${price}
                        </h5>
                    </div>

               </div>
            </ItemWrapper>
        );
    }
}


const ItemWrapper = styled.div `
.img-container{
    position: relative;
    overflow: hidden;
}
`
export default Item;