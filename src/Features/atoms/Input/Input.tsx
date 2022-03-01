/* eslint-disable no-unused-vars */
import React from 'react';
import { useIntl } from 'react-intl';

import ClosedEyeSvg from '../../../Assets/Icons/ClosedEyeSvg';
import OpenedEyeSvg from '../../../Assets/Icons/OpenedEyeSvg';
import Typography from '../Typography';
import styles from './input.module.scss';

type isTruthyEqual = {
  touched: boolean;
  error: string;
};

interface IInputProps {
  type: 'text' | 'password';
  isPassInput?: boolean;
  htmlFor: string;
  label: string;
  placeHolder: string;
  value: string;
  name: string;
  onClick: (current: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: any;
  passShowMode?: boolean;
  setPassShowMode?: (arg: boolean) => void;
  repeatMode?: boolean;
  isTruthyEqual?: isTruthyEqual;
}

const Input: React.FC<IInputProps> = ({
  htmlFor,
  label,
  placeHolder,
  value,
  onChange,
  name,
  error,
  type,
  onClick,
  isPassInput = false,
  passShowMode = false,
  setPassShowMode,
  repeatMode = false,
  isTruthyEqual,
}) => {
  const intl = useIntl();

  return (
    <>
      {!isPassInput ? (
        <div onClick={() => onClick(name)} className={styles.formItem}>
          <Typography className={styles.label} component="label" htmlFor={htmlFor} id={label} />
          <input
            name={name}
            className={styles.input}
            type={type}
            id={htmlFor}
            onChange={onChange}
            value={value}
            placeholder={intl.formatMessage({ id: placeHolder })}
          />
          {error && <Typography component="div" className={styles.errorMessage} id={error} />}
        </div>
      ) : (
        <div onClick={() => onClick(name)} className={styles.formItem}>
          <Typography className={styles.label} component="label" htmlFor={htmlFor} id={label} />
          <div className={styles.addonInput}>
            <input
              className={styles.input}
              type={passShowMode ? 'text' : 'password'}
              id={htmlFor}
              onChange={onChange}
              value={value}
              placeholder={intl.formatMessage({ id: placeHolder })}
            />
            {setPassShowMode && (
              <button onClick={() => setPassShowMode(!passShowMode)} className={styles.passwordEye}>
                {!passShowMode ? <ClosedEyeSvg /> : <OpenedEyeSvg />}
              </button>
            )}
            {repeatMode && isTruthyEqual?.touched && (
              <div
                style={{ background: `${isTruthyEqual.error !== '' ? '#981616' : '#2FAD4B'}` }}
                className={styles.repeatMode}
              />
            )}
          </div>
          {error && <Typography component="div" className={styles.errorMessage} id={error} />}
        </div>
      )}
    </>
  );
};

export default Input;
