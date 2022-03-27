import React from 'react';

import CopySvg from '../../../Assets/Icons/promocode/CopySvg';
import HandShakeSvg from '../../../Assets/Icons/promocode/HandShakeSvg';
import ReferralLinkSvg from '../../../Assets/Icons/promocode/ReferralLinkSvg';
import TotoalUpcomeSvg from '../../../Assets/Icons/promocode/TotoalUpcomeSvg';
import WaterFallSvg from '../../../Assets/Icons/promocode/WaterFallSvg';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import styles from './myPromocode.module.scss';

const MyPromocode: React.FC = () => {
  return (
    <section>
      <h2 className="title dashboard-title">My Promocode</h2>
      <div className="section_inner">
        <div className={styles.promocoSection}>
          <div className={styles.promocodeRow}>
            <div className={`${styles.promocodeCol} col_`}>
              <div className={styles.promocodeItem}>
                <div className={styles.UPTCount}>
                  <div className={styles.Logo}>
                    <WaterFallSvg />
                  </div>
                  <div className={styles.Content}>
                    <p className={styles.Count}>10 UPT</p>
                    <p className={styles.Text}>Total upcome UTP from shared users</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.promocodeCol} col_`}>
              <div className={styles.promocodeItem}>
                <div className={styles.UPTCount}>
                  <div className={styles.Logo}>
                    <TotoalUpcomeSvg />
                  </div>
                  <div className={styles.Content}>
                    <p className={styles.Count}>1345000 UPT</p>
                    <p className={styles.Text}>Total upcome UTP</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.promocodeCol} col_`}>
              <div className={`${styles.promocodeItem} ${styles.promocodeItemBig}`}>
                <ul className={styles.promocodeLeftList}>
                  <li>
                    <div className={styles.reffrealLinkInfoLogo}>
                      <ReferralLinkSvg />
                    </div>
                    <div className={styles.reffrealLinkInfo}>
                      <p className={styles.refferalLink}>0x85E74fA...A8K94E1Ed6468Ce</p>
                      <p className={styles.refferealLinkText}>Your Referral Link</p>
                    </div>
                    <div className={styles.linkCopy}>
                      <button type="button">
                        <CopySvg />
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className={styles.reffrealLinkInfoLogo}>
                      <HandShakeSvg />
                    </div>
                    <div className={styles.reffrealLinkInfo}>
                      <p className={styles.refferalLink}>0x85E74fA...A8K94E1Ed6468Ce</p>
                      <p className={styles.refferealLinkText}>Your Sponser Address</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.promocodeCol} col_`}>
              <div className={`${styles.promocodeItem} ${styles.promocodeItemBig}`}>
                <div className={styles.promocodeForm}>
                  <Input
                    htmlFor="name"
                    type="text"
                    name="name"
                    placeHolder="contactus.name"
                    label="contactus.name"
                    onClick={() => null}
                    onFocus={() => null}
                    onChange={() => null}
                    value={'formik.values.name'}
                  />
                  <Button type="primary" customClass={styles.promocodeBtn} id="Change" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPromocode;
