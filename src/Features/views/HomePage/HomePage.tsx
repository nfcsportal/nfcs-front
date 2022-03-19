import React from 'react';
import useMediaQuery from 'react-use-media-query-hook';

import bgDesktop from '../../../Assets/images/bkgpng.png';
import bgMobile from '../../../Assets/images/fulll-bg-mobile-progressive.jpeg';
import Portal from '../../../Components/Dumb/Portal';
import { SCREENS } from '../../../Constants/ScreenResolutions';
import Button from '../../atoms/Button';
import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import HowItWorks from '../../moleculs/HowItWorks';
import WhyWe from '../../moleculs/WhyWe';
import HomeCards from '../../organisms/HomeCards';
import MainContent from '../../organisms/MainContent';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const isTablet = useMediaQuery(SCREENS.bigTablet);
  return (
    <div
      className="page mainPage"
      style={{
        backgroundImage: `${isTablet ? `url(${bgMobile})` : `url(${bgDesktop})`}`,
      }}
    >
      <Header />
      <MainContent>
        <Portal />
        <section className={styles.whyWeSection}>
          <WhyWe />
        </section>
        <section className={styles.cardsSection}>
          <HomeCards />
        </section>
        <section className={styles.discountSection}>
          <div className="container">
            <div className={styles.discountMain}>
              <div className={styles.discrountItem}>
                <h2 className={`${styles.discountTitle} title`}>
                  <span>50%</span> Discount!
                </h2>
                <p className={styles.discountText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lorem enim massa quis
                  vivamus sed enim, commodo. Suspendisse lectus lobortis augue tellus.{' '}
                </p>
                <Button
                  type="primary"
                  customClass={styles.discountBtn}
                  defaultMessage=" Buy Forecast"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="howItWorks" className={styles.howItWorksSection}>
          <HowItWorks />
        </section>
      </MainContent>
      <Footer />
    </div>
  );
};

export default HomePage;
