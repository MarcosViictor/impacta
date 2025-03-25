import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <>
        <Header />


        {/* pode apagar isso */}

        <div className="flex gap-4 w-[500px]">
          <Button
            as={Link} // para usar o link como um botão
            to='/a' //rota para onde o botão vai
            variant='primary'
          
            width='full'
          >
              Quero ajudar
          </Button>
          <Button
            variant='secondary'
            width='full'
            className='text-amber-700'
          
          >
              Teste
          </Button>
        </div>
  
      
    </>
  )
}

