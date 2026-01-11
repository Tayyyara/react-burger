import React from 'react';
import styles from './navigation-link.module.css';

function NavigationLink (props) {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className={styles.navigationLink}>
            {props.children}
        </a>        
    )
} 

export default NavigationLink;