import React from 'react';
import FanComponent from "../Appliances/Component/FanComponent"
import FanCountComponent from "../Appliances/Component/FanCountComponent"

export default function ApplianceComponent() {
    return(
        <>
            <FanComponent isOn={false}/>
            <FanCountComponent totalFan={0}/>
        </>
    )
}