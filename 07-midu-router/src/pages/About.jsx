import { Link } from "../Link"

export default function AboutPage () {
    return (
      <>
        <h1>About</h1>
        <div>
          <img src="https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg" alt="Don Oso" />
          <p>Hola me llamo Don Oso y esoy creando un clon de React Router</p>
        </div>     
        <Link to='/'>Ir a la home</Link>
      </>
    )
  }
  