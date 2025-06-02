import React, { useState } from "react";
import TestComponent from "../newTestComponent";

const AnotherOneComponent = function(props) {
    const [bgColor, setBgColor] = useState(props.color);
    const [currentValue, setCurrentValue] = useState(0);

    const btnClickFn = (value) => {
        if(bgColor === 'aqua') {
            setBgColor(props.color)
        } else {
            setBgColor('aqua')
        }
    }

    const counter = () => {
        setCurrentValue (currentValue +1)
    }

    return (
        <div className={"header"} style={{backgroundColor: bgColor}}>
            <TestComponent title={props.title} onClicck={btnClickFn} />
            <TestComponent title={currentValue} onClicck={counter} />


            {/* header
            <ul>
            <li><Link to{'/details'} title={item.title}>details Link<Link/></li>
            <li><NavLink to{/test} title={item.title}>test Link<NavLink/></li>
            </ul>
             */}
        </div>
    )
}

export default AnotherOneComponent;