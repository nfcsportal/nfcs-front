import React from 'react';
import { FormattedMessage } from 'react-intl';

import { detectCurrentClassWithLocale } from '../../../Utils/detectCurrentClassWithLocale';
import { ITypographyProps } from './Typography.types';

const Typography: React.FC<ITypographyProps> = ({
  component,
  className,
  id,
  defaultMessage,
  value,
  valueMessage,
  multyLangClasses,
  style = {},
  onClick,
}) => {
  const Component = component;
  const currentValue = value ? { [value]: valueMessage } : {};
  const hasMultyClasss = multyLangClasses?.length && detectCurrentClassWithLocale(multyLangClasses);

  return (
    <Component
      onClick={onClick && onClick}
      className={hasMultyClasss ? hasMultyClasss?.multylangClass : className}
      style={style}
    >
      <FormattedMessage values={currentValue} id={id} defaultMessage={defaultMessage} />
    </Component>
  );
};
export default Typography;
