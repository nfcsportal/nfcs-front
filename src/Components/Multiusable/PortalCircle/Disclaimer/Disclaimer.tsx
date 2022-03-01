/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import Typography from '../../../../Features/atoms/Typography';
import styles from './disclaimer.module.scss';

interface IDisclaimer {
  name: string;
  onChange: (name: string, position: boolean) => void;
}

const Disclaimer: React.FC<IDisclaimer> = ({ onChange, name }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = () => {
    onChange('disclaimer', !checked);
    setChecked(!checked);
  };
  return (
    <div className={styles.diclaimerWrapper}>
      <input
        checked={checked}
        onChange={handleChange}
        name={name}
        className={styles.input}
        type="checkbox"
      />
      <Typography component="span" className={styles.text} id="disclaimer.text" />
      <Typography component="span" className={styles.linked} id="disclaimer.link" />
    </div>
  );
};

export default Disclaimer;
