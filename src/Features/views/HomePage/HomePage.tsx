import React from 'react';

import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import HowItWorks from '../../moleculs/HowItWorks';
import WhyWe from '../../moleculs/WhyWe';
import HomeCards from '../../organisms/HomeCards';
import MainContent from '../../organisms/MainContent';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className="page mainPage">
      <Header />
      <MainContent>
        <section className={styles.whyWeSection}>
          <WhyWe />
        </section>
        <section className={styles.cardsSection}>
          <HomeCards />
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
