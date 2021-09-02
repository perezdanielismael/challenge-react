import React from 'react'
import { useState } from 'react'
import '../buscador/tarjetaBusqueda.css'
import './tarjetaEquipo.css'
const TarjetaEquipo = (props) => {
    const [detalle, setDetalle] = useState(false)
    const verDetalle = (item) =>{
        if(detalle === false){
            setDetalle(true)
        }else{
            setDetalle(false)
        }
    }
    return (
        <div className='contenedor'>
            {
                detalle === true ? 
                <div className='detalle'>
                    <div className='items-detalle text-start'>
                        <p className='mb-0'><b>Name:</b> {props.item.name}</p>
                        <p className='mb-0'><b>Alias:</b>  {props.item.biography.aliases[0]}</p>
                        <p className='mb-0'><b>Weight:</b> {props.item.appearance.weight[1]}</p>
                        <p className='mb-0'><b>Height: </b> {props.item.appearance.height[1]}</p>
                        <p className='mb-0'><b>Eye Color: </b> {props.item.appearance['eye-color']}</p>
                        <p className='mb-0'><b>Hair Color: </b> {props.item.appearance['hair-color']}</p>
                        <p className='mb-0'><b>Workplace: </b> {props.item.work.base}</p>
                    </div>
            </div>  : 
            <div className='col-12 info-heroe'>
                <div >
                    <h4 className='text-center titulo-equipo'>{props.nombre}</h4> 
                    <img className='img-tarjeta-equipo'  src={props.imagen} alt="" />
                </div> 
                <div className='poder-individual'>
                    <div className='text-start mt-1'>
                        <p className='mb-0'>Combat: {!parseInt(props.combat) ? 0 : props.combat}</p>
                        <p className='mb-0'>Durability: {!parseInt(props.durability) ? 0 : props.durability}</p>
                        <p className='mb-0'>Power: {!parseInt(props.power) ? 0 : props.power}</p>
                    </div>
                    <div className='text-start mt-1'>
                        <p className='mb-0'>Intelligence: {!parseInt(props.intelligence) ? 0 : props.intelligence}</p>
                        <p className='mb-0'>Speed: {!parseInt(props.speed) ? 0 : props.speed}</p>
                        <p className='mb-0'>Strength: {!parseInt(props.strength) ? 0 : props.strength}</p>
                    </div>
                </div>
            </div> 
            } 
            <div className='col-12 mt-3 mb-3 d-grid'>
                <button onClick={()=>verDetalle(props.item)} className="btn btn-primary">
                    {
                        detalle === true ? 'Poderes' : 'Detalle'
                }</button>
            </div>             
        </div>
    )
}
export default TarjetaEquipo
