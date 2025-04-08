import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '@/pages/Dashboard';
import { OngDetails } from '@/pages/OngDetails';
import { UserProfile } from '@/pages/UserProfile';
import { SearchPage } from '@/pages/SearchPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ong' element={<OngDetails />} />
          <Route path='/user' element={<UserProfile />} />
          <Route path='/search' element={<SearchPage />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
