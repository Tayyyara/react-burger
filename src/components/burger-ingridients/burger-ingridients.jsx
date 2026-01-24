import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngridientsGroup from '../ingridients-group/ingridients-group';
import IngridientItem from '../ingridient-item/ingridient-item';
import data from '../../data.json';

import styles from './burger-ingridients.module.css';

function BurgerIngridients () {
    const [current, setCurrent] = React.useState('buns');

    const bunsRef = React.useRef(null);
    const saucesRef = React.useRef(null);
    const fillingsRef = React.useRef(null);

    const onTabClick = (tab) => {
        setCurrent(tab);
        const element = {
            buns: bunsRef,
            sauces: saucesRef,
            fillings: fillingsRef
        }[tab];
        
        if (element.current) {
            element.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className={styles.section} >
            <div className={styles.tabPanel}>
                <Tab value="buns" active={current === 'buns'} onClick={onTabClick}>
                    Булки
                </Tab>
                <Tab value="sauces" active={current === 'sauces'} onClick={onTabClick}>
                    Соусы
                </Tab>
                <Tab value="fillings" active={current === 'fillings'} onClick={onTabClick}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.content}>
                <IngridientsGroup header={'Булки'} ref={bunsRef}>
                    {data.map((item) => (item.type === 'bun' && <IngridientItem image={item.image} price={item.price} name={item.name}/>))}
                </IngridientsGroup>
                <IngridientsGroup header={'Соусы'} ref={saucesRef}>
                    {data.map((item) => (item.type === 'sauce' && <IngridientItem image={item.image} price={item.price} name={item.name}/>))}
                </IngridientsGroup>
                <IngridientsGroup header={'Начинки'} ref={fillingsRef}>
                    {data.map((item) => (item.type === 'main' && <IngridientItem image={item.image} price={item.price} name={item.name}/>))}
                </IngridientsGroup>
            </div>
        </section>
    )
} 

export default BurgerIngridients;