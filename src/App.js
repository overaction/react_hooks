import React, { useEffect, useState, useRef } from 'react';

const useBeforeLeave = (onBefore) => {
  const handle = (e) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore === 'function') {
      document.addEventListener('mouseleave', handle);
      return () => document.removeEventListener('mouseleave', handle);
    }
  }, []);
};

const App = () => {
  const begForLite = () => console.log("plz don't leave");
  useBeforeLeave(begForLite);
  return <div></div>;
};

export default App;
