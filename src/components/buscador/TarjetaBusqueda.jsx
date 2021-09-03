import React from 'react'
import { activoContext } from '../context/ActivoProvider'
import { useContext } from 'react'
import './tarjetaBusqueda.css'

const TarjetaBusqueda = (props) => {
    let resultado = 0
    let advertencia = ''
    const {equipo1, setEquipo1, equipo2, setEquipo2, error, setError} = useContext(activoContext)
    
    const promedioIndividual = (power,speed,intelligence,strength,durability, combat)=>{
        resultado = (power + speed + intelligence + strength + durability + combat) / 6
       return Math.round(resultado)
    }
    //Función para agregar equipo al equipo 1 validando que no se repita el heroe y 6 heroes como máximo
    const agregarEquipo1 = async(heroe)=>{
        setError(null)
        let {power, speed, intelligence, strength, durability, combat} = heroe.powerstats
        isNaN(parseInt(power)) ? power = 0 : (power = parseInt(power))
        isNaN(parseInt(speed)) ? speed = 0 : (speed = parseInt(speed))
        isNaN(parseInt(intelligence)) ? intelligence = 0 : (intelligence =  parseInt(intelligence))
        isNaN(parseInt(strength)) ? strength = 0 : strength = parseInt(strength)
        isNaN(parseInt(durability)) ? durability = 0 : durability = parseInt(durability)
        isNaN(parseInt(combat)) ? combat = 0 : combat = parseInt(combat)
        promedioIndividual(power, speed, intelligence,strength, durability, combat)
        
        const valor = equipo1.find(item => item.id === heroe.id)
        if(valor){
            advertencia = 'No se puede agregar dos veces al mismo jugador'
            setError(advertencia)
            return error
        }
        if(equipo1.length > 5){
           advertencia = 'El maximo permitido son 6 superheroes'
           setError(advertencia)
           return error
        }

        setEquipo1([...equipo1, heroe])
       localStorage.setItem('equipo1', JSON.stringify(equipo1))
    }
    //Función para agregar equipo al equipo 2 validando que no se repita el heroe y 6 heroes como máximo
    const agregarEquipo2 =async(heroe)=>{
        setError(null)
        let {power, speed, intelligence, strength, durability, combat} = heroe.powerstats
        isNaN(parseInt(power)) ? power = 0 : (power = parseInt(power))
        isNaN(parseInt(speed)) ? speed = 0 : (speed = parseInt(speed))
        isNaN(parseInt(intelligence)) ? intelligence = 0 : (intelligence =  parseInt(intelligence))
        isNaN(parseInt(strength)) ? strength = 0 : strength = parseInt(strength)
        isNaN(parseInt(durability)) ? durability = 0 : durability = parseInt(durability)
        isNaN(parseInt(combat)) ? combat = 0 : combat = parseInt(combat)
        promedioIndividual(power, speed, intelligence,strength, durability, combat)
        const valor = equipo2.find(item => item.id === heroe.id)
        if(valor){
            let advertencia = 'No se puede agregar dos veces al mismo jugador'
            setError(advertencia)
            return error
        }
        if(equipo2.length > 5){
            let advertencia = 'El maximo permitido son 6 superheroes'
            setError(advertencia)
            return error
        } 
       await setEquipo2([...equipo2, heroe])
       localStorage.setItem('equipo2', JSON.stringify(equipo2))
    }

    return (
        <>
             <div className="contenedor-tarjeta" >  
            {
                <div className='contenido-tarjeta'>
                    <div className='img-name'>
                        <img className="img-tarjeta" src={props.imagen}  alt="Imagen de un superheroe"/>
                        <h5 className="card-title mb-0">{props.nombre}</h5>
                    </div>
                    <div className="agregar">
                            <div className='section-btn'>
                                <button type='button' onClick={()=>agregarEquipo1(props.heroe)} className="btn btn-outline-light"><i class="fas fa-plus"></i> TEAM 1</button>
                            </div>
                            <div className='section-btn mt-1'>
                                <button  type='button' onClick={()=>agregarEquipo2(props.heroe)} className="btn btn-outline-light"><i class="fas fa-plus"></i> TEAM 2</button>
                            </div>
                    </div>
                   
                </div>
            }   
        </div>
        </>
       
       
    )
}

export default TarjetaBusqueda
