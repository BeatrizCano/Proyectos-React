import { SectionType } from "../enum/SectionType.enum"


export interface TextAreaProps { 
    type: SectionType,
    loading?: boolean, 
    onChange: (value: string) => void, 
    value: string 
}
   