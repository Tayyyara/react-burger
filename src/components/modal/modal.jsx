import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';

const Modal = ({ children, onClose, modalHeader='' }) => {

  const modalRoot = document.getElementById("root");

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [onClose]);

  return ReactDOM.createPortal(

    <>
        <ModalOverlay onClose={onClose}/>
        <div className={styles.modal}>
            <header className={styles.header}>
                <h3 className="text text_type_main-large">{modalHeader}</h3>
                <button className={styles.closeButton} onClick={onClose}>
                    <CloseIcon type="primary" />
                </button>
            </header>
            {children}
        </div>
    </>,
    modalRoot 
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  modalHeader: PropTypes.string
};

export default Modal;