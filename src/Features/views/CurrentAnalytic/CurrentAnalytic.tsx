import React from 'react';
import useMediaQuery from 'react-use-media-query-hook';

import CryptoBigSvg from '../../../Assets/Icons/CryptoBigSvg';
import LongArrow from '../../../Assets/Icons/LongArrow';
import WebLongArrow from '../../../Assets/Icons/WebLongArrow';
import { SCREENS } from '../../../Constants/ScreenResolutions';
import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import MainContent from '../../organisms/MainContent';
import styles from './currentAnalytic.module.scss';

const CurrentAnalytic: React.FC = () => {
  const isTablet = useMediaQuery(SCREENS.bigTablet);
  return (
    <div className={`${styles.analyticPage} current-analytic-page page`}>
      <Header />
      <MainContent>
        <section className={styles.analyticSeciton}>
          <div className="container">
            <>
              <div className={styles.goBackItem}>
                {isTablet ? <LongArrow /> : <WebLongArrow />}

                <p>Back</p>
              </div>
            </>
            <div className={`${styles.analyticRow} row`}>
              <div className={`${styles.analyticLeftCol} col_left`}>
                <div className={styles.analyticLeftColContent}>
                  <CryptoBigSvg />
                </div>
              </div>
              <div className={`${styles.analyticRightCol} col_right`}>
                <div className={styles.rightInner}>
                  <div className={styles.rightItem}>
                    <h3 className={`${styles.itemTitle} title`}>Lorem Ipsum</h3>
                    <p className={styles.itemText}>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam ab mollitia
                      eaque distinctio ex repellat, voluptate sit ullam facilis nihil ipsum vitae
                      perspiciatis totam numquam incidunt hic qui esse necessitatibus, dolorem minus
                      modi quaerat dicta consectetur quos. Animi quibusdam dolore, nam excepturi
                      deserunt obcaecati quidem doloremque adipisci rem amet blanditiis unde
                      voluptatibus, quasi maiores sed. Maiores, sit nostrum cupiditate quasi
                      eligendi eveniet iste consectetur adipisci similique aliquam, voluptas soluta.
                      Optio laborum sed fugit. Illum recusandae consequuntur enim consectetur
                      corrupti corporis ratione quidem fuga perspiciatis ducimus laboriosam soluta
                      veritatis omnis officiis dolore id, voluptate modi tempore, accusantium
                      dolorum. Officiis libero id alias, quasi hic vitae totam fuga ut. Vel rem
                      exercitationem officiis tempore nihil ullam repudiandae, cupiditate quae amet
                      molestias maxime iure facere hic esse eligendi alias a sapiente, veritatis
                      dolorem libero, beatae corrupti in. Doloribus velit inventore a, quam
                      voluptate nihil laboriosam at voluptatibus modi doloremque asperiores itaque
                      rem ratione nemo, ducimus vitae dolorum debitis recusandae minus labore
                      voluptates. Iure, facilis blanditiis? Reiciendis aut quos nihil recusandae
                      quas iure aliquam fugiat molestias dolorum delectus quidem saepe nobis amet
                      praesentium animi dolores, sint itaque. Quam pariatur officiis aliquam
                      dolores, beatae similique veniam, quis reprehenderit molestias ratione vel
                      rerum corporis excepturi saepe non sint provident. Quod ab officiis ullam,
                      harum, unde debitis, dolorem quia rerum voluptas veniam excepturi nihil quam?
                      Hic esse accusantium nisi error, minus assumenda magnam ipsum. Aliquam natus
                      blanditiis, iusto dolor odit quidem omnis unde praesentium quam sint labore
                      dolore, minus error mollitia cum! Rem eius voluptatem fugiat error excepturi
                      quibusdam, aut, laborum, aspernatur culpa suscipit expedita molestias debitis.
                      Optio, reprehenderit! Nesciunt sapiente magnam accusantium omnis sequi
                      laudantium quidem ad deserunt praesentium ex nemo beatae, iure odit sunt quos
                      molestiae quia debitis adipisci nulla laborum! Officia dicta nam aliquid
                      facere. Exercitationem veniam, quidem suscipit sapiente soluta doloremque
                      nihil libero! Sequi rem earum ullam obcaecati a natus dolores repudiandae fuga
                      animi, culpa reiciendis saepe excepturi consequuntur eaque veritatis non
                      molestiae. Ut accusamus incidunt molestias dolorem vero nesciunt numquam fuga
                      consectetur. Eaque, molestias magni, quaerat sequi sed at culpa totam quisquam
                      dicta obcaecati maiores qui corrupti est sit eum explicabo molestiae,
                      voluptates voluptate voluptatem? Facere voluptas nobis a at animi quos
                      deserunt veritatis quisquam sed soluta ratione, quaerat sint ducimus unde rem
                      iusto consectetur perspiciatis sequi aspernatur facilis eligendi qui fugit.
                      Placeat libero repellendus nobis numquam facere eveniet? Rerum perspiciatis
                      odit voluptatibus quidem minima quam nihil quasi maiores illum! Iure eum iste
                      omnis aspernatur adipisci ipsam ut illum repudiandae doloribus nemo suscipit
                      praesentium reprehenderit veniam, voluptatibus voluptates dicta eveniet libero
                      minus, perferendis non possimus molestias laboriosam nihil! Unde explicabo,
                      necessitatibus rerum esse veniam ratione velit sunt omnis eaque, hic
                      temporibus distinctio deleniti? Iusto impedit temporibus exercitationem est,
                      delectus facere, velit obcaecati ut molestias eveniet harum veritatis
                      doloribus optio sequi numquam neque quasi! Consectetur qui excepturi, alias
                      accusantium incidunt dicta provident consequuntur officia odio, inventore
                      aliquid sequi magnam sunt dolor! Repellat nihil molestiae, consequuntur natus
                      nisi corrupti dicta. Dignissimos a quis ipsum odio! Veritatis tempore, quo
                      eligendi repellendus harum quasi omnis neque beatae inventore iure! Ea
                      quibusdam magnam, voluptate dicta quae hic numquam harum facilis? Alias ex
                      odit debitis dolorem iusto animi culpa excepturi iure mollitia voluptatibus
                      dolor, sunt omnis! Harum, earum error, laudantium, ex animi a iste laboriosam
                      ullam nulla non illum saepe illo tempore velit perspiciatis magnam. Provident
                      optio similique voluptatem architecto, dolorem animi tempora velit sint ullam
                      cumque unde qui mollitia ex ratione modi alias aut magni odio laudantium non
                      accusamus blanditiis voluptatum consequatur et. Repellendus, possimus in,
                      optio nobis id cupiditate vel adipisci itaque quisquam numquam minus.
                      Obcaecati, vel ab dolorem dicta accusamus quos odio asperiores dolores
                      adipisci.
                    </p>
                  </div>
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

export default CurrentAnalytic;
