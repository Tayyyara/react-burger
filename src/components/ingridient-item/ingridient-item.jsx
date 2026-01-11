import React from 'react';
import styles from './ingridient-item.module.css';

function IngridientItem (props) {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <li>
            <div>
                <img src={props.image}/>
                <p>{props.price}</p>
                <p>{props.name}</p>
            </div>
            
        </li>        
    )
} 

export default IngridientItem;