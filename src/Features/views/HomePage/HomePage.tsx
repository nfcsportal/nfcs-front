import React from 'react';
import { useDispatch } from 'react-redux';

import { setLocale } from '../../../Store/Slices/mainSlice';
import Typography from '../../atoms/Typography';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.main}>
      <Typography
        value="world"
        valueMessage="MIRRRR"
        component={'span'}
        multyLangClasses={[styles.FRL_main, styles.DEL_main, styles.ENL_main]}
        className={styles.typo}
        id="hello"
        onClick={() => dispatch(setLocale('de'))}
      />
    </div>
  );
};

export default HomePage;
