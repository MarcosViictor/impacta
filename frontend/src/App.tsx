import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@/pages/Dashboard';
import { OngDetails } from '@/pages/OngDetails';
import { UserProfile } from '@/pages/UserProfile';
import { FAQPage } from './pages/FAQ';
import ShoppingCart from './pages/Cart';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ong' element={<OngDetails />} />
          <Route path='/user' element={<UserProfile />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/cart' element={<ShoppingCart />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
