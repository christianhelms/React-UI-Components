import React from 'react';
import './Button.css';

const ActionButton = props => {
    return <button className={props.buttonStyle}>{props.textProp.str}</button>;
};

    export default ActionButton;

const props = {
  textProp: { str: 'Hello CodeSandbox' }
};
