import { theme, colors } from './styles/theme'
import { Camera, Home, Settings, Bell } from "lucide-react";

function App() {

  return (
    <>
      <h1 className="text-3xl " style={{ color: colors.red[200], }}>Boa noite!</h1>
      <Camera className='w-10 h-10' />
    </>
  )
}

export default App
