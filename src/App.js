import './scss/app.scss';
import { useState, useEffect } from 'react';
import { Header } from '../src/components/Header';
import { Categories } from '../src/components/Categories';
import { Sort } from '../src/components/Sort';
import { PizzaBlock } from './components/PizzaBlock';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://6516ea5f09e3260018ca785e.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => setItems(arr));
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
          <div className='content__items'>
            {items.map((element) => (
              <PizzaBlock key={element.title} {...element} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
