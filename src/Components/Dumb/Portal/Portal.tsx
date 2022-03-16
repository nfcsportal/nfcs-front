import React from 'react';
import { useHistory } from 'react-router-dom';

import mainImage from '../../../Assets/images/main-image.svg';
import { DESCRIPTIONS, TDescriptions } from '../../../Constants/descriptions';
import { ROUTES } from '../../../Constants/Routes';
import styles from './portal.module.scss';

const Portal: React.FC = () => {
  const history = useHistory();
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
          {DESCRIPTIONS.map((current: TDescriptions, index: number) => {
            return (
              <div
                onClick={() => history.push(`${ROUTES.DESCRIPTION}/${current.current}`)}
                key={current.current}
                className={styles[`portal${index + 1}`]}
              />
            );
          })}

          <img src={mainImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Portal;
