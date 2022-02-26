import React from 'react';

import HowItWorksCard from '../../atoms/HowItWorksCard';
import Typography from '../../atoms/Typography';
import { HOW_IT_WORKS } from '../conastantsMolecul';
import { THowItWorks } from '../typesMolecules';
import styles from './howItWorks.module.scss';

const HowItWorks: React.FC = () => {
  return (
    <div className="container">
      <Typography className="title" component="h2" id="home.howitworks.howitworks" />
      <Typography className="subTitle" component="p" id="home.howitworks.subtitle" />
      <div className={styles.howWorksItems}>
        <div className={styles.howRow}>
          {HOW_IT_WORKS.map((current: THowItWorks) => {
            return (
              <div key={current.info} className={`${styles.col_25} col_25`}>
                <HowItWorksCard icon={current.icon} info={current.info} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
