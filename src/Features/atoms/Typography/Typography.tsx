import React from 'react';
import { FormattedMessage } from 'react-intl';

import { ITypographyProps } from './Typography.types';

const Typography: React.FC<ITypographyProps> = ({
  component,
  className,
  id,
  defaultMessage,
  value,
  valueMessage,
  style = {},
}) => {
  const Component = component;
  const currentValue = value ? { [value]: valueMessage } : {};

  return (
    <Component className={className} style={style}>
      <FormattedMessage values={currentValue} id={id} defaultMessage={defaultMessage} />
    </Component>
  );
};
export default Typography;
