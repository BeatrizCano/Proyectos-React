import { Form } from "react-bootstrap"
import { TextAreaProps } from "../interfaces/TextAreaProps.interface"
import { SectionType } from '../enum/SectionType.enum';
import React from "react";

const commonStyles = { border: 0, height: '200px'} // aquí se añade 'resize: none' pero da fallo

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
    if (type === SectionType.From) return 'Introducir texto'
    if (loading === true) return 'Cargando...'
    return 'Traducción'
}

export const TextArea = ({ loading, value, onChange, type } : TextAreaProps ) => {

    const styles = type === SectionType.From 
        ? commonStyles
        : { ...commonStyles, backgroundColor: '#f5f5f5'}

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }

    return (
        <Form.Control 
            autoFocus ={type === SectionType.From}
            as='textarea' // que elemento quiero renderizar
            disabled={type === SectionType.To}
            placeholder={getPlaceholder({ type, loading })}          
            style={styles}
            value={value}
            onChange={handleChange}
         />
    )
}