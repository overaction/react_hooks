import defaultAxios1 from "axios";
import { useEffect, useState } from 'react';

const useAxios = (opts, axiosInstance = defaultAxios1) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
      setState({
          loading: true
      });
      setTrigger(Date.now());
  }

  useEffect(() => {
    if (!opts.url) {
      return;
    }
    axiosInstance(opts)
    .then((resp) => {
        console.log(resp);
        setState({
            ...state,
            loading: false,
            data: resp.data
        })
    })
    .catch(error => {
        setState({...state, loading: false, error: error})
    })
  }, [trigger]);

  return {...state, refetch, trigger};
};

export default useAxios;
