//ejemplo para extraer la lógica, no se está usando en estos momentos 
export const getAllQuestions = async () => {
    const res = await fetch('http://localhost:5173/data.json')
    const json = await res.json()
    return json

}