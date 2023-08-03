import React from 'react';
import OnComponent from "../Status/OnComponent"
import OffComponent from "../Status/OffComponent"

export default function FanComponent(props) {

    const {isOn} = props;
    return(
        <>
            {isOn ? <OnComponent/> : <OffComponent/>}
        </>
    )
}