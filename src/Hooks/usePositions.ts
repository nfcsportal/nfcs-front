import { useEffect, useRef, useState } from 'react';

export const usePositions = () => {
  const currentRef = useRef<any>(null);
  const [elementPosition, setElementPosition] = useState<{ [key: string]: number }>({});
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    setElementPosition(currentRef.current.getBoundingClientRect());
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return { currentRef, elementPosition, scrollPosition };
};
