import React, {Component} from 'react';

const Coloured=(ColouredComponent) =>{
    return(props)=>{
        return (
        <div className='text-success m-4'>
            <ColouredComponent {...props}/>
        </div>
        )
    }
}

export default Coloured;