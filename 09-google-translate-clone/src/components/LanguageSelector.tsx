import { Form } from "react-bootstrap"
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../constants/constants"
import { LanguageSelectorProps } from "../Types/LanguageSelectorProps.type"
import { type FC } from "react"
import { Language } from "../Types/Language.type"
import { SectionType } from "../enum/SectionType.enum"

// FC significa Function Component que sirve para paremetrizar el tipo de onChange en este caso. Informa de las props del componente a React.
export const LanguageSelector: FC<LanguageSelectorProps> = ( { onChange, type, value } ) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // Le dices que al eento, esto que es un string, trátalo como uno de los lenguages, porque value es de tipo string y tienes que especificárselo
        onChange(event.target.value as Language)
    }

    return (
        <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value} >
            {/* Para incluir la opción detectar idioma solo en el primer input from */}
            {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option> }

            {/* Usando entries se saca tanto la key como el value del objeto */}
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>
                    {literal}
                </option>
            ))}
        </Form.Select>
    )
}