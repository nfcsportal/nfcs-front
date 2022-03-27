import React, { useState } from 'react';

import TooltipSvg from '../../../Assets/Icons/cards/TooltipSvg';
import Button from '../../atoms/Button';
import ToolTip from '../../atoms/ToolTip';
import Typography from '../../atoms/Typography';
import { THomeCards } from '../../organisms/organismsTypes';
import styles from './card.module.scss';

interface ICard extends THomeCards {
  saleMode?: boolean;
}

const Card: React.FC<ICard> = ({
  saleMode = true,
  saledPrice,
  icon,
  price,
  title,
  info,
  buttonText,
  hoverEffect,
}) => {
  const Component = icon;

  const [toolTip, setToolTip] = useState<boolean>(false);
  return (
    <div className={`${styles.cardsCol_25} col_25`}>
      <div>
        <ToolTip
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae et arcu cras dolor
        sollicitudin viverra maecenas pretium faucibus. Fermentu"
          isOpen={toolTip}
        />
      </div>
      <div className={`${styles.cardItem} ${styles[`${hoverEffect}`]}`}>
        <div className={styles.cardTooltip}>
          <button
            onMouseLeave={() => setToolTip(false)}
            onMouseEnter={() => setToolTip(true)}
            type="button"
            aria-label="tooltip"
          >
            <TooltipSvg />
          </button>
        </div>
        <div className={styles.comingSoon}>Coming Soon</div>
        <div className={styles.cardIcon}>
          <Component />
        </div>
        <Typography className={styles.cardTitle} component="h2" id={title} />
        <Typography className={styles.cardText} component="p" id={info} />
        <div className={styles.cardPrice}>
          {saleMode && <s>{saledPrice}$</s>}
          <p>{price}$</p>
        </div>
        <Button type="primary" customClass={styles.cardBtn} id={buttonText} />
      </div>
    </div>
  );
};

export default Card;
