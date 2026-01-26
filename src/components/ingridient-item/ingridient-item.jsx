import { useState } from 'react';
import styles from './ingridient-item.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../ingredient-details/ingredient-details';

function IngridientItem (props) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
      setIsOpen(true);
    }


    return (
        <>
            <li className={styles.ingridient} onClick={handleClick}>
            {props.count > 0 && <Counter count={props.count} size="default" extraClass="m-1" />}
            <img src={props.image} alt={props.name}/>
            <div className={styles.price}>
                <p className="text text_type_digits-default">{props.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${styles.name} text text_type_main-default`}>{props.name}</p>
        </li>  
        <IngredientDetails 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
            image={props.image}
            name={props.name}
            calories={props.calories}
            proteins={props.proteins}
            fat={props.fat}
            carbohydrates={props.carbohydrates}
        />
        </>
              
    )
} 

export default IngridientItem;