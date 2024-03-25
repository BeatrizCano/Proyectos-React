import { WINNER_COMBOS } from "../constants"
import { TURNS } from "../constants"
import { saveGameToStorage, resetGameStorage } from "../storage"

// Función para verificar si hay un ganador en el tablero dado
// Recorre todas las combinaciones ganadoras y comprueba si alguna de ellas está presente en el tablero
// Devuelve el símbolo del jugador ganador (X o O) o null si no hay ganador
export const checkWinnerFrom = (boardToCheck) => {
 
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
 
    return null
  }

  // Función para verificar si el juego ha llegado a su fin (empate)
  // Comprueba si todos los espacios del tablero están ocupados
  // Devuelve true si no hay más espacios vacíos, indicando un empate, de lo contrario devuelve false
  export const checkEndGame = (newBoard) => {  
    return newBoard.every((square) => square != null)
  }


  // Función para actualizar el tablero con el nuevo movimiento del jugador
    export  const updateBoard = (index, board, turn, setBoard, setTurn, setWinner, confetti, winner ) => {
    //si ya tienen algo
    if (board[index] || winner) return;
    //actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn
    setBoard(newBoard)
    //cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)
    //guardar aquí la partida en LocalStorage
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    //revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //empate
    }
  };
  


 // Función para reiniciar el juego y establecer los valores iniciales del tablero
 // Limpia el tablero y restablece el turno al jugador inicial (X)
 // Restablece el estado del ganador a null
 //Reseteamos los valores de localStorage
 export const resetGame = ( setBoard, setTurn, setWinner, TURNS) => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)  
  resetGameStorage()
}