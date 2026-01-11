import React from 'react';
import styles from './App.css';
import AppHeader from './components/app-header/app-header.jsx';
import BurgerIngridients from './components/burger-ingridients/burger-ingridients';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <main className="main">
        <BurgerIngridients/>
        <div className="block" >
          bebebe
        </div>
      </main>
    </div>
  );
}

export default App;
