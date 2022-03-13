import React from 'react';

import Dropdown from '../../atoms/Dropdown';
import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import MainContent from '../../organisms/MainContent';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={`${styles.contactPage} page contact-page`}>
      <Header />
      <MainContent>
        <section className={styles.contactSection}>
          <div className="container">
            <div className={styles.contactRow}>
              <div className={`${styles.col_left} col_item`}>
                <div className={styles.contactInfo}>
                  <h1 className="title">Contact Us</h1>
                  <p className="subTitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aenean turpis et a
                    quis. In varius tristique ornare adipiscing mattis elit nisi enim. Et lorem
                    pellentesque volutpat elit id mauris est aenean ut. Diam tincidunt commodo
                    quisque mi.
                  </p>
                </div>
              </div>
              <div className={`${styles.col_right} col_item`}>
                <div className={styles.contactPageForm}>
                  <form action="">
                    <Dropdown label="dropdown.label" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainContent>
      <Footer />
    </div>
  );
};

export default Contact;
