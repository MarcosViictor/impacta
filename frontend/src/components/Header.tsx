import Logo from '@/static/assets/logo.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { isAuthenticated, getUserType } from '@/utils/auth';
import { removeCookie } from '@/utils/cookies';

export const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      setIsAuth(isAuthenticated());
      setUserType(getUserType());
    };
    
    checkAuth();
    
    // Escutar mudanças no localStorage/cookies
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, []);

  const handleLogout = () => {
    removeCookie('access_token');
    removeCookie('refresh_token');
    window.location.href = '/login';
  };

  return (
    <header 
      className='sticky top-0 z-50 shadow-lg bg-gray border-b-2 border-white/50 backdrop-blur-sm '

    >
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>

        <Link to='/' className='flex items-center gap-3 hover:opacity-90 transition-opacity'>
          <img src={Logo} className='w-10 h-10' alt="Logo Innova" />
          <span className='text-2xl font-bold text-black'>
            Innova
          </span>
        </Link>

    
        <nav className='flex items-center gap-8'>
          
          
          {isAuth && userType === 'ONG' && (
            <>
              <Link 
                to='/dashboard'
                className='relative font-medium text-black hover:text-blue-700 after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full'
              >
                Dashboard
              </Link>
              <Link 
                to='/ong/update'
                className='relative font-medium text-black hover:text-blue-700 after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full'
              >
                Perfil
              </Link>
            </>
          )}

          {isAuth && userType === 'DONOR' && (
            <>
            <Link 
              to='/search'
              className='relative font-medium text-black hover:text-blue-700 after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full'
            >
              Buscar ONGs
            </Link>
            </>
          )}

        </nav>

        <div className='flex items-center gap-6'>
          {!isAuth ? (
            <>
              <Link 
                to='/login'
                className='font-medium text-black hover:text-blue-700  transition-colors '
              >
                Entrar
              </Link>
              <Link 
                to='/register'
                className='px-2 py-1 font-semibold text-blue-700 transition-all duration-200 hover:shadow-md hover:bg-blue-700 hover:text-white   hover:brightness-110 bg-white rounded-md border-3 border-blue-700'
              >
                Cadastrar
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className='font-medium text-black hover:text-blue-700 transition-colors'>
              Sair
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
