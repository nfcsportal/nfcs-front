import React from 'react';

import EnvelopeSvg from '../../../Assets/Icons/EnvelopeSvg';
import LocationSvg from '../../../Assets/Icons/LocationSvg';
import PhoneSvg from '../../../Assets/Icons/PhoneSvg';
import TelegramSvg from '../../../Assets/Icons/TelegramSvg';
import WhatsAppSvg from '../../../Assets/Icons/WhatsAppSvg';
import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import MainContent from '../../organisms/MainContent';
import styles from './AboutUs.module.scss';

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-page page">
      <Header />
      <MainContent>
        <section className={styles.aboutUsSection}>
          <div className="container">
            <div className={styles.aboutUsRow}>
              <div className={`${styles.col_left} col_50`}>
                <div className={styles.aboutUsInfo}>
                  <h1 className="title">About Us</h1>
                  <p className="subTitle">
                    Our culture reflects our philosophy of respect, simplify, and solve. Success is
                    a result of our talented and dedicated team who live and exemplify our
                    philosophy. The NFCS team expects great things of each other, treat each other
                    well, and are committed to creating the best analytic in the world.
                  </p>
                  <div className={styles.aboutUsContactContainer}>
                    <div className={styles.aboutUsContact}>
                      <p className={styles.contactItem}>
                        <span>
                          <LocationSvg />
                        </span>
                        Yerevan, Buzand 34/2
                      </p>
                      <a href="tel:+37455846474" className={styles.contactItem}>
                        <span>
                          <PhoneSvg />
                        </span>
                        +374 55 846474
                      </a>
                    </div>
                    <ul className={styles.aboutSocialList}>
                      <li>
                        <span>
                          <TelegramSvg />
                        </span>
                      </li>
                      <li>
                        <span>
                          <WhatsAppSvg />
                        </span>
                      </li>
                      <li>
                        <span>
                          <EnvelopeSvg />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={`${styles.col_right} col_50`}>
                <div className={styles.timelineContainer}>
                  <ul>
                    <li>
                      <div className={styles.timelineContent}>
                        <h3 className={styles.timelineTitle}>V1 VAULTS:</h3>
                        <p className={styles.timelineText}>
                          More global scope analytics for Futures,Bond analytics Fund analytics.
                        </p>
                      </div>
                      <div className={styles.timelineDate}>
                        <p>Janruary 12</p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.timelineContent}>
                        <h3 className={styles.timelineTitle}>V1 VAULTS:</h3>
                        <p className={styles.timelineText}>
                          More global scope analytics for Futures,Bond analytics Fund analytics.
                        </p>
                      </div>
                      <div className={styles.timelineDate}>
                        <p>Janruary 12</p>
                      </div>
                    </li>
                    <li>
                      <div className={styles.timelineContent}>
                        <h3 className={styles.timelineTitle}>V1 VAULTS:</h3>
                        <p className={styles.timelineText}>
                          More global scope analytics for Futures,Bond analytics Fund analytics.
                        </p>
                      </div>
                      <div className={styles.timelineDate}>
                        <p>Janruary 12</p>
                      </div>
                    </li>
                    <div className={styles.bothClenar} />
                  </ul>
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

export default AboutUs;
