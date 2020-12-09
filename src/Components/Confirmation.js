import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Confirmation extends Component{
   
    
    render(){
        const order = Math.floor((Math.random() * 10000000) + 200000 )


        return(
                  
            <div className="card d-flex justify-content-between mx-auto" style={{width: '38rem'}}>
            <div class="card-body">
                <p class="card-text"> Thank you for using ReadyFit, your order was successful!</p>
                
                <br/>
                <strong class="card-text"> Order number: {order} </strong>  

            </div>
            </div>
                        
                        
                        
                    )
                }
            }


export default Confirmation