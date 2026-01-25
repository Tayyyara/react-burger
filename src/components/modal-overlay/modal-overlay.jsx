import ReactDOM from 'react-dom';
import styles from './modal-overlay.module.css';

const ModalOverlay = ({setIsOpen}) => {

  const modalRoot = document.getElementById("root");

  const onClose = () => {
    setIsOpen(false);
  }

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
    </div>,
    modalRoot 
  );
};

export default ModalOverlay;