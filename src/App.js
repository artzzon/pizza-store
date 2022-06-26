import React, { useState } from 'react';

import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import Pizza from './components/Pizza';

function App() {
  const [pizzas, setPizzas] = useState([]);

  React.useEffect(() => {
    fetch('https://62b8a44403c36cb9b7ca1e33.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
      })
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
