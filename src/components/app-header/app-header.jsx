import { useState } from 'react';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

function AppHeader () {

   const [activeTab, setActiveTab] = useState('constructor')

   return (
      <header className={`${styles.header} text text_type_main-default`}>
         <div className={styles.content}>
            <nav className={styles.navContainer}>
               <ul className={styles.navigation}>
                  <li 
                     className={`${styles.navigationItem} ${activeTab === 'constructor' ? styles.navigationItem_active : ''}`}
                     onClick={() => setActiveTab('constructor')}
                  >
                     <BurgerIcon type={activeTab === 'constructor' ? 'primary' : 'secondary'}/>
                     <p className="text text_type_main-default">Конструктор</p>
                  </li>
                  <li 
                     className={`${styles.navigationItem} ${activeTab === 'orders' ? styles.navigationItem_active : ''}`}
                     onClick={() => setActiveTab('orders')}
                  >
                     <ListIcon type={activeTab === 'orders' ? 'primary' : 'secondary'} />
                     <p className="text text_type_main-default">Лента заказов</p>
                  </li>
               </ul>
               
            </nav>
            
            <Logo className={styles.logo} />
            <div className={styles.accountContainer}>
               <div className={styles.navigationItem}>
                  <ProfileIcon type="secondary" />
                  <p>Личный кабинет</p>
               </div>
            </div>
            
         </div>
      </header>
   )
} 

export default AppHeader;
