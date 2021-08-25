import React from 'react'
import { activoContext } from './context/ActivoProvider'
import { useContext } from 'react'
import './tarjeta.css'
import { useState } from 'react'
const TarjetaBusqueda = (props) => {
    const [cargando, setCargando] = useState(false)

    const {equipo1, setEquipo1, equipo2, setEquipo2} = useContext(activoContext)
    const agregarEquipo1 = (heroe)=>{
        let error = ''
        if(equipo1.length > 5){
            error = 'El maximo permitido son 6 superheroes'
            return error
        }

       setEquipo1([...equipo1, heroe])
       console.log(equipo1)
       localStorage.setItem('equipo1', equipo1)
    }
    const agregarEquipo2 =(heroe)=>{
        let error = ''
        if(equipo2.length > 5){
            error = 'El maximo permitido son 6 superheroes'
            return console.log(error) 
        }
       setEquipo2([...equipo2, heroe])
       console.log(equipo1)
       localStorage.setItem('equipo2', equipo2)
    }

    return (
        <div className="tarjeta d-flex"  style={{width: '18rem'}}>  
            {
                <div className='d-flex align-items-center'>
                    <div className='me-2'>
                    
                        <img src={props.imagen} className="img-tarjeta" alt="..."/>
                        <h5 className="card-title">{props.nombre}</h5>
                    </div>
                    <div className="ms-2">
                       
                        <div>
                            <div className='d-flex align-items-center'>
                                <h6 className='mb-0 me-2'>Equipo 1</h6>
                                <button type='button' onClick={()=>agregarEquipo1(props.heroe)} className="btn btn-dark">+</button>
                            </div>
                            <div className='d-flex  align-items-center mt-2'>
                                <h6 className='mb-0 me-1'>Equipo 2</h6>
                                <button  type='button' onClick={()=>agregarEquipo2(props.heroe)} className="btn btn-dark">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            }   
            
        </div>
       
    )
}

export default TarjetaBusqueda
