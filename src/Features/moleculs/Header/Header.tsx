import { motion } from 'framer-motion';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ArrowSvg from '../../../Assets/Icons/ArrowSvg';
import Logo from '../../../Assets/images/logo.svg';
import { ROUTES } from '../../../Constants/Routes';
import { usePositions } from '../../../Hooks/usePositions';
import { getCurrentLocale } from '../../../Store/Selectors/main';
import { setLocale } from '../../../Store/Slices/mainSlice';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import { LANGUAGES, NAV_BAR } from '../conastantsMolecul';
import { TLanguages, TNavBar } from '../typesMolecules';
import styles from './header.module.scss';
import { HeaderAuthView } from './headerAuthView';

const Header: React.FC = () => {
  const currentLocalce = useSelector(getCurrentLocale);
  const [burger, setBurger] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = false;
  const { currentRef, scrollPosition } = usePositions();
  const currNavBarItems = useMemo(() => {
    return NAV_BAR.filter((curr) => {
      if (isAuth) {
        return curr.path !== ROUTES.SIGN_IN;
      } else {
        return curr.path !== ROUTES.DASHBOARD;
      }
    });
  }, [isAuth]);
  return (
    <header
      ref={currentRef}
      className={`${styles.header} ${scrollPosition > 0 && styles.scrolled}`}
    >
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.headerLogo} onClick={() => history.push(ROUTES.HOME)}>
            <img src={Logo} alt="Logo" />
          </div>
          <menu className={`${styles.headerMenu} ${burger && styles.active}`}>
            <ul className={styles.headerMenuList}>
              {currNavBarItems.map((currentItem: TNavBar) => {
                return (
                  <motion.li transition={{ type: 'spring', stiffness: 30 }} key={currentItem.path}>
                    <Typography
                      onClick={() => history.push(currentItem.path)}
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
                <HeaderAuthView />
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
