/* eslint-disable @typescript-eslint/no-empty-function */
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import TooltipSvg from '../../../Assets/Icons/cards/TooltipSvg';
import CloseSvg from '../../../Assets/Icons/CloseSvg';
import { getActionalModals } from '../../../Store/Selectors/modal';
import { setActionModal } from '../../../Store/Slices/modal';
import styles from './actionalModals.module.scss';

const badSuspension = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transform: 'scale(0) rotateX(-360deg)',
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 35,
      stiffness: 500,
    },
  },
  exit: {
    y: '-100vh',
    opacity: 0,
  },
};

Modal.setAppElement('#root');

const ActionalModals: React.FC = () => {
  const modal = useSelector(getActionalModals);
  const dispatch = useDispatch();
  return (
    <Modal
      isOpen={!!modal}
      shouldCloseOnEsc={!!modal}
      id={'currentModal?.id'}
      onRequestClose={() => dispatch(setActionModal(''))}
      overlayClassName={styles.modalOverlay}
      className={styles.modalClass}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key="modal"
          className={styles.modalInner}
          variants={badSuspension}
          initial="hidden"
          exit="initial"
          animate="visible"
        >
          <div onClick={() => dispatch(setActionModal(''))} className={styles.modalCloser}>
            <CloseSvg />
          </div>
          <h2 className={styles.modalTitle}>Binance Future Forecast</h2>
          <div className={styles.detailsList}>
            <div className={styles.detailsItemContent}>
              <p className={styles.detailtsItemTitle}>
                Inquiry type <TooltipSvg />
              </p>
              <p className={styles.detailsItemText}>Cross</p>
            </div>
            <div className={styles.detailsItemContent}>
              <p className={styles.detailtsItemTitle}>Adjust Leverage</p>
              <p className={styles.detailsItemText}>25x</p>
            </div>
            <div className={styles.detailsItemContent}>
              <p className={styles.detailtsItemTitle}>
                Price Range : <span>USD</span>
              </p>
              <p className={styles.detailsItemText}>
                100$ <span className={styles.line}></span>424$
              </p>
            </div>
            <div className={styles.detailsItemContent}>
              <p className={styles.detailtsItemTitle}>Time Zone</p>
              <p className={styles.detailsItemText}>
                (UTC - 05;00) Eastern Time (US & Canada) America/Iqualuit
              </p>
            </div>
            <div className={styles.detailsItemContent}>
              <p className={styles.detailtsItemTitle}>Date</p>
              <p className={styles.detailsItemText}>22/Jun/1684</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
};

export default ActionalModals;
