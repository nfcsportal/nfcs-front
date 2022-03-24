import React, { useMemo } from 'react';

import styles from './toolTip.module.scss';

interface IToolTip {
  isOpen: boolean;
  size?: 's' | 'm' | 'l';
  text: string;
}
const ToolTip: React.FC<IToolTip> = ({ isOpen, size = 'm', text }) => {
  console.log(isOpen);

  const currentToolTipSize = useMemo(() => {
    switch (size) {
      case 's':
        return 'toltipContentSmall';
      case 'm':
        return 'toltipContentNormal';
      case 'l':
        return 'toltipContentBig';
      default:
        return 'toltipContentNormal';
    }
  }, [size]);

  return (
    <div
      className={`${isOpen && styles.open} ${styles.toltipContent} ${styles[currentToolTipSize]}`}
    >
      <div className={styles.tooltipArrow} />
      <p>{text}</p>
    </div>
  );
};
export default ToolTip;
