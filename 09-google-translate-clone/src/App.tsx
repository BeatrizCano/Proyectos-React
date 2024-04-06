import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useStore } from './hooks/useStore';


function App() {

  const { fromLanguage,  setFromLanguages } = useStore()

  return (  

    <div className='App'>
      <h1>Google translate</h1>    
      <button onClick={() => {
        setFromLanguages('es')
      }}>Cambiar a Español</button>  
      {fromLanguage}
    </div>

  )
}

export default App
// Llegamos al minuto 36:24 del vídeo
