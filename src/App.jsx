import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from './components/app-header/app-header.jsx';
import BurgerIngridients from './components/burger-ingridients/burger-ingridients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';

function App() {

  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const URL = 'https://norma.education-services.ru/api/ingredients';

  useEffect(() => {
    const getIngredients = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(URL);
        
        if (!res.ok) {
          throw new Error(`Ошибка: ${res.status}`);
        }
        
        const data = await res.json();
        setIngredients(data.data);
      } catch (e) {
        setHasError(true);
        console.error("Ошибка при получении ингредиентов:", e);
      } finally {
        setIsLoading(false);
      }
    };

    getIngredients();
  }, []); 

  return (
    <div className="App">
      {isLoading && <p>Загрузка ингредиентов...</p>}
      {hasError && <p>Произошла ошибка при получении данных</p>}
      
      {!isLoading && !hasError && (
        <>
          <AppHeader/>
          <main className={styles.main}>
            <h1 className={`text text_type_main-large ${styles.mainHeading}`}>
              Соберите бургер
            </h1>
            <div className={styles.content}>
              <BurgerIngridients data={ingredients}/>
              <BurgerConstructor data={ingredients}/>
            </div>
          </main>
        </>
      )}
      
    </div>
  );
}

export default App;
