import React from 'react';

import Typography from '../../atoms/Typography';
import WhyWeCard from '../../atoms/WhyWeCard';
import { WHY_WE } from '../conastantsMolecul';
import { TWhyWe } from '../typesMolecules';
import styles from './whywe.module.scss';

const WhyWe: React.FC = () => {
  return (
    <div className="container">
      <Typography id="home.whywe.whywe" className="title" component="h2" />
      <Typography id="home.whywe.text" className="subTitle" component="p" />
      <div className={styles.whyWeItems}>
        <div className={styles.row}>
          {WHY_WE.map((current: TWhyWe) => {
            return (
              <WhyWeCard
                key={current.title}
                icon={current.icon}
                title={current.title}
                info={current.info}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default WhyWe;
