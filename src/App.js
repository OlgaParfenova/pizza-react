import './scss/app.scss';
import { useState, useEffect } from 'react';
import { Header } from '../src/components/Header';
import { Categories } from '../src/components/Categories';
import { Sort } from '../src/components/Sort';
import { PizzaBlock, Skeleton } from './components/PizzaBlock';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://6516ea5f09e3260018ca785e.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories />
            <Sort />
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((element) => <PizzaBlock key={element.title} {...element} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
