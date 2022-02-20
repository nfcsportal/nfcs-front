import React from 'react';

import ArrowSvg from '../../../Assets/Icons/ArrowSvg';
import LogoSvg from '../../../Assets/Icons/LogoSvg';
import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.headerLogo}>
            <a href="#">
              <LogoSvg />
            </a>
          </div>
          <menu className={styles.headerMenu}>
            <ul className={styles.headerMenuList}>
              <li>
                <a className={styles.headerMenuLink} href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className={styles.headerMenuLink} href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className={styles.headerMenuLink} href="#">
                  How it workes
                </a>
              </li>
              <li>
                <a className={`${styles.headerMenuLink} ${styles.headerSignIn}`} href="#">
                  Sign In
                </a>
              </li>
              <li>
                <a className={`${styles.headerMenuLink} ${styles.headerSignUp}`} href="#">
                  Sign Up
                </a>
              </li>
              <li>
                <a className={styles.headerMenuLink} href="#">
                  EN{' '}
                  <span>
                    <ArrowSvg />
                  </span>
                </a>
                <ul className={styles.langSubList}>
                  <li>
                    <a href="">fr</a>
                  </li>
                  <li>
                    <a href="">ger</a>
                  </li>
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
