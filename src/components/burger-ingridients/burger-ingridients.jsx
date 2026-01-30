import { useState, useRef } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngridientsGroup from '../ingridients-group/ingridients-group';
import Ingridient from '../ingridient/ingridient';
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-type'

import styles from './burger-ingridients.module.css';

function BurgerIngridients ({data}) {
    const [current, setCurrent] = useState('buns');

    const bunsRef = useRef(null);
    const saucesRef = useRef(null);
    const fillingsRef = useRef(null);

    const contentRef = useRef(null);

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
                    {data.filter(ingridient => ingridient.type === 'bun').map(ingridient => (
                        <Ingridient key={ingridient._id} ingridient={ingridient} />
                    ))}
                </IngridientsGroup>

                <IngridientsGroup header={'Соусы'} ref={saucesRef}>
                    {data.filter(ingridient => ingridient.type === 'sauce').map(ingridient => (
                        <Ingridient key={ingridient._id} ingridient={ingridient} />
                    ))}
                </IngridientsGroup>

                <IngridientsGroup header={'Начинки'} ref={fillingsRef}>
                    {data.filter(ingridient => ingridient.type === 'main').map(ingridient => (
                        <Ingridient key={ingridient._id} ingridient={ingridient} />
                    ))}
                </IngridientsGroup>
                
            </div>
        </section>
    )
} 

BurgerIngridients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType).isRequired
};

export default BurgerIngridients;