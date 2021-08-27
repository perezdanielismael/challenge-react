import React from 'react'
import { useState } from 'react'
import './tarjeta.css'
const TarjetaEquipo = (props) => {
    const [detalle, setDetalle] = useState(false)
    const verDetalle = (item) =>{
        if(detalle === false){
            setDetalle(true)
        }else{
            setDetalle(false)
        }
        console.log(item.name)
        console.log(item.appearance.height[1])
        console.log(item.appearance.weight[1])
        console.log(item.biography.aliases[0])
        console.log(item.appearance['eye-color'])
        console.log(item.appearance['hair-color'])
        console.log(item.work.base)
    }
    return (
        <div>
            {
                detalle === true ? 
                <div className='col-12 d-flex justify-content-around'>
                <div className='text-start'>
                    <h4>Detalles</h4>
                    <p>Nombre: {props.item.name}</p>
                    <p>Alias: {props.item.biography.aliases[0]}</p>
                    <p>Peso: {props.item.appearance.weight[1]}</p>
                    <p>Altura: {props.item.appearance.height[1]}</p>
                    <p>Color de Ojos: {props.item.appearance['eye-color']}</p>
                    <p>Color de Cabello: {props.item.appearance['hair-color']}</p>
                    <p>Lugar de Trabajo: {props.item.work.base}</p>
                </div>
            </div>  : 
            <div className='col-12 d-flex justify-content-around'>
                <div >
                    <h5 className='text-center'>{props.nombre}</h5> 
                    <img className='img-tarjeta'  src={props.imagen} alt="" />
                </div> 
                <div className='text-start'>
                    <p className='mb-0'>Combat: {!parseInt(props.combat) ? 0 : props.combat}</p>
                    <p className='mb-0'>Durability: {!parseInt(props.durability) ? 0 : props.durability}</p>
                    <p className='mb-0'>Power: {!parseInt(props.power) ? 0 : props.power}</p>
                    <p className='mb-0'>Intelligence: {!parseInt(props.intelligence) ? 0 : props.intelligence}</p>
                    <p className='mb-0'>Speed: {!parseInt(props.speed) ? 0 : props.speed}</p>
                    <p className='mb-0'>Strength: {!parseInt(props.strength) ? 0 : props.strength}</p>
                </div>
            </div> 
            } 
            <div className='d-flex col-12'>
                <button onClick={()=>verDetalle(props.item)} className="btn btn-primary mt-2 me-1">Detalle</button>
            </div>             
        </div>
    )
}
export default TarjetaEquipo
