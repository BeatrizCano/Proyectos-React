import { useState } from 'react'
import { searchMovies } from '../service/movies'


export function useMovies ({search}) {
    const [ movies, setmovies ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError] = useState(null)
   
    const getMovies = async () => {
      try {
        setLoading(true)
        setError(null)
        const newMovies = await searchMovies({ search })
        setmovies(newMovies)

      } catch(e) {
        setError(e.message)
      } finally {
        //Tanto en el try como en el catch
        setLoading(false)
      }
    }
  
    return { movies, getMovies, loading, error}
  }