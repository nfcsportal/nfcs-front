import React from 'react';
import Modal from 'react-modal';

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
    >
      <h2>Hello</h2>
      <button>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  );
};

export default Modals;
