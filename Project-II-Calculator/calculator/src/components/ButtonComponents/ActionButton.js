import React from 'react';
import './Button.css';
import NumberButton from './NumberButton'

const ActionButton = () => {
    return (
    <div>
        <div class="actionButton">
            <div class="actionZero">
                <p>0</p>
            </div>
        </div>
        <div class="fourthRow">
            <NumberButton textProp='clear' buttonStyle='buttonLarge' />;
            <NumberButton textProp='÷' buttonStyle='buttonRed' />;
        </div>
    </div>
    );
};

    export default ActionButton;
