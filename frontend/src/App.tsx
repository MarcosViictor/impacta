import { theme, colors } from './styles/theme'
import { Camera, Home, Settings, Bell } from "lucide-react";
import Card from './components/Card';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 className="text-3xl" style={{ color: colors.red[200], marginBottom: '20px' }}>
        Boa noite!
      </h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <Card
          title="Card com Imagem"
          content="Este é um exemplo de card com imagem. O componente é totalmente responsivo e tem uma animação suave ao passar o mouse."
          imageUrl="https://picsum.photos/400/200"
        />
        
        <Card
          title="Card Interativo"
          content="Este card tem uma função onClick e muda o cursor ao passar o mouse. Clique para ver a interação!"
          onClick={() => alert('Card clicado!')}
        />
        
        <Card
          title="Card Simples"
          content="Este é um exemplo de card simples, sem imagem e sem interação. Perfeito para exibir informações básicas."
        />
      </div>
    </div>
  )
}

export default App
