import React from 'react';
import { useDispatch } from 'react-redux';
import useMediaquerry from 'react-use-media-query-hook';

import { SCREENS } from '../../../Constants/ScreenResolutions';
import { setLocale } from '../../../Store/Slices/mainSlice';
import Typography from '../../atoms/Typography';
import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import MainContent from '../../organisms/MainContent';
import Portal from '../../organisms/Portal';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaquerry(SCREENS.mobile);
  return (
    <div className="page mainPage">
      <Header />
      <MainContent>
        <div>STEX MAIN INCH DNES KGNA</div>
      </MainContent>
      <Portal />

      {!isMobile ? (
        <Typography
          value="world"
          valueMessage="World"
          component={'span'}
          multyLangClasses={[styles.FRL_main, styles.DEL_main, styles.ENL_main]}
          className={styles.typo}
          id="hello"
          onClick={() => dispatch(setLocale('fr'))}
        />
      ) : (
        <Typography
          value="world"
          valueMessage="Mobile World"
          component={'span'}
          multyLangClasses={[styles.FRL_main, styles.DEL_main, styles.ENL_main]}
          className={styles.typo}
          id="hello"
          onClick={() => dispatch(setLocale('fr'))}
        />
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
