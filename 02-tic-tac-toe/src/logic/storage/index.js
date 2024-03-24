//Función para guardar el estado actual en LocalStorage
export const saveGameToStorage = ({board, turn}) => {
    //Guardar el tablero como una cadena en LocalStorag
    window.localStorage.setItem('board', JSON.stringify(board))
    //Guardar el turno actual en LocalStorage
    window.localStorage.setItem('turn', turn)
}

// Función para restablecer los valores almacenados en localStorage
export const resetGameStorage = () => {
  //Eliminar el tablero y el turno almacenados en localStorage
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}