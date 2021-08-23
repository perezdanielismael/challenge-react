import React from 'react'
import { activoContext } from './context/ActivoProvider'
import { useContext } from 'react'


const Equipo = () => {
    const {equipo1, setEquipo1, equipo2, setEquipo2} = useContext(activoContext)
    
    return (
        <div className='container row d-flex justify-content-around text-center'>
            <div className="col-12 mt-4">
                <h2>Equipo 1</h2>  
                <ul className="list-group">
                    {
                       equipo1.length === 0 ? 'Aun no tiene superheroes' :
                       equipo1.map((item)=>(
                           <li key={item.id} className='list-group-item d-flex flex-column align-items-center'>
                                <h5 className='text-center'>{item.name}</h5> 
                               <img className='col-3' src={item.image.url} alt="" />
                                <div className='col-12 text-start row d-flex'> 
                                    <div className='col-6'>
                                        <p className='mb-0 '>Combat: {item.powerstats.combat}</p>
                                        <p className='mb-0'>Durability: {item.powerstats.durability}</p>
                                        <p className='mb-0'>Power: {item.powerstats.power}</p>
                                    </div>
                                    <div className='col-6'>
                                        <p className='mb-0'>Intelligence: {item.powerstats.intelligence}</p>
                                        <p className='mb-0'>Speed: {item.powerstats.speed}</p>
                                        <p className='mb-0'>Strength: {item.powerstats.strength}</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-primary mt-2 me-1">Detalle</button>
                                    <button className="btn btn-danger mt-2 ms-1">Eliminar</button>
                                </div>
                            </li>
                       ))
                    }
                </ul>
            </div>
            <div className="row col-12 mt-4">
                <h2>Equipo 2</h2>  
                <ul className="list-group row col-12">
                    {
                       equipo2.length === 0 ? 'Aun no tiene superheroes' :
                       equipo2.map((item)=>(
                        <li key={item.id} className='list-group-item d-flex flex-column align-items-center'>
                                <h5 className='text-center'>{item.name}</h5> 
                               <img className='col-3' src={item.image.url} alt="" />
                                <div className='col-12 text-start row d-flex'> 
                                    <div className='col-6'>
                                        <p className='mb-0 '>Combat: {item.powerstats.combat}</p>
                                        <p className='mb-0'>Durability: {item.powerstats.durability}</p>
                                        <p className='mb-0'>Power: {item.powerstats.power}</p>
                                    </div>
                                    <div className='col-6'>
                                        <p className='mb-0'>Intelligence: {item.powerstats.intelligence}</p>
                                        <p className='mb-0'>Speed: {item.powerstats.speed}</p>
                                        <p className='mb-0'>Strength: {item.powerstats.strength}</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-primary mt-2 me-1">Detalle</button>
                                    <button className="btn btn-danger mt-2 ms-1">Eliminar</button>
                                </div>
                            </li>
                       ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Equipo
