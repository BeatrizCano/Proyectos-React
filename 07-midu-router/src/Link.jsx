/* eslint-disable react/prop-types */
import { BUTTONS, EVENTS } from "./consts"

// eslint-disable-next-line react-refresh/only-export-components
export function navigate (href) {
    window.history.pushState({}, '', href)
    //Crear un evento personalizado
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
  }

export function Link ({ target, to, ...props }) {
    const handleClick = (event) => {      

        const isMainEvent = event.button === BUTTONS.primary //primary click
        const isModifiedEvent = event.metakey || event.altkey || event.ctrlkey || event.shiftkey // cmd/ctrl + click
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault()
            navigate(to) //navegación con SPA
            window.scrollTo(0, 0)//crear el scroll
        }
        
    }

    return <a onClick={handleClick} href={to} target={target} {...props} ></a>
}
  