import React, { useState } from 'react';

function FizzBuzz() {
  const [phoneNum, setPhoneNum] = useState('');
  const [output, setOutput] = useState('');

  const handleChange = (event) => {
    setPhoneNum(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let sum = 0;
    for (let i = 0; i < phoneNum.length; i++) {
      sum += parseInt(phoneNum.charAt(i));
    }
    let output = '';
    for (let i = 1; i <= sum; i++) {
      if (i % 4 === 0 && i % 5 === 0) {
        output += 'FizzBuzz ';
      } else if (i % 4 === 0) {
        output += 'Fizz ';
      } else if (i % 5 === 0) {
        output += 'Buzz ';
      } else {
        output += i + ' ';
      }
    }
    setOutput(output);
  }

  return (
    <div id='form'>
      <h1>FizzBuzz Challenge</h1>
      <form onSubmit={handleSubmit} >
        <label>
          Phone Number:
          <input type="text" value={phoneNum} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{output}</p>
    </div>
  );
}

export default FizzBuzz;
