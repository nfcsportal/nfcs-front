import React from 'react';

import Typography from '../Typography';
import { ITypographyProps } from '../Typography/Typography.types';
import styles from './button.module.scss';

interface IButtonProps extends ITypographyProps {
  type: 'primary' | 'secondary';
  size?: 's' | 'l' | 'xl';
  customClass?: string;
  submit?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  type,
  size = 'l',
  customClass = '',
  submit = false,
  ...rest
}) => {
  const buttonType = submit ? 'submit' : 'button';
  return (
    <button type={buttonType} className={`${styles[type]} ${styles[size]} ${customClass}`}>
      <Typography {...rest} />
    </button>
  );
};

export default Button;
