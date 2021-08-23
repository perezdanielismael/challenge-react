import React from 'react'
import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { activoContext } from './context/ActivoProvider'
import { useContext } from 'react'
import Equipo from './Equipo'
import Buscador from './Buscador'

const Admin = (props) => {
    
    const {setActivo} = useContext(activoContext)
   
    useEffect(()=>{
        setActivo(true)
        if(localStorage.getItem('token')){
            console.log('El usuario ingreso de manera exitosa')
        } else{
            console.log('El usuario no ha ingresado de manera correcta')
            props.history.push('/')
            setActivo(false)
        }
    },[props.history, props.usuario, setActivo])

    return (
        <div className='row d-flex text-center align-items-center flex-column'>
            <Buscador/>
            <Equipo/>
        </div>
    )
}

export default withRouter(Admin)
