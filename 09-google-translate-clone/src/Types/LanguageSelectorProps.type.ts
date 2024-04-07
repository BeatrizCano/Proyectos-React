import { SectionType } from "../enum/SectionType.enum";
import { type FromLanguage, type  Language } from "./Language.type";

export type LanguageSelectorProps =
    | {type: SectionType.From , value: FromLanguage, onChange: (language: FromLanguage) => void}
    | {type: SectionType.To , value: Language, onChange: (language: Language) => void}
 