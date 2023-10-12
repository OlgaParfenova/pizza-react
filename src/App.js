import { Routes, Route } from 'react-router-dom';
import { useState, createContext } from 'react';

import { Header } from '../src/components/Header';
import { HomePage } from '../src/pages/HomePage';
import { NotFoundPage } from '../src/pages/NotFoundPage';
import { CartPage } from './pages/CartPage';

import './scss/app.scss';

export const SearchContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className='wrapper'>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
