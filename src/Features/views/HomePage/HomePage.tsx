import React from 'react';

import Portal from '../../../Components/Dumb/Portal';
import Button from '../../atoms/Button';
import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import HowItWorks from '../../moleculs/HowItWorks';
import WhyWe from '../../moleculs/WhyWe';
import HomeCards from '../../organisms/HomeCards';
import MainContent from '../../organisms/MainContent';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div
      className="page mainPage"
      style={{
        background: 'url(./full-bg-progressive.jpeg)',
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
        <section className={styles.howItWorksSection}>
          <HowItWorks />
        </section>
      </MainContent>
      <Footer />
    </div>
  );
};

export default HomePage;
