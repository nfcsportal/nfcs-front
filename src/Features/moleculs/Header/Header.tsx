import { motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';

import ArrowSvg from '../../../Assets/Icons/ArrowSvg';
import Logo from '../../../Assets/images/logo.svg';
import { ROUTES } from '../../../Constants/Routes';
import { usePositions } from '../../../Hooks/usePositions';
import { getCurrentLocale } from '../../../Store/Selectors/main';
import { setLocale } from '../../../Store/Slices/mainSlice';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import { LANGUAGES, LOGO_ITEM, NAV_BAR } from '../conastantsMolecul';
import { TLanguages, TNavBar } from '../typesMolecules';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const currentLocalce = useSelector(getCurrentLocale);
  const [burger, setBurger] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentRef, scrollPosition } = usePositions();

  const changePage = useCallback(
    async (currentItem: TNavBar) => {
      const distanceToTop = burger ? 70 : 100;
      if (burger) {
        await setBurger(false);
      }
      if (location.pathname !== currentItem.path) {
        await history.push(currentItem.path);
      }

      if (currentItem.path === ROUTES.HOME) {
        if (currentItem.id) {
          const scrolledItem = document.getElementById(currentItem.id)?.offsetTop;
          if (scrolledItem) {
            window.scrollTo({
              top: scrolledItem - distanceToTop,
              behavior: 'smooth',
            });
          }
        } else {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
      }
    },
    [location, burger]
  );

  return (
    <header
      ref={currentRef}
      className={`${styles.header} ${scrollPosition > 0 && styles.scrolled}`}
    >
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.headerLogo} onClick={() => changePage(LOGO_ITEM)}>
            <img src={Logo} alt="Logo" />
          </div>
          <menu className={`${styles.headerMenu} ${burger && styles.active}`}>
            <ul className={styles.headerMenuList}>
              {NAV_BAR.map((currentItem: TNavBar) => {
                return (
                  <motion.li transition={{ type: 'spring', stiffness: 30 }} key={currentItem.path}>
                    <Typography
                      onClick={() => changePage(currentItem)}
                      component={'span'}
                      className={`${styles.headerMenuLink} ${
                        currentItem.className && styles[currentItem.className]
                      }`}
                      id={currentItem.id}
                    />
                  </motion.li>
                );
              })}
              <li>
                <Button
                  type="secondary"
                  id="navbar.signup"
                  className={`${styles.headerMenuLink} ${styles.signupBtn}`}
                  onClick={() => history.push(ROUTES.SIGN_UP)}
                />
              </li>
              <li>
                <span className={styles.headerMenuLink}>
                  {currentLocalce.toLocaleUpperCase()}
                  <span className={styles.iconWrapper}>
                    <ArrowSvg />
                  </span>
                </span>
                <ul className={styles.langSubList}>
                  {LANGUAGES.map((currentLang: TLanguages) => {
                    return (
                      <li key={currentLang.code}>
                        <Typography
                          onClick={() => dispatch(setLocale(currentLang.code))}
                          component={'span'}
                          className={`${styles.langSubListLink} ${
                            currentLocalce === currentLang.code && styles.selected
                          }`}
                          defaultMessage={currentLang.title}
                        />
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </menu>
          <div
            onClick={() => setBurger(!burger)}
            className={`${styles.headerBurger} ${burger && styles.active}`}
          >
            <div className={styles.burgerIcon} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
