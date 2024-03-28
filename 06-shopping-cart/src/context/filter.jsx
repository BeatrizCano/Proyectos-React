/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

//1.Crear el contexto. Este es el contexo que tenemos que consumir
export const FiltersContext = createContext()

//2.Crear el provider, que es que nos provee para acceder al contexto. (Children envuelve todo )
//En el archivo 'main.jsx' se envuelve el contenido 'App.jsx' entre 'FiltersContext'
//Se crea un estado global con useState
export function FiltersProvider ({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    return (
        <FiltersContext.Provider value={{
          filters,
          setFilters
        }}
        >
            {children}
        </FiltersContext.Provider>
    )
}