import './scss/app.scss';
import { Header } from '../src/components/Header';
import { HomePage } from '../src/pages/HomePage';
import { NotFoundPage } from '../src/pages/NotFoundPage';
import { Routes, Route } from 'react-router-dom';
import { CartPage } from './pages/CartPage';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <div className='container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
