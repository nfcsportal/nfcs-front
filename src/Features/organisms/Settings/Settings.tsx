import React from 'react';

import Dropdown from '../../atoms/Dropdown';
import Input from '../../atoms/Input';
import styles from './settings.module.scss';

const INQUIRY_OPTIONS = [
  {
    id: 'contactus.dropdown.generalInquiry',
    value: 'General Inquiry',
  },
  {
    id: 'contactus.dropdown.salesInquiry',
    value: 'Sales Inquiry',
  },
  {
    id: 'contactus.dropdown.techIssue',
    value: 'Technical Issue',
  },
];
const Settings: React.FC = () => {
  return (
    <section>
      <h2 className="title dashboard-title">Settings</h2>
      <div className="section_inner">
        <div className={styles.settingsSection}>
          <div className={styles.settingsCollapseItem}>
            <div className={styles.settingsCollapseRow}>
              <div className={styles.settingsCollapseCol}>
                <div className={`${styles.settinsCollapseItem} ${styles.active}`}>
                  <div className={styles.settinsCollapseItemHeader}>
                    <h3 className={styles.settinsCollapseTitle}>Default language</h3>
                    <div className={styles.settinsCollapsetext}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante eget turpis
                        etiam nunc vitae congue.
                      </p>
                    </div>
                    <div className={styles.laanguageName}>English</div>
                    <div className={styles.collpaseBtnContainer}>
                      <button type="button">Change</button>
                    </div>
                  </div>
                  <div className={styles.collapseContent} style={{ height: '120px' }}>
                    dropdown
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
                    <Dropdown
                      name="inquiry"
                      label="contactus.dropdown.label"
                      options={INQUIRY_OPTIONS}
                      value={'formik.values.inquiry'}
                      defaultValue="contactus.dropdown.generalInquiry"
                      onClick={() => null}
                      onChange={() => null}
                    />
                    <div className={styles.buttons}>
                      <div className={`${styles.buttonOne} col_`}>button 1</div>
                      <div className={`${styles.buttonTwo} col_`}>button 2</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.settingsCollapseCol}>
                <div className={styles.settinsCollapseItem}>
                  <div className={styles.settinsCollapseItemHeader}>
                    <h3 className={styles.settinsCollapseTitle}>Name</h3>
                    <div className={styles.settinsCollapsetext}>
                      <p>Angela Merkel</p>
                    </div>
                    <div className={styles.collpaseBtnContainer}>
                      <button type="button">Change</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.settingsCollapseCol}>
                <div className={styles.settinsCollapseItem}>
                  <div className={styles.settinsCollapseItemHeader}>
                    <h3 className={styles.settinsCollapseTitle}>Login</h3>
                    <div className={styles.settinsCollapsetext}>
                      <p>angelamerkel@hitler.com</p>
                    </div>
                    <div className={styles.collpaseBtnContainer}>
                      <button type="button">Change</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.settingsCollapseCol}>
                <div className={styles.settinsCollapseItem}>
                  <div className={styles.settinsCollapseItemHeader}>
                    <h3 className={styles.settinsCollapseTitle}>Password</h3>
                    <div className={styles.settinsCollapsetext}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ante eget turpis
                        etiam nunc vitae congue.{' '}
                      </p>
                    </div>
                    <div className={styles.collpaseBtnContainer}>
                      <button type="button">Change</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
