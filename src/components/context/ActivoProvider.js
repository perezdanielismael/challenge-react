import React, { createContext } from 'react'
import { useState } from 'react'
export const activoContext = createContext()

const ActivoProvider = (props) => {

    const [activo, setActivo] = useState(false)
    const [equipo1, setEquipo1] = useState([])
    const [equipo2, setEquipo2] = useState([])
    const [promedio1, setPromedio1] = useState(0)
    const [promedio2, setPromedio2] = useState(0)
    const [error, setError] = useState(null)
    return (
        <activoContext.Provider value={{activo, setActivo, setPromedio1, setPromedio2,
        equipo1, setEquipo1, equipo2, setEquipo2, promedio1, promedio2, error, setError}}>
            {props.children}
        </activoContext.Provider>
    )
}

export default ActivoProvider
