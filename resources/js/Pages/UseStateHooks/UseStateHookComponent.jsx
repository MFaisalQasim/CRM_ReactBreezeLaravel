import React, {useState} from 'react';

export default function useStateHook() {

    const [color,setColor] = useState("red");

    return(
        <>
            <h1>My favourite Color is {color}</h1>
            <button type="button" onClick={()=>setColor("Green")} >Change Color</button>
        </>
    )
}