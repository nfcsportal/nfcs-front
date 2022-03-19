import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop: React.FC = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 20);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
