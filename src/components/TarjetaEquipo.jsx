import React from 'react'
import { useState } from 'react'
import './tarjeta.css'
const TarjetaEquipo = (props) => {

    const [detalle, setDetalle] = useState(false)
    const verDetalle = (item) =>{
        setDetalle(true)
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
                </div>
            </div>  : 
            <div className='col-12 d-flex justify-content-around'>
                <div >
                    <h5 className='text-center'>{props.nombre}</h5> 
                    <img className='img-tarjeta'  src={props.imagen} alt="" />
                </div> 
                <div className='text-start'>
                    <p className='mb-0'>Combat: {props.combat}</p>
                    <p className='mb-0'>Durability: {props.durability}</p>
                    <p className='mb-0'>Power: {props.power}</p>
                    <p className='mb-0'>Intelligence: {props.intelligence}</p>
                    <p className='mb-0'>Speed: {props.speed}</p>
                    <p className='mb-0'>Strength: {props.strength}</p>
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
