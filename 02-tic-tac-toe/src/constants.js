// Define los símbolos para los turnos de los jugadores X y O
export const TURNS = {
    X: '❌',
    O: '⚪'
}
  
  
// Define todas las combinaciones ganadoras posibles en el juego de tic-tac-toe 
export const WINNER_COMBOS = [ 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]