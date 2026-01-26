import { forwardRef } from 'react';
import styles from './ingridients-group.module.css';
import PropTypes from 'prop-types';

const IngridientsGroup = forwardRef(({header, children}, ref) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <div ref={ref} className={styles.ingridientsGroup}>
            <h2 className={`text text_type_main-medium ${styles.ingridientsGroupHeading}`}>{header}</h2>
            <ul className={styles.ingridientsGroupList}>
                {children}
            </ul>
        </div>        
    )
});

IngridientsGroup.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node,
}; 

export default IngridientsGroup;