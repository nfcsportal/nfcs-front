import React, { useState } from 'react';

import Typography from '../Typography';
import styles from './dropdown.module.scss';

interface IDropdown {
  label: string;
}

const Dropdown: React.FC<IDropdown> = ({ label }) => {
  const [open, setOpen] = useState(false);
  console.log(setOpen);

  return (
    <div className={`${styles.formItem} ${styles.selectItem}`}>
      <Typography
        className={styles.spanText}
        component="span"
        id={label}
        onClick={() => setOpen(!open)}
      />
      <ul className={styles.selectParent} onClick={() => setOpen(!open)}>
        <li className={`${styles.selectItem} ${open && styles.selectedItemVisible}`}>
          {/* <li className={`${styles.selectItem} ${styles.active}`}> */}
          <p>Select</p>
          {open && (
            <ul className={`${styles.selectList} ${open && styles.selectListVisible}`}>
              <li className={styles.selectOption}>1</li>
              <li className={styles.selectOption}>2</li>
              <li className={styles.selectOption}>3</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
