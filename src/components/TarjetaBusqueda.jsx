import React from 'react'
import { activoContext } from './context/ActivoProvider'
import { useContext } from 'react'
import './tarjeta.css'
const TarjetaBusqueda = (props) => {

    const {equipo1, setEquipo1, equipo2, setEquipo2} = useContext(activoContext)
    const agregarEquipo1 = async(heroe)=>{
        let {power, speed, intelligence, strength, durability} = heroe.powerstats
        power = parseInt(power)  
        speed = parseInt(speed)
        intelligence = parseInt(intelligence)
        strength = parseInt(strength)
        durability = parseInt(durability)
        let error = ''
        const valor = equipo1.find(item => item.id === heroe.id)
        if(valor){
            console.log('No se puede agregar dos veces al mismo jugador')
            error = 'No se puede agregar dos veces al mismo jugador'
            return error
        }
        
        if(equipo1.length > 5){
            error = 'El maximo permitido son 6 superheroes'
            return error
        }
        setEquipo1([...equipo1, heroe])
       console.log(equipo1)
       localStorage.setItem('equipo1', JSON.stringify(equipo1))
    }
    const agregarEquipo2 =async(heroe)=>{
        let error = ''
        const valor = equipo2.find(item => item.id === heroe.id)
        if(valor){
            console.log('No se puede agregar dos veces al mismo jugador')
            error = 'No se puede agregar dos veces al mismo jugador'
            return error
        }
        console.log(valor)
        if(equipo2.length > 5){
            error = 'El maximo permitido son 6 superheroes'
            return console.log(error) 
        }
       await setEquipo2([...equipo2, heroe])
       localStorage.setItem('equipo2', JSON.stringify(equipo2))
       console.log(equipo2)
    }

    return (
        <div className="contenedor-tarjeta"  style={{width: '18rem'}}>  
            {
                <div className='contenido-tarjeta'>
                    <div className='img-name'>
                        <img src={props.imagen} className="img-tarjeta" alt="..."/>
                        <h5 className="card-title">{props.nombre}</h5>
                    </div>
                    <div className="agregar">
                            <div className='section-btn'>
                                <h6 className='mb-0'>Equipo 1</h6>
                                <button type='button' onClick={()=>agregarEquipo1(props.heroe)} className="btn btn-dark"><i class="fas fa-plus"></i></button>
                            </div>
                            <div className='section-btn mt-1'>
                                <h6 className='mb-0'>Equipo 2</h6>
                                <button  type='button' onClick={()=>agregarEquipo2(props.heroe)} className="btn btn-dark"><i class="fas fa-plus"></i></button>
                            </div>
                    </div>
                </div>
            }   
            
        </div>
       
    )
}

export default TarjetaBusqueda
