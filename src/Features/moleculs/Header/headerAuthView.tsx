import React, { useState } from 'react';
import useMediaQuery from 'react-use-media-query-hook';

import ArrowSvg from '../../../Assets/Icons/ArrowSvg';
import HeaderCoinSvg from '../../../Assets/Icons/HeaderCoinSvg';
import UserIconSvg from '../../../Assets/Icons/UserIconSvg';
import { SCREENS } from '../../../Constants/ScreenResolutions';
import styles from './header.module.scss';

export const HeaderAuthView: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const isMobile = useMediaQuery(SCREENS.smallTablet);
  return (
    <ul className={styles.headerAuthComponent}>
      <li className={styles.userItem} role="menuitem" onClick={handleOpen}>
        <div className={styles.userInfoShort}>
          <span className={styles.userImageIcon}>
            <UserIconSvg />
          </span>
          <span className={styles.nameShort}>ANGELA MERKEL</span>
          <span
            className={`${styles.userDropdownIcon} ${open ? styles.userDropdownIconRotated : ''}`}
          >
            <ArrowSvg />
          </span>
        </div>
        <ul className={`${styles.userSubList} ${open ? styles.userSubListOpen : ''}`}>
          {isMobile && (
            <li className={styles.cointListItem}>
              <div className={styles.cointItem}>
                <span className={styles.cointIcon}>
                  <HeaderCoinSvg />
                </span>
                1345000
              </div>
            </li>
          )}
          <li>
            <span className={styles.userSubLink}>Order Forecast</span>
          </li>
          <li>
            <span className={styles.userSubLink}>Forecast List</span>
          </li>
          <li>
            <span className={styles.userSubLink}>UTP & Promocode</span>
          </li>
          <li>
            <span className={styles.userSubLink}>Custom Settings</span>
          </li>
          <li>
            <span className={styles.userSubLink}>Log Out</span>
          </li>
        </ul>
      </li>
    </ul>
  );
};
