import React, { useState } from 'react';

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
]

const useTabs = (array, index) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  return {
    currentContent: array[currentIndex],
    onchange: setCurrentIndex
  }
}


const App = () => {
  const {currentContent, onchange} = useTabs(content,0);
  return (
    <div>
      {content.map((item,index) => (
      <button onClick={() => {onchange(index)}} key={index}>item.content</button>
      ))}
      <div>
        {currentContent.content}
      </div>
    </div>
  )
}


export default App;
