import { createContext, useState } from "react"

//Crear contexto
export const CartContext = createContext()

//Crear provider
// eslint-disable-next-line react/prop-types
export function CartProvider ({ children}) {

    const [cart, setCart] = useState([])

    const addToCart = product => {
      //Checkear si el producto está ya en el carrito
      const productInCartIndex = cart.findIndex(item => item.id === product.id)

      if ( productInCartIndex >= 0) {
        //una forma sería usando structuredClone
        const newCart = structuredClone(cart)
        newCart[productInCartIndex].quantity +=1
        return setCart(newCart)
      }

      //producto no está en el carrito
      setCart(prevState => ([
        ...prevState, 
        {
            ...product,
            quantity: 1
        }
      ]))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        
        <CartContext.Provider value={{
              cart,
              addToCart,
              clearCart
        }}
        >
            {children}
        </CartContext.Provider>       
        
    )
}
