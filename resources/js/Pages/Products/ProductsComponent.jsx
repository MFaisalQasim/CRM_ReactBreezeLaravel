import React from 'react';

export default function ProductComponent(products) {
    const {product} = products;
    return(
        <>
            <h1>New Post Component</h1>
            <p>Name : {product.name}</p>
            <p>Age  : {product.age}</p>
            <p>Mobile : {product.mobile}</p>
            {/* <p>Skills : {product.skills}</p> */}
            {/* <p>Skills : {product.skills.join(',')}</p> */}
        </>
    )
}