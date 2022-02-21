import React from 'react';

import styles from './portalCircle.module.scss';

interface IPortalCircleProps {
  Icon: React.FC;
  title: string;
}

const PortalCircle: React.FC<IPortalCircleProps> = ({ Icon, title }) => {
  return (
    <div className={styles.blinkerWrapper}>
      <div className={styles.main}>
        <span className={styles.blinker2}></span>
        <span className={styles.blinker1}></span>
        <div>
          <div className={styles.icon}>
            <Icon />
          </div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default PortalCircle;
