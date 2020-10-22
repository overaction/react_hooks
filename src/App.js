import React, { useEffect, useState, useRef } from 'react';

const usePreventLeave = () => {
  const listener = (e) => {
    e.preventDefault();
    e.returnValue = "";
  }
  const enablePrevent = () => window.addEventListener('beforeunload',listener);
  const disablePrevent = () => window.removeEventListener('beforeunload',listener);
  return {
    protect: enablePrevent,
    unprotect: disablePrevent
  }
}

const App = () => {
  const {protect, unprotect} = usePreventLeave();
  return (
    <div>
      <button onClick={protect}>protect</button>
      <button onClick={unprotect}>unProtect</button>
    </div>
  )
}


export default App;
