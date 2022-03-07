import React from 'react';

import styles from './portal.module.scss';

const Portal: React.FC = () => {
  return (
    <div className={styles.portal}>
      <div className={styles.wrapperPortal}>
        <div className={styles.portal1} />
        <div className={styles.portal2} />
        <div className={styles.portal3} />
        <div className={styles.portal4} />
        <img src={'portal'} alt="portal" />
      </div>
    </div>
  );
};

export default Portal;
