import React from 'react';

import NftSvg from '../../../Assets/Icons/forecast/NftSvg';
import TimeSvg from '../../../Assets/Icons/forecast/TimeSvg';
import styles from './buyAnalytic.module.scss';

const BuyAnalytic: React.FC = () => {
  return (
    <section className={styles.buyForecastSection}>
      <h2 className="title dashboard-title">Forecast List</h2>
      <div className="section_inner">
        <div className={styles.forecastSection}>
          <div className={styles.forecastHeader}>
            <ul className={styles.forecasstChangers}>
              <li className="col_">
                <button type="button">Wait List</button>
              </li>
              <li className="col_">
                <button type="button" className={styles.active}>
                  Ready Forecasts
                  <div className={styles.readyCount}>2</div>
                </button>
              </li>
              <li className="col_">
                <button type="button">Your Forecasts</button>
              </li>
            </ul>
          </div>
          <div className={styles.forecastBody}>
            <p className={styles.waittimeInfo}>
              Max Wait Time: <span>3 Hours</span>
            </p>
            <div className={styles.foreacstBodyItem}>
              <div className={styles.forecastBodyItemContent}>
                <div className={styles.bodyItem}>
                  <div className={styles.bodyRow}>
                    <div className={`${styles.customCol} ${styles.customColSmall}`}>
                      <div className={styles.bodyItemLeft}>
                        <div className={`${styles.leftItem} ${styles.leftItemTime}`}>
                          <p>
                            <TimeSvg />
                            Order<span> 06.Jan.2022</span>
                          </p>
                        </div>
                        <div className={`${styles.leftItem} ${styles.leftItemLogo}`}>
                          <p>
                            <NftSvg />
                            <span>Lorem Ipsum</span>
                            <p>
                              <small>Open Sea</small>
                            </p>
                          </p>
                        </div>
                        <div className={`${styles.leftItem} ${styles.leftItemBtns}`}>
                          <a href="" className={styles.links}>
                            Details
                          </a>
                          <a href="" className={styles.links}>
                            Cancel
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.customCol} ${styles.customColBig}`}>
                      <div className={styles.bodyItemRight}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.foreacstBodyItem}>
              <div className={styles.forecastBodyItemContent}>
                <div className={styles.bodyItem}>
                  <div className={styles.bodyRow}>
                    <div className={`${styles.customCol} ${styles.customColSmall}`}>
                      <div className={styles.bodyItemLeft}>
                        <div className={`${styles.leftItem} ${styles.leftItemTime}`}>
                          <p>
                            <TimeSvg />
                            Order <span> 06.Jan.2022</span>
                          </p>
                        </div>
                        <div className={`${styles.leftItem} ${styles.leftItemLogo}`}>
                          <p>
                            <NftSvg />
                            <span>Lorem Ipsum</span>
                            <p>
                              <small>Open Sea</small>
                            </p>
                          </p>
                        </div>
                        <div className={`${styles.leftItem} ${styles.leftItemBtns}`}>
                          <a href="" className={styles.links}>
                            Details
                          </a>
                          <a href="" className={styles.links}>
                            Cancel
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className={`${styles.customCol} ${styles.customColBig}`}>
                      <div className={styles.bodyItemRight}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyAnalytic;
