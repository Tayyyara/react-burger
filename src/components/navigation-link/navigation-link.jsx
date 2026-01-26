import styles from './navigation-link.module.css';

function NavigationLink (props) {
    return (
        <a className={styles.navigationLink}>
            {props.children}
        </a>        
    )
} 

export default NavigationLink;