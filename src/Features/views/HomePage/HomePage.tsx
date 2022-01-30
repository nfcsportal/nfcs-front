import React from 'react';

import Typography from '../../atoms/Typography';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={styles.main}>
      <Typography
        value="world"
        valueMessage="MIRRRR"
        component={'span'}
        style={{ fontSize: '64px', background: 'violet' }}
        className={styles.typo}
        id="hello"
      />
    </div>
  );
};

export default HomePage;
