import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  const ActionOne = { buttonStyle: 'buttonLarge', textProp: "Clear" };
  const NumberOne = { buttonStyle: 'buttonRed', textProp: "÷" };

  const NumberTwo = { buttonStyle: 'button', textProp: "7" };
  const NumberThree = { buttonStyle: 'button', textProp: "8" };
  const NumberFour = { buttonStyle: 'button', textProp: "9" };
  const NumberFive = { buttonStyle: 'buttonRed', textProp: "x" };

  const NumberSix = { buttonStyle: 'button', textProp: "4" };
  const NumberSeven = { buttonStyle: 'button', textProp: "5" };
  const NumberEight = { buttonStyle: 'button',textProp: "6" };
  const NumberNine = { buttonStyle: 'buttonRed', textProp: "-" };

  const NumberTen = { buttonStyle: 'button', textProp: "1" };
  const NumberEleven = { buttonStyle: 'button', textProp: "2" };
  const NumberTwelve = { buttonStyle: 'button', textProp: "3" };
  const NumberThirteen = { buttonStyle: 'buttonRed', textProp: "+" };

  const ActionTwo = { buttonStyle: 'buttonLarge', textProp: "0" };
  const NumberFourteen = { buttonStyle: 'buttonLRed', textProp: "=" };

  return (
    <div class='mainDiv'>
      <div>
        <CalculatorDisplay />
      </div>
      <div>
        <ActionButton textProp={ActionOne} buttonStyle={ActionOne} />
        <NumberButton textProp={NumberOne} buttonStyle={NumberOne}/>
      </div>
      <div>
        <NumberButton textProp={NumberTwo} />
        <NumberButton textProp={NumberThree} />
        <NumberButton textProp={NumberFour} />
        <NumberButton textProp={NumberFive} />
      </div>
      <div>
        <NumberButton textProp={NumberSix} />
        <NumberButton textProp={NumberSeven} />
        <NumberButton textProp={NumberEight} />
        <NumberButton textProp={NumberNine} />
      </div>
      <div>
        <NumberButton textProp={NumberTen} />
        <NumberButton textProp={NumberEleven} />
        <NumberButton textProp={NumberTwelve} />
        <NumberButton textProp={NumberThirteen} />
      </div>
      <div>
        <ActionButton textProp={ActionTwo} />
        <NumberButton textProp={NumberFourteen} />

      </div>
    </div>
  );
};

export default App;
