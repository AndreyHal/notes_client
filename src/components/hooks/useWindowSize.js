import React, {useState, useLayoutEffect} from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState({width: 0, height: 0});

  const updateSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setSize({width, height});
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export {useWindowSize};