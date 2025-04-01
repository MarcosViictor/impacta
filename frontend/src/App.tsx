import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@/pages/Dashboard';
import { OngDetails } from '@/pages/OngDetails';
import { UserProfile } from '@/pages/UserProfile';
import { CadastroOng } from '@/pages/CadastroOng';
import { TelaCadastro } from './pages/TelaCadastro';
import { TelaEntra } from './pages/TelaEntrar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ong' element={<OngDetails />} />
          <Route path='/user' element={<UserProfile />} />
          <Route path='/cadastro-ong' element={<CadastroOng />} />
          <Route path='/cadastro' element={<TelaCadastro />} />
          <Route path='/entrar' element={<TelaEntra />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
