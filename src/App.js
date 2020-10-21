import React, { useEffect, useState } from 'react';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitle, [title]);
  return {
    onChangeTitle: setTitle
  }
}

const App = () => {
  const {onChangeTitle} = useTitle("Loading...");
  setTimeout(() => onChangeTitle("home"),3000);
  return (
    <div>
      
    </div>
  )
}


export default App;
