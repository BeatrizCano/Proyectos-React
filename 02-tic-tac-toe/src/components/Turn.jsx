import { Square } from "./Square";
import { TURNS } from "../constants";

//Componente que representa la sección de cambio de turno en el juego
export const TurnSection = ({turn}) => {

    return (
        <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    );
}