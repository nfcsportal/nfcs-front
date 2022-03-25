import React from 'react';
import useMediaQuery from 'react-use-media-query-hook';

import bgDesktop from '../../../Assets/images/full-bg.png';
import bgMobile from '../../../Assets/images/fulll-bg-mobile.png';
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
        <section className={styles.uptSection}>
          <div className="container">
            <div className={styles.uptContainer}>
              <div className={styles.uptSectionHeader}>
                <h2 className={`${styles.uptTitle} title`}>
                  What is <span>UPT</span> & How to Get?
                </h2>
                <p className={styles.uptSubtext}>
                  In the world of innovations we are coordinating your knowledge and skills to
                  discover yourself the right place for investing.In the world of innovations we are
                  coordinating your knowledge and skills to discover yourself the right place for
                  investing.
                </p>
              </div>
              <div className={styles.uptSectionBody}>
                <div className={styles.uptSectionRow}>
                  <div className={`${styles.uptSectionRowCol} col_`}>
                    <div className={styles.uptSectionItem}>
                      <h3 className={styles.uptSectionTitle}>
                        Get <span>10 UPT</span>
                      </h3>
                      <p className={styles.uptSectionText}>
                        When you shared user registered and activated account.
                      </p>
                    </div>
                  </div>
                  <div className={`${styles.uptSectionRowCol} col_`}>
                    <div className={styles.uptSectionItem}>
                      <h3 className={styles.uptSectionTitle}>
                        Get <span>25 UPT</span>
                      </h3>
                      <p className={styles.uptSectionText}>When you shared user buy analytics.</p>
                    </div>
                  </div>
                  <div className={`${styles.uptSectionRowCol} col_`}>
                    <div className={styles.uptSectionItem}>
                      <h3 className={styles.uptSectionTitle}>
                        Get <span>30 UPT</span>
                      </h3>
                      <p className={styles.uptSectionText}>
                        When you buy analytics with <span>Promocode</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainContent>
      <Footer />
    </div>
  );
};

export default HomePage;
