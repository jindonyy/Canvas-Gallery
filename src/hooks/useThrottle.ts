import { useRef } from 'react';

const useThrottle = (callback: (...args: any) => void, delay = 100) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...args: any) => {
    if (timer.current) return;

    callback(...args);
    timer.current = setTimeout(() => {
      timer.current = null;
    }, delay);
  };
};

export default useThrottle;
