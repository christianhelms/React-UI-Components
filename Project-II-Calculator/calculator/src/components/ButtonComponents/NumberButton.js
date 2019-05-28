import React from 'react';
import './Button.css';

const NumberButton = props => {
    return <button className={props.buttonStyle}>{props.textProp.str}</button>;
};

   export default NumberButton;

const props = {
  textProp: { str: 'Hello CodeSandbox' }
};
