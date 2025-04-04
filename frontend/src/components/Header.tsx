import Logo from '@/static/assets/logo.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header 
      className='sticky top-0 z-50 shadow-lg bg-gray-100 border-b-2 border-white/50 backdrop-blur-sm '

    >
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>

        <Link to='/' className='flex items-center gap-3 hover:opacity-90 transition-opacity'>
          <img src={Logo} className='w-10 h-10' alt="Logo Innova" />
          <span className='text-2xl font-bold text-black'>
            Innova
          </span>
        </Link>

    
        <nav className='flex items-center gap-8'>
          <Link 
            to='/'
            className='relative font-medium text-black after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full'
          >
            Buscar ONGs
          </Link>
          <Link 
            to='/'
            className='relative font-medium text-black after:absolute after:bottom-[-8px] after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full'
          >
            Como funciona
          </Link>
        </nav>

        <div className='flex items-center gap-6'>
          <Link 
            to='/'
            className='font-medium text-black hover:font-semibold transition-colors '
          >
            Entrar
          </Link>
          <Link 
            to='/'
            className='px-2 py-1 font-semibold text-blue-700 transition-all duration-200 hover:shadow-md hover:bg-blue-700 hover:text-white   hover:brightness-110 bg-white rounded-md border-3 border-blue-700'
          >
            Cadastrar
          </Link>
        </div>
      </div>
    </header>
  )
}
