import { Link } from '../Link'

export default function Page404 () {
    return (
        <div className='div404'>
        <div>
            <h1>Página no encontrada</h1>
            <img src="https://cdn.pixabay.com/photo/2016/03/12/14/19/error-404-1252056_1280.png" alt="Image error 404" />
        </div>
           <Link to='/'>Volver a Home</Link>
        </div>
    )
}