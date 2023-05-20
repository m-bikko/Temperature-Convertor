import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Choosing from './choosing.jsx'

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  let upper = `Fahrenheit`;
  let downer = `Fahrenheit`;
  const handleSelectChangeupper = (selectedValue) => {
    setSelectedOption(selectedValue);
    console.log('Selected option:', selectedValue);
    upper = selectedValue;
  };
  const handleSelectChangedown = (selectedValue) => {
    setSelectedOption(selectedValue);
    console.log('Selected option:', selectedValue);
    downer = selectedValue;
  };

  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');

  const handleInput1Change = (event) => {
    if(upper===downer)
      setInput1Value(event.target.value);
    else setInput2Value
  };

  const handleInput2Change = (event) => {
    if(upper===downer)
      setInput2Value(event.target.value);
    else setInput2Value
  };
  

  return (
    <>
      <div className='wrapper'>
        <div className="tf square">
          <div>
            Input in: {<Choosing onSelectChange={handleSelectChangeupper}/>}
          </div>
          
          <input type="text" value={input1Value} onChange={handleInput1Change}/>
        </div>
        <button className='submit'>
          Clear
        </button>
        <div className="bf square">
          <div>
            Output in: {<Choosing onSelectChange={handleSelectChangedown}/>}
          </div>
          <input type="text" value={input1Value} onChange={handleInput2Change}/>
        </div>
      </div>
    </>
  )
}

function calculate(){
  let upper = document.getElementsByClassName();
  let down = document.getElementsByClassName();
}

export default App
