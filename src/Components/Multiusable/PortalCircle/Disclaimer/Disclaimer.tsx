/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import styles from './disclaimer.module.scss';

interface IDisclaimer {
  name: string;
  onChange: (name: string, position: boolean) => void;
  onClick: (name: string) => void;
}

const Disclaimer: React.FC<IDisclaimer> = ({ onChange, name, onClick }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = () => {
    onChange('disclaimer', !checked);
    setChecked(!checked);
  };
  return (
    <div
      onClick={() => onClick('disclaimer')}
      className={`${styles.diclaimerWrapper} defualtCheck`}
    >
      <input
        checked={checked}
        onChange={handleChange}
        name={name}
        className={styles.input}
        type="checkbox"
        id="defaultCheck"
      />
      <label htmlFor="defaultCheck" className={styles.diclaimerLabel}>
        By signing up, you agree to our
        <a href="#" target="_blank">
          privacy policy
        </a>
      </label>
    </div>
  );
};

export default Disclaimer;
