import React from 'react';
import './Button.css';

const NumberButton = props => {
    return <button className={props.buttonStyle}>{props.textProp}</button>;
};

   export default NumberButton;
