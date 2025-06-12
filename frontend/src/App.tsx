import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@/pages/Dashboard';
import { OngDetails } from '@/pages/OngDetails';
import { UserProfile } from '@/pages/UserProfile';
import { SearchPage } from '@/pages/SearchPage';
import { Login } from '@/pages/Login';
import { Register } from '@/pages/Register';
import { RegisterOng } from '@/pages/RegisterOng';
import { FAQPage } from './pages/FAQ';
import { ShoppingCart } from './pages/Cart';
import { UpdateOng } from '@/pages/UpdateOng';
import { Home } from '@/pages/Home';
import { CadastroOng } from '@/pages/CadastroOng';
import { TelaCadastro } from './pages/TelaCadastro';
import { TelaEntra } from './pages/TelaEntrar';
import { ProfileEdit } from './pages/ProfileEdit';
import Review from './pages/Review';
import { ProtectedRoute } from '@/components/ProtectedRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={
            <ProtectedRoute allowedUserTypes={['ONG']}>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path='/ong/:id' element={<OngDetails />} />
          <Route path='/user' element={
            <ProtectedRoute allowedUserTypes={['DONOR']}>
              <UserProfile />
            </ProtectedRoute>
          } />
          <Route path='/cadastro-ong' element={<CadastroOng />} />
          <Route path='/cadastro' element={<TelaCadastro />} />
          
          <Route path='/ong/update' element={
            <ProtectedRoute allowedUserTypes={['ONG']}>
              <UpdateOng />
            </ProtectedRoute>
          } />
          <Route path='/search' element={
            <ProtectedRoute allowedUserTypes={['DONOR']}>
              <SearchPage />
            </ProtectedRoute>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/register/ong' element={<RegisterOng />} />
          <Route path='/faq' element={<FAQPage />} />
          <Route path='/review' element={<Review />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='/entrar' element={<TelaEntra />} />
          <Route path='/profile' element={<ProfileEdit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
