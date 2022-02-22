import React from 'react';

import ShieldLockSvg from '../../../Assets/Icons/why-we/ShieldLockSvg';
// import { useDispatch } from 'react-redux';
// import useMediaquerry from 'react-use-media-query-hook';
import ShieldQuality from '../../../Assets/Icons/why-we/ShieldQuality';
import ShieldReliability from '../../../Assets/Icons/why-we/ShieldReliability';
// import { SCREENS } from '../../../Constants/ScreenResolutions';
// import { setLocale } from '../../../Store/Slices/mainSlice';
// import Typography from '../../atoms/Typography';
import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import MainContent from '../../organisms/MainContent';
// import Portal from '../../organisms/Portal';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  // const dispatch = useDispatch();
  // const isMobile = useMediaquerry(SCREENS.mobile);
  return (
    <div className="page mainPage">
      <Header />
      <MainContent>
        <section className={styles.whyWeSection}>
          <div className="container">
            <h2 className="title">Why We?</h2>
            <p className="subTitle">
              In the world of innovations we are coordinating your knowledge and skills to discover
              yourself the right place for investing.
            </p>
            <div className={styles.whyWeItems}>
              <div className={styles.row}>
                <div className={`${styles.col_33} col_33`}>
                  <div className={styles.whyWeItem}>
                    <div className={`${styles.whyWeIcon} ${styles.whyWeIconQuality}`}>
                      <ShieldQuality />
                    </div>
                    <h2 className={styles.wheyWeTitle}>Quality</h2>

                    <p className={styles.wheyWeText}>
                      Our product is provided by the best analysts in the industry who ensure the
                      high level of quality.
                    </p>
                  </div>
                </div>
                <div className={`${styles.col_33} col_33`}>
                  <div className={styles.whyWeItem}>
                    <div className={`${styles.whyWeIcon} ${styles.whyWeIconQuality}`}>
                      <ShieldLockSvg />
                    </div>
                    <h2 className={styles.wheyWeTitle}>Confidence</h2>

                    <p className={styles.wheyWeText}>
                      NFCS team members guarantee the confidentiality of your account and, with the
                      necessary assistance, are ready to provide you with a 24/7 support service.
                    </p>
                  </div>
                </div>
                <div className={`${styles.col_33} col_33`}>
                  <div className={styles.whyWeItem}>
                    <div className={`${styles.whyWeIcon} ${styles.whyWeIconQuality}`}>
                      <ShieldReliability />
                    </div>
                    <h2 className={styles.wheyWeTitle}>Reliability</h2>

                    <p className={styles.wheyWeText}>
                      At NFCS, we don’t provide static forecasts. All forecasts that you purchase
                      are unique for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainContent>
      {/* <Portal /> */}

      {/* {!isMobile ? (
        // <Typography
        //   value="world"
        //   valueMessage="World"
        //   component={'span'}
        //   multyLangClasses={[styles.FRL_main, styles.DEL_main, styles.ENL_main]}
        //   className={styles.typo}
        //   id="hello"
        //   onClick={() => dispatch(setLocale('fr'))}
        // />
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
      )} */}
      <Footer />
    </div>
  );
};

export default HomePage;
