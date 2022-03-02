import React from 'react';
import { FormattedMessage } from 'react-intl';

import CopyRightSvg from '../../../Assets/Icons/CopyRightSvg';
import LocationSvg from '../../../Assets/Icons/LocationSvg';
import PhoneSvg from '../../../Assets/Icons/PhoneSvg';
import Logo from '../../../Assets/images/logo.svg';
import Typography from '../../atoms/Typography';
import { FOOTER_ICONS, FOOTER_MENU } from '../conastantsMolecul';
import { TFooterIcon } from '../typesMolecules';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={styles.footerSoccial}>
            <ul className={styles.footerSocialList}>
              {FOOTER_ICONS.map((currentIcon: TFooterIcon) => {
                const IconComponent = currentIcon.icon;
                return (
                  <li key={currentIcon.href}>
                    <span>
                      <IconComponent />
                    </span>
                  </li>
                );
              })}
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
            <FormattedMessage id="footer.copyright" />
          </p>
          <menu className={styles.footerMenu}>
            {FOOTER_MENU.map((currentMenuItem: Record<string, string>) => {
              return (
                <Typography
                  key={currentMenuItem.id}
                  id={currentMenuItem.id}
                  className={styles.footerMenuLink}
                  component={'span'}
                />
              );
            })}
          </menu>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
