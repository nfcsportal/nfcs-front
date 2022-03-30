import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BuyForecastSvg from '../../../Assets/Icons/dashboard/BuyForecastSvg';
import CustomSettingsSvg from '../../../Assets/Icons/dashboard/CustomSettingsSvg';
import ForecastListSvg from '../../../Assets/Icons/dashboard/ForecastListSvg';
import MyPromoCodeSvg from '../../../Assets/Icons/dashboard/MyPromoCodeSvg';
import { DASHBOARD_SLIDES } from '../../../Constants/dashboard';
import { getDashboardCurrentSlide } from '../../../Store/Selectors/dashboardLocal';
import { setCurrentSlide } from '../../../Store/Slices/dashboardLocal';
import styles from './dashboardSideBar.module.scss';

const DashboardSideBar: React.FC = () => {
  const dispatch = useDispatch();
  const handleChangeSLide = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setCurrentSlide(e.currentTarget.dataset.current));
  };
  const currentSLide = useSelector(getDashboardCurrentSlide);

  return (
    <aside className={styles.aside}>
      <div className={styles.asideContent}>
        <ul className={styles.asideList}>
          <li className={styles.asideListItem}>
            <span
              onClick={handleChangeSLide}
              data-current={DASHBOARD_SLIDES.buyAnalytic}
              className={`${styles.asideListLink} ${
                currentSLide === DASHBOARD_SLIDES.buyAnalytic && styles.active
              }`}
            >
              <BuyForecastSvg />
              Buy Analytic
            </span>
          </li>
          <li className={styles.asideListItem}>
            <span
              onClick={handleChangeSLide}
              data-current={DASHBOARD_SLIDES.forecastList}
              className={`${styles.asideListLink} ${
                currentSLide === DASHBOARD_SLIDES.forecastList && styles.active
              }`}
            >
              <ForecastListSvg />
              Forecast List
              <span className={styles.radyCount}>2</span>
            </span>
          </li>
          <li className={styles.asideListDivider} />
          <li className={styles.asideListItem}>
            <span
              onClick={handleChangeSLide}
              data-current={DASHBOARD_SLIDES.myPromocode}
              className={`${styles.asideListLink} ${
                currentSLide === DASHBOARD_SLIDES.myPromocode && styles.active
              }`}
            >
              <MyPromoCodeSvg />
              My PromoCode
            </span>
          </li>
          <li className={styles.asideListItem}>
            <span
              onClick={handleChangeSLide}
              data-current={DASHBOARD_SLIDES.settings}
              className={`${styles.asideListLink} ${
                currentSLide === DASHBOARD_SLIDES.settings && styles.active
              }`}
            >
              <CustomSettingsSvg />
              Custom Settings
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSideBar;
