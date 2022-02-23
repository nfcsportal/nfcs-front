import React from 'react';

import BinanceFutureSvg from '../../../Assets/Icons/cards/BinanceFutureSvg';
import CryptoSvg from '../../../Assets/Icons/cards/CryptoSvg';
import NftSvg from '../../../Assets/Icons/cards/NftSvg';
import StockSvg from '../../../Assets/Icons/cards/StockSvg';
import TooltipSvg from '../../../Assets/Icons/cards/TooltipSvg';
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
        <section className={styles.cardsSection}>
          <div className="container">
            <h2 className="title">You have the ability to customize your unique analytics</h2>
            <p className="subTitle">Text about discount- 50 %.</p>
            <div className={styles.cardItems}>
              <div className={styles.cardRow}>
                <div className={`${styles.cardsCol_25} col_25`}>
                  <div className={`${styles.cardItem} ${styles.cardItemBinance}`}>
                    <div className={styles.cardTooltip}>
                      <button type="button">
                        <TooltipSvg />
                      </button>
                    </div>
                    <div className={styles.cardIcon}>
                      <BinanceFutureSvg />
                    </div>
                    <h2 className={styles.cardTitle}>Binance Futures</h2>
                    <p className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className={styles.cardPrice}>
                      <s>1500 $</s>
                      <p>750$</p>
                    </div>
                    <button type="button" className={styles.cardButton}>
                      Buy Forecast
                    </button>
                  </div>
                </div>
                <div className={`${styles.cardsCol_25} col_25`}>
                  <div className={`${styles.cardItem} ${styles.cardItemNft}`}>
                    <div className={styles.cardTooltip}>
                      <button type="button">
                        <TooltipSvg />
                      </button>
                    </div>
                    <div className={styles.cardIcon}>
                      <NftSvg />
                    </div>
                    <h2 className={styles.cardTitle}>NFT</h2>
                    <p className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className={styles.cardPrice}>
                      <s>1200 $</s>
                      <p>600$</p>
                    </div>
                    <button type="button" className={styles.cardButton}>
                      Buy Forecast
                    </button>
                  </div>
                </div>
                <div className={`${styles.cardsCol_25} col_25`}>
                  <div className={`${styles.cardItem} ${styles.cardItemStock}`}>
                    <div className={styles.cardTooltip}>
                      <button type="button">
                        <TooltipSvg />
                      </button>
                    </div>
                    <div className={styles.cardIcon}>
                      <StockSvg />
                    </div>
                    <h2 className={styles.cardTitle}>Stock</h2>
                    <p className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className={styles.cardPrice}>
                      <s>800 $ </s>
                      <p>400$</p>
                    </div>
                    <button type="button" className={styles.cardButton}>
                      Buy Forecast
                    </button>
                  </div>
                </div>
                <div className={`${styles.cardsCol_25} col_25`}>
                  <div className={`${styles.cardItem} ${styles.cardItemCrypto}`}>
                    <div className={styles.cardTooltip}>
                      <button type="button">
                        <TooltipSvg />
                      </button>
                    </div>
                    <div className={styles.cardIcon}>
                      <CryptoSvg />
                    </div>
                    <h2 className={styles.cardTitle}>Crypto</h2>
                    <p className={styles.cardText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className={styles.cardPrice}>
                      <s>1500 $</s>
                      <p>750$</p>
                    </div>
                    <button type="button" className={styles.cardButton}>
                      Buy Forecast
                    </button>
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
