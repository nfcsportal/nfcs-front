import React from 'react';

import Typography from '../Typography';
import { ITypographyProps } from '../Typography/Typography.types';
import styles from './button.module.scss';

interface IButtonProps extends ITypographyProps {
  type: 'primary' | 'secondary';
  size?: 's' | 'l' | 'xl';
  customClass?: string;
  submit?: boolean;
  disabeled?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  type,
  size = 'l',
  customClass = '',
  submit = false,
  disabeled = false,
  onClick,
  ...rest
}) => {
  const buttonType = submit ? 'submit' : 'button';
  return (
    <button
      onClick={onClick}
      disabled={disabeled}
      type={buttonType}
      className={`${styles[type]} ${styles[size]} ${customClass}`}
    >
      <Typography {...rest} />
    </button>
  );
};

export default Button;
