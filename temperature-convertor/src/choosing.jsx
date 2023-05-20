import './Choosing.css'
import React, { useState } from 'react'

function Choosing() {
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
    return (
      <>
        <select value={selectedOption} onChange={handleChange}>
            <option value="Fahrenheit">Fahrenheit</option>
            <option value="Celcius">Celcius</option>
            <option value="Kelvin">Kelvin</option>
        </select>
      </>
    )
  }
  
  export default Choosing