// Usamoe el hook useReducer (pasos)

import { useReducer } from "react"
import { Action } from "../Types/Action.type"
import { State } from "../interfaces/State.interface"
import { FromLanguage, Language } from "../Types/Language.type"
import { AUTO_LANGUAGE } from "../constants/constants"

// 1. Crear un estado inicial
const initialState : State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
  }
  
  //2. Creamos el reducer
  function reducer(state: State, action: Action ) {
      // Se declara el tipo de acción
      const { type } = action
      // si el tipo coincide, se devuelve un nuevo estado el que se intercambian los lenguages (interchange). 
      // Cuando se recibe una nueva acción se intercambia el estado
      if (type === 'INTERCHANGE_LANGUAGES') {
        //lógica del estado dentro del reducer
        // es interesante porque lo evitamos en los componentes
        if (state.fromLanguage === AUTO_LANGUAGE) return state

        return {
          // estado actual
          ...state,
          fromLanguage: state.toLanguage,
          toLanguage: state.fromLanguage
        }
      }
  
      // Esto es para cambiar el idioma en el input del texto de entrada (escoger el lenguage al que quieres que se traduzca). 
      // Payload es la información que envía la acción para actualizar el estado, el siguiente paso de la acción. En este caso, quiero que cambies el idioma y este es el que quiero que cambies
      if (type === 'SET_FROM_LANGUAGE')
        return {
          ...state,
          fromLanguage: action.payload
        }
  
      // Es para cambiar el lenguaje del imput de salida o de destino (traducción)
      if (type === 'SET_TO_LANGUAGE')
        return {
          ...state,
          toLanguage: action.payload
        }
  
      // Es para cambiar el texto del input de entrada
      if (type === 'SET_FROM_TEXT')
        return {
          ...state,
          loading: true,
          fromText: action.payload,
          return: ''
        }
      // Para cambiar el resultado del input de destino
      if (type === 'SET_RESULT') 
        return {
          ...state,
          loading: false,
          result: action.payload
        }
     
      
    // Sino hay ningún tipo, devolvemos el mismo estado
     return state
  }

  export function useStore () {
      // 3. Usar el hook useReducer
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
    }, dispatch] = useReducer(reducer, initialState)

    const interChangeLanguages = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAGES'})
    }

    const setFromLanguages = (payload: FromLanguage) => {
        dispatch({ type: 'SET_FROM_LANGUAGE', payload })
    }

    const setToLanguages = (payload: Language) => {
        dispatch({ type: 'SET_TO_LANGUAGE', payload })
    }

    const setFromText = (payload: string) => {
        dispatch({ type: 'SET_FROM_TEXT', payload})
    }

    const setResult = (payload: string) => {
        dispatch({type: 'SET_RESULT', payload})
    }

    return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        interChangeLanguages,
        setFromLanguages,
        setToLanguages,
        setFromText,
        setResult
    }
  }
  