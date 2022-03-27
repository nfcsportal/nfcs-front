import React from 'react';

import BuyForecastSvg from '../../../Assets/Icons/dashboard/BuyForecastSvg';
import CustomSettingsSvg from '../../../Assets/Icons/dashboard/CustomSettingsSvg';
import ForecastListSvg from '../../../Assets/Icons/dashboard/ForecastListSvg';
import MyPromoCodeSvg from '../../../Assets/Icons/dashboard/MyPromoCodeSvg';
import styles from './dashboardSideBar.module.scss';

const DashboardSideBar: React.FC = () => {
  return (
    <aside className={styles.aside}>
      <div className={styles.asideContent}>
        <ul className={styles.asideList}>
          <li className={styles.asideListItem}>
            <a href="" className={styles.asideListLink}>
              <BuyForecastSvg />
              Buy Forecast
            </a>
          </li>
          <li className={styles.asideListItem}>
            <a href="" className={styles.asideListLink}>
              <ForecastListSvg />
              Forecast List
              <span className={styles.radyCount}>2</span>
            </a>
          </li>
          <li className={styles.asideListDivider} />
          <li className={styles.asideListItem}>
            <a href="" className={styles.asideListLink}>
              <MyPromoCodeSvg />
              My PromoCode
            </a>
          </li>
          <li className={styles.asideListItem}>
            <a href="" className={`${styles.asideListLink} ${styles.active}`}>
              <CustomSettingsSvg />
              Custom Settings
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSideBar;
