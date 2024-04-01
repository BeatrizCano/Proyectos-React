/* eslint-disable react/prop-types */
import { Link, Route, Routes, useParams, Outlet, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { NavLink } from './components/NavLink'
import { useAuth  } from './hooks/useAuth'

function App() {

  const Home = () => <h1>Home</h1>

  const SearchPage = () => {
    const tacos = [
      'cochinita',
      'chili',
      'carnita',
      'fantasma'
    ]

    return (
      <div>
        <h1>Search Page</h1>
        <ul>
          {tacos.map(taco => (
            <li key={taco}><Link  to={`/tacos/${taco}`}>{taco}</Link></li>         
          ))}
        </ul>     
      </div>
    )
  }

  // Outlet se usa para mostrar el componente de la ruta anidada
  const Tacos = () => {
    const {taconame} = useParams()

    return (
      <div>
         <h1>Tacos</h1>   
          {taconame}
          <Link to='details'>Ir a los detalles</Link>
          <Outlet />
      </div>
   
  )}

  // usamos Index Route
  const TacoIndex = () => {
    return (
      <h1>Index Route de Tacos</h1>
    )
  }


  // useparams se usa para las rutas dinámicas
  const TacoDetails = () => {
    const { taconame } = useParams()

    return (
      <h1>Taco Details {taconame}</h1>
    )
  }
  
  const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    console.log(location.state)

    const handleClick = () => {
      login()
      navigate('/search-page')
    }

    return (
      <button onClick={handleClick}>Login</button>
    )
  }

  const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth ()
    const location =useLocation()
    if (!isAuthenticated) {
      return <Navigate to='/login'  state={{location}}/>
    }

    return children
  }


 // se han personalizado los enlaces usando un componente propio llamado NavLink
  return (
    <div className='App'>
      <header>
        <h1> Miduchollo $</h1>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>             
            <li> <NavLink to="/search-page">Search Page</NavLink></li>            
          </ul>
        </nav>
      </header>
     
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/search-page' element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />    
        < Route path='/tacos/:taconame' element={ <ProtectedRoute><Tacos/></ProtectedRoute> } >
          <Route index element={<TacoIndex />} />
          <Route path='details' element={<TacoDetails />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={ <h1>Not Found</h1> } />
      </Routes>
    </div>
  )
}

export default App
