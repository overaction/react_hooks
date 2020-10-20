import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
      super(props);
      console.log('constructor');
    }
    state = {
      count: 0
    };
    add = () => {
      this.setState(current => ({count: current.count + 1}))
    };
    remove = () => {
      this.setState(current => ({count : current.count -1}));
    };
    componentDidMount() {
      console.log('component rendered');
    }
    componentDidUpdate() {
      console.log('i just updated');
    }
    componentWillUnmount() {
      console.log('goodbye');
    }
    render() {
      console.log('hello.. rendering');
      return (
        <div>
          <h1>hello.. {this.state.count}</h1>
          <button onClick={this.add}>add</button>
          <button onClick={this.remove}>minus</button>
        </div>
      )
    }
} 

export default App;
