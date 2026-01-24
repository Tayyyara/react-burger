import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngridientsGroup from '../ingridients-group/ingridients-group';
import IngridientItem from '../ingridient-item/ingridient-item';

import styles from './burger-ingridients.module.css';

function BurgerIngridients ({data}) {
    const [current, setCurrent] = React.useState('buns');

    const bunsRef = React.useRef(null);
    const saucesRef = React.useRef(null);
    const fillingsRef = React.useRef(null);

    const contentRef = React.useRef(null);

    const handleScroll = () => {
        const containerTop = contentRef.current.getBoundingClientRect().top;

        const bunsDelta = Math.abs(containerTop - bunsRef.current.getBoundingClientRect().top);
        const saucesDelta = Math.abs(containerTop - saucesRef.current.getBoundingClientRect().top);
        const fillingsDelta = Math.abs(containerTop - fillingsRef.current.getBoundingClientRect().top);

        if (bunsDelta < saucesDelta && bunsDelta < fillingsDelta) {
            setCurrent('buns');
        } else if (saucesDelta < fillingsDelta) {
            setCurrent('sauces');
        } else {
            setCurrent('fillings');
        }
    };

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
            <div className={styles.content} ref={contentRef} onScroll={handleScroll}>

                <IngridientsGroup header={'Булки'} ref={bunsRef}>
                    {data.filter(item => item.type === 'bun').map(item => (
                        <IngridientItem key={item._id} {...item} />
                    ))}
                </IngridientsGroup>

                <IngridientsGroup header={'Соусы'} ref={saucesRef}>
                    {data.filter(item => item.type === 'sauce').map(item => (
                        <IngridientItem key={item._id} {...item} />
                    ))}
                </IngridientsGroup>

                <IngridientsGroup header={'Начинки'} ref={fillingsRef}>
                    {data.filter(item => item.type === 'main').map(item => (
                        <IngridientItem key={item._id} {...item} />
                    ))}
                </IngridientsGroup>
                
            </div>
        </section>
    )
} 

export default BurgerIngridients;