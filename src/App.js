import React, { useEffect, useState, useRef } from 'react';

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === 'function') {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === 'function') {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? 'We are full' : 'we are small');
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFullS);
  return (
    <div>
      <div ref={element}>
        <img src={require('./2li.jpg')}></img>
        <button onClick={exitFull}>Exit Screen</button>
      </div>
      <button onClick={triggerFull}>Make fullScreen</button>
    </div>
  );
};

export default App;
