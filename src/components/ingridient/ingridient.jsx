import { useState } from 'react';
import styles from './ingridient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import PropTypes from 'prop-types';

function Ingridient ({ingridient}) {

    const { name, price, image, image_large, calories, proteins, fat, carbohydrates, __v } = ingridient;

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(true);
    }

    const handleClose = () => {
      setIsOpen(false);
    }

    return (
        <>
            <li className={styles.ingridient} onClick={handleClick}>
                {__v > 0 && <Counter count={__v} size="default" extraClass="m-1" />}
                <img src={image} alt={name}/>
                <div className={styles.price}>
                    <p className="text text_type_digits-default">{price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <p className={`${styles.name} text text_type_main-default`}>{name}</p>
            </li>  

            {isOpen && (<Modal onClose={handleClose} modalHeader='Детали ингредиента'>
                <IngredientDetails 
                    image={image_large}
                    name={name}
                    calories={calories}
                    proteins={proteins}
                    fat={fat}
                    carbohydrates={carbohydrates}
                />
            </Modal>)}
        </>
              
    )
} 

Ingridient.propTypes = {
    ingridient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        __v: PropTypes.number
    }).isRequired
};

export default Ingridient;