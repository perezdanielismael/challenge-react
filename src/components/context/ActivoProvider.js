import React, { createContext } from 'react'
import { useState } from 'react'
export const activoContext = createContext()

const ActivoProvider = (props) => {

    const [activo, setActivo] = useState(false)
    const [equipo1, setEquipo1] = useState([])
    const [equipo2, setEquipo2] = useState([])
    return (
        <activoContext.Provider value={{activo, setActivo, equipo1, setEquipo1, equipo2, setEquipo2}}>
            {props.children}
        </activoContext.Provider>
    )
}

export default ActivoProvider
