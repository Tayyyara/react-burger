import React from 'react';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import NavigationLink from '../navigation-link/navigation-link.jsx';
import styles from './app-header.module.css';

function AppHeader () {
   return (
      <header className={`${styles.header} text text_type_main-default`}>
         <div className={styles.content}>
            <div className={styles.navigation}>
               <NavigationLink>
               <BurgerIcon type="secondary"/>
               <span>Конструктор</span>
            </NavigationLink>
            <NavigationLink>
               <ListIcon type="secondary" />
               <p>Лента заказов</p>
            </NavigationLink>
            </div>
            
            <Logo className={styles.logo} />
            <div className={styles.accountContainer}>
               <NavigationLink >
               <ProfileIcon type="secondary" />
               <p>Личный кабинет</p>
            </NavigationLink>
            </div>
            
         </div>
      </header>
   )
} 

export default AppHeader;
