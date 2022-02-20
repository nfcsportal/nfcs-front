import React from 'react';

import CopyRightSvg from '../../../Assets/Icons/CopyRightSvg';
import EnvelopeSvg from '../../../Assets/Icons/EnvelopeSvg';
import LocationSvg from '../../../Assets/Icons/LocationSvg';
import LogoSvg from '../../../Assets/Icons/LogoSvg';
import PhoneSvg from '../../../Assets/Icons/PhoneSvg';
import TelegramSvg from '../../../Assets/Icons/TelegramSvg';
import WhatsAppSvg from '../../../Assets/Icons/WhatsAppSvg';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <LogoSvg />
          </div>
          <div className={styles.footerSoccial}>
            <ul className={styles.footerSocialList}>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer nofollow">
                  <TelegramSvg />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer nofollow">
                  <WhatsAppSvg />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer nofollow">
                  <EnvelopeSvg />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerContact}>
            <p className={styles.contactItem}>
              <span>
                <LocationSvg />
              </span>
              Yerevan, Buzand 34/2
            </p>
            <a href="tel:+37455846474" className={styles.contactItem}>
              <span>
                <PhoneSvg />
              </span>
              +374 55 846474
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyRight}>
            <span>
              <CopyRightSvg />
            </span>
            Copyright
          </p>
          <menu className={styles.footerMenu}>
            <a href="#" className={styles.footerMenuLink}>
              Privacy Policy
            </a>
            <a href="#" className={styles.footerMenuLink}>
              Some Info
            </a>
            <a href="#" className={styles.footerMenuLink}>
              Support
            </a>
          </menu>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
