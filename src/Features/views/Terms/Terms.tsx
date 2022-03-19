import React from 'react';

import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import MainContent from '../../organisms/MainContent';
import styles from './terms.module.scss';

const Terms = () => {
  return (
    <div className={`${styles.privacyPage} privacy-page page`}>
      <Header />
      <MainContent>
        <section className={styles.privacySection}>
          <div className="container">
            <div className={styles.privacyItem}>
              <h2 className={`${styles.privacyTitle} title`}>Terms of Use</h2>
              <p className={styles.privacyText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci quod
                mollitia sed rerum odit quaerat recusandae quibusdam eaque, voluptatum consequuntur
                dolore nesciunt quo corporis laboriosam, voluptate fugiat pariatur soluta omnis
                aperiam repellat! Doloribus facilis repudiandae dignissimos animi eos quis
                cupiditate velit, accusamus facere ea quam delectus alias labore modi laboriosam,
                aliquam magnam. Beatae facere iusto pariatur fugit, minima ea magnam soluta sed.
                Nostrum dolores tempore ratione cumque? Earum alias vitae culpa veritatis odit vero
                iure amet neque velit repellat. Incidunt ex accusamus praesentium sapiente quidem
                iste, repudiandae alias nihil reiciendis quo sunt ipsum rerum delectus provident et
                aperiam ullam ad? Magni et vitae cum! Ut voluptatem laborum recusandae, voluptatibus
                porro voluptate aspernatur quos minima quibusdam qui ratione maxime neque?
              </p>
            </div>
          </div>
        </section>
      </MainContent>
      <Footer />
    </div>
  );
};

export default Terms;
