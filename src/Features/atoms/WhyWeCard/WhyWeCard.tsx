import React from 'react';

import { TWhyWe } from '../../moleculs/typesMolecules';
import Typography from '../Typography';
import styles from './whywecard.module.scss';

const WhyWeCard: React.FC<TWhyWe> = ({ icon, title, info }) => {
  const Component = icon;
  return (
    <div className={`${styles.col_33} col_33`}>
      <div className={styles.whyWeItem}>
        <div className={`${styles.whyWeIcon} ${styles.whyWeIconQuality}`}>
          <Component />
        </div>
        <Typography component="h2" className={styles.wheyWeTitle} id={title} />
        <Typography component="p" className={styles.wheyWeText} id={info} />
      </div>
    </div>
  );
};

export default WhyWeCard;
