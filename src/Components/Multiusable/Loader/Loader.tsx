import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

import styles from './loader.module.scss';

interface ILoaderProps {
  type: 'auth';
}

const Loader: React.FC<ILoaderProps> = ({ type }) => {
  return (
    <div id="loader" className={styles[`${type}`]}>
      <ThreeCircles color="#1875FC" height={110} width={110} ariaLabel="three-circles-rotating" />
    </div>
  );
};

export default Loader;
