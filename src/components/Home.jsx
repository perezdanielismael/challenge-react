import React from 'react'
import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { activoContext } from './context/ActivoProvider'
import { useContext } from 'react'
import Equipos from './equipo/Equipos'
import Buscador from './buscador/Buscador'
import Navbar from './Navbar'

const Home = (props) => {
    
    const {setActivo} = useContext(activoContext)
   
    useEffect(()=>{
        setActivo(true)
        if(localStorage.getItem('token')){
           props.history.push('/Home')
        } else{
            props.history.push('/')
            setActivo(false)
        }
       
    },[props.history, props.usuario, setActivo])

    return (
        <div className='row d-flex text-center align-items-center flex-column'>
            <Navbar />
            <Buscador/>
            <Equipos/>
        </div>
    )
}

export default withRouter(Home)
