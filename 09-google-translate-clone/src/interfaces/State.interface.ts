import { FromLanguage, Language } from "../Types/Language.type";

 export interface State {
    
    fromLanguage: FromLanguage,
    toLanguage: Language,
    fromText: string,
    result: string,
    loading: boolean
}