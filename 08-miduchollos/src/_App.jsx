// ejemplo useRoutes
import { Link, useRoutes } from "react-router-dom"

const routes = [
    {
        path: '/',
        element: (
            <div>
                <h1>Home</h1>
                <Link  to='/search'>Go to search</Link>
            </div>
        ) 
    },
    {
        path: '/search',
        element:  (
            <div>
                <h1>Search</h1>
                <Link  to='/'>Go to home</Link>
            </div>
        ) 
    }
]

export default function App() {
    const element = useRoutes(routes)
    return (
        <main>
            <header>
                <h1>Use Routes</h1>
            </header>
            {element}
        </main>
    ) 
}