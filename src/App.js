import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { Header } from '../src/components/Header';
import { HomePage } from '../src/pages/HomePage';
import { NotFoundPage } from '../src/pages/NotFoundPage';
import { CartPage } from './pages/CartPage';

import './scss/app.scss';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='wrapper'>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className='content'>
        <Routes>
          <Route path='/' element={<HomePage searchValue={searchValue} />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
