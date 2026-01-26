import ReactDOM from 'react-dom';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

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

ModalOverlay.propTypes = {
  setIsOpen: PropTypes.func.isRequired
};

export default ModalOverlay;