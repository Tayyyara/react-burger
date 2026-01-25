import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

const Modal = ({ children, isOpen, setIsOpen, modalHeader='' }) => {

  const modalRoot = document.getElementById("root");
 
  const onClose = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(

    isOpen && (<>
        <ModalOverlay isOpen={isOpen} setIsOpen={setIsOpen}/>
        <div className={styles.modal}>
            <header className={styles.header}>
                <h3 className="text text_type_main-large">{modalHeader}</h3>
                <button className={styles.closeButton} onClick={onClose}>
                    <CloseIcon type="primary" />
                </button>
            </header>
            {children}
        </div>
    </>),
    modalRoot 
  );
};

export default Modal;