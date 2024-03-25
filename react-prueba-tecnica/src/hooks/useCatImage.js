import { useEffect, useState } from "react"

//custom hook (usar la palabra use)
export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    //para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(() => {

      if (!fact) return

      const threeFirstWords = fact.split(' ', 3).join('')
      console.log(threeFirstWords)

      fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red`)
       .then(res => {
          const { url } = res;
          setImageUrl(url);
      }) 
   }, [fact])

   return { imageUrl }
}