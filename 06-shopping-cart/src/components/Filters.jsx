/* eslint-disable react/prop-types */

import { useId } from 'react'
import '../styles/Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    console.log(
        minPriceFilterId,
        categoryFilterId
    )

    const handleChangeMinPrice = (event) => {
       setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
       setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
        <div>
            <label htmlFor={minPriceFilterId}>Rango de precios:</label>
            <input 
                type="range" 
                id={minPriceFilterId} 
                min= '0'
                max='1000'
                onChange={ handleChangeMinPrice }
                value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
        </div>
        <div>
            <label htmlFor={categoryFilterId}>Categoría</label>
            <select 
                id={categoryFilterId}
                onChange={handleChangeCategory}
                >
                <option value="all">Todas</option>
                <option value="laptops">Portátiles</option>
                <option value="smartphones">Móviles</option>
            </select>
        </div>
    </section>
    )
    
}