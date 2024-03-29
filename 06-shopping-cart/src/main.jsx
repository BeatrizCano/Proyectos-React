
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FiltersProvider } from './context/filter'
import './styles/index.css'

//2.Proveer el contexto
ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
