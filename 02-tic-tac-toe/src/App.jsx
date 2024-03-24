import { useState } from 'react'
import confetti from 'canvas-confetti'

import { TURNS } from './constants'
import { resetGame, updateBoard } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { GameBoard } from './components/GameBoard'
import { TurnSection } from './components/Turn'



function App() {

  //Estado para el tablero de juego y se incluye localStorage para que se almacene el tablero
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)   
  }) 
 
  //Etado para definir el turno actual del ganador y se incluye localStorage para que se almacene el turno
  const [turn, setTurn] = useState( () => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
    

  //Estado para almacenar al ganador del juego
  //null es que no hay ganador, false que hay un empate
  const [winner, setWinner] = useState(null)

    //Función para reiniciar el juego (Llama a la constante resetGame)
  const handleResetGame = () => {
    resetGame(setBoard, setTurn, setWinner, TURNS);
  }
   
  //Función para manejar la actualización del tablero (Llama a la constante updateBoard)
  const handleUpdateBoard = (index) => {
    updateBoard(index, board, turn, setBoard, setTurn, setWinner, confetti, winner );
  }
  
  
  return  (
    <main className='board'>

      <h1>Tic tac toe</h1>
      <button onClick={handleResetGame}>Reiniciar el juego</button>

      {/* Componente para renderizar el tablero de juego */}
      <GameBoard board={board} handleUpdateBoard={handleUpdateBoard} />

      {/* Componente para renderizar la sección de cambio de turno */}
      <TurnSection turn={turn} />  

      {/* Componente para renderizar el modal del ganador */}
      <WinnerModal  resetGame={handleResetGame} winner={winner} />

    </main>
  )  
}

export default App
