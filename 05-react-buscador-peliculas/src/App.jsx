
import './App.css'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'


function App() {  

  const { search, updateSearch, error} = useSearch()
  const { movies, loading,  getMovies} = useMovies({search})

  const handleSubmit = (event) => {
      event.preventDefault()
      getMovies()  
  }

  const handleChange = (event) => {   
    updateSearch(event.target.value)      
  }

   
  return (
    <div className='page'>

     <header>
      <h1>Buscador de películas</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input style={{
          border: '1px solid transparent',
          borderColor: error ? 'red' : 'transparent'
        }} onChange={handleChange} 
           value={search} 
           name='search' 
           type="text"
           placeholder='Avengers, Stars Wars, The Matrix...' />
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
     </header>

     <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
     </main>

    </div>
  )
}

export default App
