import React, { useMemo } from 'react';

import styles from './toolTip.module.scss';

interface IToolTip {
  isOpen: boolean;
  size?: 's' | 'm' | 'l';
  text: string;
  isForecastList?: boolean;
}
const ToolTip: React.FC<IToolTip> = ({ isOpen, size = 'm', isForecastList = false, text }) => {
  const currentClass = useMemo(() => {
    return isForecastList ? 'toltipContentDashboard' : 'toltipContent';
  }, [isForecastList]);

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
      className={`${isOpen && styles.open} ${styles[currentClass]} ${styles[currentToolTipSize]}`}
    >
      <div className={styles.tooltipArrow} />
      <p>{text}</p>
    </div>
  );
};
export default ToolTip;
