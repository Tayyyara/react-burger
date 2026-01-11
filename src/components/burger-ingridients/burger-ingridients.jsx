import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngridientsGroup from '../ingridients-group/ingridients-group';
import IngridientItem from '../ingridient-item/ingridient-item';
import data from '../../data.json';

import styles from './burger-ingridients.module.css';

function BurgerIngridients () {
    const [current, setCurrent] = React.useState('buns');
    return (
        <section className={styles.section} >
            <h1>
                Соберите бургер
            </h1>
            <div className={styles.tabPanel}>
                <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="fillings" active={current === 'fillings'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div>
                <IngridientsGroup header={'Булки'}>
                    {data.map((item) => {
                        return(
                            item.type === 'bun' && <IngridientItem image={item.image} price={item.price} name={item.name}/>
                        )
                        
                    })}
                </IngridientsGroup>
                <IngridientsGroup header={'Соусы'}>
                    {data.map((item) => {
                        return(
                            item.type === 'sauce' && <IngridientItem image={item.image} price={item.price} name={item.name}/>
                        )
                        
                    })}
                </IngridientsGroup>
                <IngridientsGroup header={'Начинки'}>
                    {data.map((item) => {
                        return(
                            item.type === 'main' && <IngridientItem image={item.image} price={item.price} name={item.name}/>
                        )
                        
                    })}
                </IngridientsGroup>
            </div>
        </section>
    )
} 

export default BurgerIngridients;