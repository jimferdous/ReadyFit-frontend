import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {ItemConsumer} from './Context'

class NavMenu extends Component {
    render() {
        return (
            <ItemConsumer> 
                {value => { 
                    const {id, name, image, description, price} = value.items
                
                return ( 
            <nav className="navbar navbar-light bg-light" >
                <Link to="/">
                    <h2 style={{color: `crimson`}}> ReadyFit </h2>
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link" >
                            <strong> Shop </strong>
                        </Link>
                    </li>
                </ul>

                <label className="ml-4 my-4 text-center ">
                    <strong> Categories: </strong>
                <select style={{height: "20px"}} onChange={(e) => {value.filterItems(e.target.value)}} style={{height: "20px"}} className="ml-4"> 
                    <option value="All" > All </option>
                    <option value="Basketball"> Basketball </option>
                    <option value="Football"> Football </option>
                    <option value="Boxing"> Boxing </option>
                    <option value="Baseball"> Baseball </option>
                </select>
                </label>

                <div class="ml-4 my-4 text-center " onChange={(e) => {value.searchFor(e.target.value)}}>
                    <input style={{height: "20px"}} type="text" placeholder="Search..." />
                </div>

                <Link to="/cart" className="ml-auto"> 
                    <button type="button" class="btn btn-primary"> 
                        Cart
                    </button>
                </Link>

            </nav>
                )
            }}
        </ItemConsumer>
        );
    }
}


export default NavMenu;