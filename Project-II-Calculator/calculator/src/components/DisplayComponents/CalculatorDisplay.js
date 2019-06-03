import React from 'react';
import './Display.css';
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

function CalculatorDisplay() {
    return (
        <div class="calculatorDisplay">
            <ActionButton />
            <div class="firstRow">
                <NumberButton textProp='7' buttonStyle='button' />
                <NumberButton textProp='8' buttonStyle='button' />
                <NumberButton textProp='9' buttonStyle='button' />
                <NumberButton textProp='x' buttonStyle='buttonRed' />
            </div>
            <div class="secondRow">
            <NumberButton textProp='4' buttonStyle='button' />
            <NumberButton textProp='5' buttonStyle='button' />
            <NumberButton textProp='6' buttonStyle='button' />
            <NumberButton textProp='-' buttonStyle='buttonRed' />
            </div>
            <div class="thirdRow">
            <NumberButton textProp='1' buttonStyle='button' />
            <NumberButton textProp='2' buttonStyle='button' />
            <NumberButton textProp='3' buttonStyle='button' />
            <NumberButton textProp='+' buttonStyle='buttonRed' />
            </div>
            <div class="fourthRow bold">
            <NumberButton textProp='0' buttonStyle='buttonLarge' />
            <NumberButton textProp='=' buttonStyle='buttonRed' />
            </div>
        </div>
    );
};

export default CalculatorDisplay;

