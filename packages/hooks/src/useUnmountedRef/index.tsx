import { useEffect, useRef } from 'react';
import type { MutableRefObject } from 'react';

const useUnmountedRef = (): MutableRefObject<boolean> => {
  const unmountedRef = useRef(false);
  useEffect(() => {
    unmountedRef.current = false;
    return () => {
      unmountedRef.current = true;
    };
  }, []);
  return unmountedRef;
};

export default useUnmountedRef;
