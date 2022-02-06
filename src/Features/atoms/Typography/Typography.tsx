import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useDetectCurrentClassWithLocale } from '../../../Hooks/useDetectCurrentClassWithLocale';
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
  const hasMultyClasss =
    multyLangClasses?.length && useDetectCurrentClassWithLocale(multyLangClasses);
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
