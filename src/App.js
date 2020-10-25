import React, { useEffect, useState, useRef } from 'react';
import useAxios from './useAxios';

const App = () => {
  const {loading, data, error, refetch, trigger} = useAxios({
    url: "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"
  });

  console.log(`Loading: ${loading} \n Error: ${error} \n Data: ${JSON.stringify(data)}`)
  console.log(trigger);
  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default App;
