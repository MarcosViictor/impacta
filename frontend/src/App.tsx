import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@/pages/Dashboard';
import { OngDetails } from '@/pages/OngDetails';
import { UserProfile } from '@/pages/UserProfile';
import Review from '@/pages/Review';
import { SearchPage } from '@/pages/SearchPage';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { RegisterOng } from '@/pages/RegisterOng';
import { FAQPage } from './pages/FAQ';
import ShoppingCart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ong' element={<OngDetails />} />
          <Route path='/user' element={<UserProfile />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/register/ong' element={<RegisterOng />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/review' element={<Review />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
