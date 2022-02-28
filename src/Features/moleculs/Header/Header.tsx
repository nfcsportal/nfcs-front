import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ArrowSvg from '../../../Assets/Icons/ArrowSvg';
import LogoSvg from '../../../Assets/Icons/LogoSvg';
import { ROUTES } from '../../../Constants/Routes';
import { usePositions } from '../../../Hooks/usePositions';
import { getCurrentLocale } from '../../../Store/Selectors/main';
import { setLocale } from '../../../Store/Slices/mainSlice';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import { LANGUAGES, NAV_BAR } from '../conastantsMolecul';
import { TLanguages, TNavBar } from '../typesMolecules';
import styles from './header.module.scss';

const Header: React.FC = () => {
  const currentLocalce = useSelector(getCurrentLocale);
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentRef, scrollPosition } = usePositions();
  return (
    <header
      ref={currentRef}
      className={`${styles.header} ${scrollPosition > 0 && styles.scrolled}`}
    >
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.headerLogo} onClick={() => history.push(ROUTES.HOME)}>
            <LogoSvg />
          </div>
          <menu className={styles.headerMenu}>
            <ul className={styles.headerMenuList}>
              {NAV_BAR.map((currentItem: TNavBar) => {
                return (
                  <li key={currentItem.path}>
                    <Typography
                      onClick={() => history.push(currentItem.path)}
                      component={'span'}
                      className={`${styles.headerMenuLink} ${
                        currentItem.className && styles[currentItem.className]
                      }`}
                      id={currentItem.id}
                    />
                  </li>
                );
              })}
              <li>
                <Button
                  type="secondary"
                  id="navbar.signup"
                  className={styles.headerMenuLink}
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
