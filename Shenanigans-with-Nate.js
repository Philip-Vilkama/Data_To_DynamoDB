import React, { useState } from 'react';

const UploadPage = () => {
  // State for input 1
  const [input1Data, setInput1Data] = useState('');

  // State for input 2
  const [input2Data, setInput2Data] = useState('');

  // Handle input 1 change
  const handleInput1Change = (e) => {
    setInput1Data(e.target.value);
  };

  // Handle input 2 change
  const handleInput2Change = (e) => {
    setInput2Data(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process input data here
    console.log('Input 1 Data:', input1Data);
    console.log('Input 2 Data:', input2Data);
  };

  return (
    <div>
      <h1>Upload Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Input 1:</label>
        <input type="text" value={input1Data} onChange={handleInput1Change} />
        <label>Input 2:</label>
        <input type="text" value={input2Data} onChange={handleInput2Change} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadPage;
