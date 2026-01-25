import ReactDOM from 'react-dom';
import styles from './ingredient-details.module.css';
import Modal from '../modal/modal';

const IngredientDetails = ({isOpen, setIsOpen}) => {

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalHeader='Детали ингредиента'>
      <div className={styles.modalContent}>
        контент
      </div>
    </Modal>
  )
};

export default IngredientDetails;