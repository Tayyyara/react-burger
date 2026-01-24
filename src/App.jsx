import React from 'react';
import styles from './App.module.css';
import AppHeader from './components/app-header/app-header.jsx';
import BurgerIngridients from './components/burger-ingridients/burger-ingridients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <main className={styles.main}>
        <h1 className={`text text_type_main-large ${styles.mainHeading}`}>
          Соберите бургер
        </h1>
        <div className={styles.content}>
          <BurgerIngridients />
          <BurgerConstructor />
        </div>
      </main>
    </div>
  );
}

export default App;
