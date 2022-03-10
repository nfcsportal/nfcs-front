import { useEffect, useState } from 'react';

const ROOT_MODAL_CLASSS = 'ReactModalPortal';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const root = document.getElementById('root');

  useEffect(() => {
    if (root && isOpen) {
      root.style.overflow = 'hidden';
    }
  }, [isOpen, root]);

  useEffect(() => {
    document.onclick = () => {
      const nextElement = root?.nextElementSibling;
      if (ROOT_MODAL_CLASSS === nextElement?.className) {
        setIsOpen(false);
        if (root) {
          root.style.overflow = 'auto';
        }
      }
    };
  }, [document]);

  return {
    isOpen,
    setIsOpen,
  };
};
