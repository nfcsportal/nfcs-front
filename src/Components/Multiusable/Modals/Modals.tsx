import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';

import CloseSvg from '../../../Assets/Icons/CloseSvg';
import ErrorSvg from '../../../Assets/Icons/ErrorSvg';
import SuccesSvg from '../../../Assets/Icons/SuccesSvg';
import Button from '../../../Features/atoms/Button';
import Typography from '../../../Features/atoms/Typography';
import { useCurrentButtonActions, useModal } from '../../../Hooks/useModal';
import { setModal } from '../../../Store/Slices/modal';
import styles from './modal.module.scss';

Modal.setAppElement('#root');

const Modals: React.FC = () => {
  const { isOpen, closeModal, currentModal } = useModal();
  const { action } = useCurrentButtonActions();
  const dispatch = useDispatch();

  const currentModalButtonAction = () => {
    dispatch(setModal(''));
    if (action) {
      action();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc={currentModal?.outsideClose}
      id={currentModal?.id}
      onRequestClose={closeModal}
      overlayClassName={styles.modalOverlay}
      className={styles.modalClass}
    >
      <div className={styles.modalInner}>
        {currentModal?.outsideClose && (
          <div onClick={closeModal} className={styles.modalCloser}>
            <CloseSvg />
          </div>
        )}
        <div className={styles.modalBody}>
          <Typography component="h2" id={currentModal?.title} className={styles.modalTitle} />
          <Typography component="p" id={currentModal?.subtitle} className={styles.modalSubTitle} />
          <div className={styles.modalIcon}>
            {currentModal?.type === 'error' ? <ErrorSvg /> : <SuccesSvg />}
          </div>
          <div className={styles.modalBtn}>
            <Button
              onClick={currentModalButtonAction}
              type="primary"
              customClass={styles.cardBtn}
              id={currentModal?.buttonText}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Modals;
