import React, { useEffect, useState, useRef } from 'react';

const useConfirm = (message = "", callback, rejection) => {
  if(typeof(callback) !== "function") {
    return;
  }
  const confirmAction = () => {
    if(window.confirm(message)) {
      callback();
    }
    else {
      rejection();
    }
  }
  return confirmAction;
}

const App = () => {
  const deleteWorld = () => console.log("Deleting the World...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you Sure", deleteWorld, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete the World</button>
    </div>
  )
}


export default App;
