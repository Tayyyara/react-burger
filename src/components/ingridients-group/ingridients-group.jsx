import React from 'react';
import styles from './ingridients-group.module.css';

function IngridientsGroup (props) {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <div className={styles.ingridientsGroup}>
            <h2 className={`text text_type_main-medium ${styles.ingridientsGroupHeading}`}>{props.header}</h2>
            <ul className={styles.ingridientsGroupList}>
                {props.children}
            </ul>
        </div>        
    )
} 

export default IngridientsGroup;