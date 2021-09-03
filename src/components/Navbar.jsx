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
        <nav className=' container d-flex mt-2  justify-content-between'>
            <img className='img-logo ms-3' src="https://campus.alkemy.org/static/media/logo.a56b5107.svg" alt="" />
            <div>
              
        {
            activo === true && <button className='btn btn-danger me-3'onClick={() => cerrarSesion()}>Sign off</button>
        }  
               
            </div>
           
        </nav>
    )
}

export default withRouter( Navbar)
