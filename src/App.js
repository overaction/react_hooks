import React, { Component, useState } from 'react';

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item+1);
  const decrementItem = () => setItem(item-1);
  return (
    <div className="app">
      <h1>Hello {item}</h1>
      <h2>start react hooks</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  )
}

class AppUgly extends React.Component {
  state = {
    item: 1
  }
  incrementItem = () => {
    this.setState(current => ({item: current.item + 1}));
  }
  decrementItem = () => {
    this.setState(current => ({item: current.item + -1}));
  }

  render() {
    const {item} = this.state;
    return (
      <div className="app">
        <h1>Hello {item}</h1>
        <h2>start react hooks</h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    )
  }
}

export default App;
