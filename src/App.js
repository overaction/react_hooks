import React, { Component, useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    setValue(e.target.value);
  }
  return {value, onChange};
}

function App() {
  const name = useInput("Mr.");
  return (
    <div className="app">
      <h1>Hello</h1>
      <input placeholder="Name" {...name}/>
    </div>
  )
}

export default App;
