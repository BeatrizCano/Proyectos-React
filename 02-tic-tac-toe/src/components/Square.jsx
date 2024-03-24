
// Componente que representa un cuadrado en el tablero del juego
export const Square =({ children, isSelected, updateBoard, index}) => {
  
    const className = `square ${isSelected ? 'is-selected' : ''}`

    //Función para manejar el clic del cuadrado
    const handleClick = () => {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className= {className}>
        {children}
      </div>
    )
  }