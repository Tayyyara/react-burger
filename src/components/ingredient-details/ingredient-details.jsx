import styles from './ingredient-details.module.css';
import Modal from '../modal/modal';
import PropTypes from 'prop-types';

const IngredientDetails = ({isOpen, setIsOpen, image, name, calories, proteins, fat, carbohydrates}) => {

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} modalHeader='Детали ингредиента'>
      <div className={styles.modalContent}>
        <img src={image} alt={name} />
        <p className="text text_type_main-medium">{name}</p>
        <ul className={styles.energyValueList}>
          <li className={styles.energyValueItem}>
            <p className="text text_type_main-default">Калории, ккал</p>
            <p className="text text_type_digits-default">{calories}</p>
          </li>
          <li className={styles.energyValueItem}>
            <p className="text text_type_main-default">Белки, г</p>
            <p className="text text_type_digits-default">{proteins}</p>
          </li>
          <li className={styles.energyValueItem}>
            <p className="text text_type_main-default">Жиры, г</p>
            <p className="text text_type_digits-default">{fat}</p>
          </li>
          <li className={styles.energyValueItem}>
            <p className="text text_type_main-default">Углеводы, г</p>
            <p className="text text_type_digits-default">{carbohydrates}</p>
          </li>
        </ul>
      </div>
    </Modal>
  )
};

IngredientDetails.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired
}; 


export default IngredientDetails;