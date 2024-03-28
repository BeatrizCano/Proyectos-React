import { useContext } from 'react'
import { CartContext } from '../context/cart'

export const useCart = () => {
    const context = useContext(CartContext)

    // eslint-disable-next-line no-undef
    if( context === undefined) {
        throw new Error(' useCart must be used within a CartProvider')
    }
    
    return  context
}