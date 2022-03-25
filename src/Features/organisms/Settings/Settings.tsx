import React from 'react';

import styles from './settings.module.scss';

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
                  <div className={styles.collapseContent}>
                    dropdown
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
