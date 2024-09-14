import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const handleClick = (value) => {
    setInput(input + value);
  };

  return (
    <div className='App'>
      <div className='calculator-section'>
       
        <div className='calculator-area'>
          <input type='text' value={input} readOnly className='input-num' />
          <br />
          <h4>Result :{result}</h4>

          <div>
            <div className='buttons'>
              {number.map((num) => (
                <button onClick={() => handleClick(num.toString())}>{num}</button>
              ))}

              <button onClick={() => handleClick('+')}>+</button>
              <button onClick={() => handleClick('-')}>-</button>
              <button onClick={() => handleClick('*')}>*</button>
              <button onClick={() => handleClick('/')}>/</button>
              <button onClick={calculate}>=</button>
              <button onClick={clearInput}>Clear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
