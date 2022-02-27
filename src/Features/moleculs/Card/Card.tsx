import React from 'react';

import TooltipSvg from '../../../Assets/Icons/cards/TooltipSvg';
import Button from '../../atoms/Button';
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
}) => {
  console.log(saleMode, title);
  const Component = icon;
  return (
    <div className={`${styles.cardsCol_25} col_25`}>
      <div className={`${styles.cardItem} ${styles.cardItemBinance}`}>
        <div className={styles.cardTooltip}>
          <button type="button" aria-label="tooltip">
            <TooltipSvg />
          </button>
        </div>
        <div className={styles.cardIcon}>
          <Component />
        </div>
        <Typography className={styles.cardTitle} component="h2" id={title} />
        <Typography className={styles.cardText} component="p" id={info} />
        <div className={styles.cardPrice}>
          <s>{saledPrice}$</s>
          <p>{price}$</p>
        </div>
        <Button type="primary" customClass={styles.cardBtn} id={buttonText} />
      </div>
    </div>
  );
};

export default Card;
