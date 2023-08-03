import React, {Component} from 'react';

const Coloured=(ColouredComponent) =>{
    return(props)=>{
        return (
        <div className='text-success '>
            <ColouredComponent {...props}/>
        </div>
        )
    }
}

export default Coloured;