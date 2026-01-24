import React from 'react';
import styles from './ingridient-item.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function IngridientItem (props) {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <li className={styles.ingridient}>
            <img src={props.image}/>
            <div className={styles.price}>
                <p className="text text_type_digits-default">{props.price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">{props.name}</p>
        </li>        
    )
} 

export default IngridientItem;