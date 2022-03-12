import React from 'react';
import Modal from 'react-modal';

import CloseSvg from '../../../Assets/Icons/CloseSvg';
import SuccesSvg from '../../../Assets/Icons/SuccesSvg';
import Button from '../../../Features/atoms/Button';
import { useModal } from '../../../Hooks/useModal';
import styles from './modal.module.scss';

Modal.setAppElement('#root');

const Modals: React.FC = () => {
  const { isOpen, setIsOpen } = useModal();
  console.log(isOpen);

  console.log(styles);

  return (
    <Modal
      isOpen={isOpen}
      id="asas"
      onRequestClose={() => setIsOpen(false)}
      contentLabel="Example Modal"
      overlayClassName={styles.modalOverlay}
      className={styles.modalClass}
    >
      <div className={styles.modalInner}>
        <div className={styles.modalCloser}>
          <CloseSvg />
        </div>
        <div className={styles.modalBody}>
          <h2 className={styles.modalTitle}>Password Changed Successfully!</h2>
          <p className={styles.modalSubTitle}>Please login to your account again</p>
          <div className={styles.modalIcon}>
            <SuccesSvg />
          </div>
          <div className={styles.modalBtn}>
            <Button type="primary" customClass={styles.cardBtn} id={'Login Now'} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Modals;
