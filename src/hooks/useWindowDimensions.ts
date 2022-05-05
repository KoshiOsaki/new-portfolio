import { useState, useEffect } from 'react';

export const useWindowDimensions = () => {
  const getWindowDimensions = () => {
    if (typeof window !== 'undefined') {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    } else {
      return {
        width: 1000,
        height: 1000,
      };
    }
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return windowDimensions;
};
