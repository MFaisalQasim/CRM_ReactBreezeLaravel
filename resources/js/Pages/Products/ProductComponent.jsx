import React from 'react';
import ProductComponent from "./ProductsComponent"

export default function ProductsComponent() {
    const product = {
        name:'Zahid Hussain Bhagwar',
        age:24,
        mobile:'03422942591',
        // skills:['Laravel ',' React ',' Sql ',' Firebase']
    }
    return(
        <>
            <ProductComponent product={product}/>
        </>
    )
}