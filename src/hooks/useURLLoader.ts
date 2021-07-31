import axios from 'axios';

import { useState, useEffect } from 'react';

const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios.get(url)
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return [data, loading];
};

export default useURLLoader;