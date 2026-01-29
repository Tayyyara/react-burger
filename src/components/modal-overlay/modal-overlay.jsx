import ReactDOM from 'react-dom';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({onClose}) => {

  const modalRoot = document.getElementById("root");

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
    </div>,
    modalRoot 
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ModalOverlay;