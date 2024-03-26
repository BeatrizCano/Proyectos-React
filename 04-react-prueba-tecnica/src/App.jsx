import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './components/Otro.jsx'


export function App () {

    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })   

    const handleClick = async () => {
        refreshFact()
   }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{ fact }</p>}            
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
            
            {/* se comentó el componente otro porque da problemas en los tests porque se repite 'img' en el componente y aquí */}
            {/* <Otro /> */}
            {/* <section>
                {fact && <p>{ fact }</p>}            
                {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
            </section> */}  
        </main>
        
    )
}