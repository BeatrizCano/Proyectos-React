import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact () {

    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    //para recuperar la cita la cargar la página
    useEffect(  refreshFact, [])

    return { fact, refreshFact }
}
