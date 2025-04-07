import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@/pages/Dashboard';
import { OngDetails } from '@/pages/OngDetails';
import { UserProfile } from '@/pages/UserProfile';
import { Home } from "@/pages/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/ong' element={<OngDetails />} />
          <Route path='/user' element={<UserProfile />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
