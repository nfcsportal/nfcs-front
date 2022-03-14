import React from 'react';

import mainImage from '../../../Assets/images/main-image.svg';
import styles from './portal.module.scss';

const Portal: React.FC = () => {
  return (
    <>
      <div className={styles.portalHeader}>
        <h2 className="title">NFCS Portal</h2>
        <p className="subTitle">
          NFCS is a portal that will give you the opportunity to understand the world of{' '}
          <a href="#" className={styles.portalHeaderLink}>
            Cryptocurrencies, Futures, NFT and Stocks
          </a>{' '}
          and offer you the best way to invest your founds.
        </p>
      </div>
      <div className={styles.portal}>
        <div className={styles.wrapperPortal}>
          <div className={styles.portal1} />
          <div className={styles.portal2} />
          <div className={styles.portal3} />
          <div className={styles.portal4} />
          <img src={mainImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Portal;
