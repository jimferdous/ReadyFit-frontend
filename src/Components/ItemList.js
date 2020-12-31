import React, { Component } from 'react';
import Item from './Item'
import Name from './Name'
import {ItemConsumer} from './Context'


class ItemList extends Component {

    render() {
        return (
            <>
                    <div className="py-5" >
                <div className="container">
            <Name name="Our Collection:" />


            <div className="row">
                <ItemConsumer>
                    {(value) => {
                        if(value.filtered !== "All"){
                      return value.items.filter(item => item.name.toLowerCase().includes(value.filtered.toLowerCase() || value.searchTerm.toLowerCase())).map(item => {return <Item key={item.id} item={item}/>})
                        }
                        else{
                            return value.items.map(item => {return <Item key={item.id} item={item}/>})
                        }
                    }}
                </ItemConsumer>
                
                    </div>   
                </div>
            </div>
            </>
        );
    }
}

export default ItemList;