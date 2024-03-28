import { CartIcon,  ClearCartIcon } from './Icons.jsx'
import { useId } from 'react'
import './Cart.css'

export function Cart () {

    const cartCheckboxId = useId()

 return (
    <>
        <label className='cart-button' htmlFor={cartCheckboxId}>
            <CartIcon />
        </label>
        <input  id={cartCheckboxId} type='checkbox' hidden />

        <aside className='cart'>
            <ul>
                <li>
                    <img 
                        src="https://cdn.pixabay.com/photo/2020/09/21/21/24/donkey-5591272_960_720.jpg" 
                        alt="Brown Perfume" 
                    />
                    <div>
                        <strong>Brown Perfume</strong> - $1499
                    </div>
                    <footer>
                        <small>
                            Qty: 1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>

            <button>
                <ClearCartIcon />
            </button>
        </aside>
    </>
 )
    
}