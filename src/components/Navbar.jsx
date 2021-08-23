import { activoContext } from './context/ActivoProvider'
import { withRouter } from 'react-router-dom'
import { useContext } from 'react'

const Navbar = (props) => {
   
    const {activo, setActivo} = useContext(activoContext)

   const cerrarSesion = () =>{
        localStorage.removeItem('token')
        props.history.push('/')
        setActivo(false)
    }
    
    return (
        <nav className='d-flex justify-content-between mt-2 container'>
            <h2>Hero</h2>
            <div>
                <button className='btn btn-primary me-2'>Inicio</button>
              
        {
            activo === true && <button className='btn btn-danger'onClick={() => cerrarSesion()}>Cerrar Sesión</button>
        }  
               
            </div>
           
        </nav>
    )
}

export default withRouter( Navbar)
