/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';

export const useOutsideDetect = (
  setterFunction?: (argument: boolean) => void,
  disabled?: boolean
) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        !disabled &&
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        setterFunction
      ) {
        setterFunction(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [setterFunction, disabled]);

  return ref;
};
