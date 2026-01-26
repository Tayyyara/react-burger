import { useState } from 'react';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../order-details/order-details';
import PropTypes from 'prop-types';

import styles from './burger-constructor.module.css';

function BurgerConstructor ({data}) {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(true);
    }

    return (
      <div className={styles.container}> 
        <div className={styles.burger}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={data[0].name + ' (верх)'}
            price={data[0].price}
            thumbnail={data[0].image}
          />

          <ul className={styles.constructorElementList}>
            <li className={styles.constructorElementItem}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={data[8].name}
              price={data[8].price}
              thumbnail={data[8].image}
            />
            </li>
            <li className={styles.constructorElementItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={data[5].name}
                price={data[5].price}
                thumbnail={data[5].image}
              />
            </li>
            <li className={styles.constructorElementItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={data[11].name}
                price={data[11].price}
                thumbnail={data[11].image}
              />
            </li>
            <li className={styles.constructorElementItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={data[10].name}
                price={data[10].price}
                thumbnail={data[10].image}
              />
            </li>
            <li className={styles.constructorElementItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={data[10].name}
                price={data[10].price}
                thumbnail={data[10].image}
              />
            </li>
            <li className={styles.constructorElementItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={data[3].name}
                price={data[12].price}
                thumbnail={data[12].image}
              />
            </li>
          </ul>
          
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={data[0].name + ' (низ)'}
            price={data[0].price}
            thumbnail={data[0].image}
          />
        </div>
        <div className={styles.total}>
          <div className={styles.price}>
            <span className="text text_type_digits-medium">610</span>
            <CurrencyIcon type="primary" className={styles.icon}/>
          </div>
          <Button htmlType="button" type="primary" size="large" onClick={handleClick}>
            Оформить заказ
          </Button>
        </div>

        <OrderDetails isOpen={isOpen} setIsOpen={setIsOpen} orderNumber={'034536'}/>
      </div>
    )
} 

BurgerConstructor.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string
}; 

export default BurgerConstructor;