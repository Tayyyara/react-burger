import React from 'react';
import styles from './ingridients-group.module.css';

function IngridientsGroup (props) {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <div>
            <h2>{props.header}</h2>
            <ul class={styles.ingridientGroup}>
                {props.children}
            </ul>
        </div>        
    )
} 

export default IngridientsGroup;