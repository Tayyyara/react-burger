import React from 'react';
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../../data.json';

import styles from './burger-constructor.module.css';

function BurgerConstructor ({data}) {

    const [current, setCurrent] = React.useState('buns');

    return (
      <div className={styles.container}> 
        <div className={styles.burger}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={data[0].image}
          />

          <ul className={styles.constructorElementList}>
            <li className={styles.constructorElementItem}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={data[0].image}
            />
            </li>
            <li className={styles.constructorElementItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={data[0].image}
              />
            </li>
            <li className={styles.constructorElementItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={data[0].image}
              />
            </li>
            <li className={styles.constructorElementItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={data[0].image}
              />
            </li>
            <li className={styles.constructorElementItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={data[0].image}
              />
            </li>
            <li className={styles.constructorElementItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={data[0].image}
              />
            </li>
            <li className={styles.constructorElementItem}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail={data[0].image}
              />
            </li>
          </ul>
          
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={data[0].image}
          />
        </div>
        <div className={styles.total}>
          <div className={styles.price}>
            <span className="text text_type_digits-medium">610</span>
            <CurrencyIcon type="primary" className={styles.icon}/>
          </div>
          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </div>
    )
} 

export default BurgerConstructor;