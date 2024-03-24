import { Square } from "./Square";

//Componente que representa el tablero de juego
export const GameBoard = ({board, handleUpdateBoard}) => {

    return (
        <section className='game'>
        { board.map( (square, index) => (
            <Square
                key={index}
                index={index}
                updateBoard={handleUpdateBoard}
             >
             {square}
             </Square>
        ))}
            </section>

        );   
        
}

