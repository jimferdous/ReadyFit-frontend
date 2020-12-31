import React, { Component } from 'react';


function Name({name}) {
    return (
        <div className="row">
            
            <div className="col-10 mx-auto my-2 text-center text-title">
            <h1> 
                {name} 
            </h1>
            </div>

        </div>
    )
}

export default Name 