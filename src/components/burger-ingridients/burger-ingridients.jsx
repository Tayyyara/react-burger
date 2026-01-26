import { useState, useRef } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngridientsGroup from '../ingridients-group/ingridients-group';
import IngridientItem from '../ingridient-item/ingridient-item';
import PropTypes from 'prop-types';

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

const ingredientPropType = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number
});

BurgerIngridients.propTypes = {
    data: PropTypes.arrayOf(ingredientPropType).isRequired
};

export default BurgerIngridients;