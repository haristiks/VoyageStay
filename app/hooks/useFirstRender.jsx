import { useEffect,useRef } from 'react';

export function useFirstRender(callback) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      callback();
      hasRun.current = true;
    }
  }, []);
}