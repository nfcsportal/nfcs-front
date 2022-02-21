import React from 'react';

import styles from './mainContent.module.scss';

const MainContent: React.FC = (props) => {
  return <main className={styles.main}>{props.children}</main>;
};

export default MainContent;
