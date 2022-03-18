import { useState } from 'react';

type ImageStatus = 'beforeLoad' | 'loading' | 'error' | 'loaded';

const useImageStatus = (defaultValue: ImageStatus) => {
  const [status, setStatus] = useState<ImageStatus>(defaultValue);
  const isBeforeLoad = status === 'beforeLoad';
  const isLoading = status === 'loading';
  const isError = status === 'error';
  const isLoaded = status === 'loaded';

  return {
    status,
    isBeforeLoad,
    isLoading,
    isError,
    isLoaded,
    setStatus,
  };
};

export default useImageStatus;
