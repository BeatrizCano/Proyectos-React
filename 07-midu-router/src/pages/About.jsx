/* eslint-disable react/prop-types */
import { Link } from "../Link"

const il8n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a home',
    description: '¡Hola me llamo Don Oso y estoy creando un clon de React Router!'
  }, 
  en: {
    title: 'About',
    button: 'Go to home page',
    description: 'Hi! My name is Mr Bear and I am creating a clon of React Router'
  }
}

const useIl8n = (lang) => {
  return il8n[lang] || il8n.en
}

export default function AboutPage ({ routeParams }) {
  const il8n = useIl8n(routeParams.lang ?? 'es')

    return (
      <>
        <h1>{il8n.title}</h1>
        <div>
          <img src="https://cdn.pixabay.com/photo/2018/08/11/22/53/teddy-bear-3599680_1280.jpg" alt="Don Oso" />
          <p>{il8n.description}</p>
        </div>     
        <Link to='/'>Ir a la home</Link>
      </>
    )
  }
  