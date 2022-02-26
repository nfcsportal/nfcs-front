import React from 'react';

import { THowItWorks } from '../../moleculs/typesMolecules';
import Typography from '../Typography';
import styles from './howItWorksCard.module.scss';

const HowItWorksCard: React.FC<THowItWorks> = ({ icon, info }) => {
  const Component = icon;
  return (
    <div className={styles.howWorksItem}>
      <div className={styles.howWorksIcon}>
        <Component />
      </div>
      <div className={styles.howWorkstext}>
        <Typography component="p" id={info} />
      </div>
    </div>
  );
};

export default HowItWorksCard;
