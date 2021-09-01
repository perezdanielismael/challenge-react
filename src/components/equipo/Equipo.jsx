import React from 'react'
import { activoContext } from '../context/ActivoProvider'
import { useContext } from 'react'
import TarjetaEquipo from './TarjetaEquipo'
import Powerstats from '../powerstats/Powerstats'
import './equipo.css'
const Equipo = () => {
    const {equipo1, setEquipo1, equipo2, setEquipo2, promedio1, promedio2} = useContext(activoContext)
    let eliminarEquipo2 = (id)=>{
        let nuevoArray2 = equipo2.filter(item => id !== item.id)
        setEquipo2([...nuevoArray2])
        localStorage.setItem('equipo2', JSON.stringify(equipo2))
        return setEquipo2
     }
    let eliminarEquipo1 = (id)=>{
       let nuevoArray = equipo1.filter(item => id !== item.id)
       setEquipo1([...nuevoArray])
       localStorage.setItem('equipo1', JSON.stringify(equipo1))
       return setEquipo1
    }
    return (
            promedio1 >= promedio2 ? 
        <div className='container row d-flex flex-column align-items-center'>  
            <div className="col-12 mt-4 equipo">
                <h2 className='titulo-equipo'>Equipo 1 <span className='promedio-equipo'><i className="fas fa-bolt"></i>{promedio1}</span></h2> 
                <Powerstats equipo={equipo1}/>
                <ul className="list-group lista-equipo">
                    {
                       equipo1.length === 0 ? '' :
                       equipo1.map((item)=>(       
                           <li key={item.id} className='list-group-item item-lista'>
                                <div className='col-12 boton-eliminar'>
                                    <button onClick={()=>eliminarEquipo1(item.id)} className="btn btn-danger"><i className="fas fa-times"></i></button>
                                </div>
                               <TarjetaEquipo
                                item={item}
                                nombre={item.name}
                                imagen={item.image.url}
                                combat={item.powerstats.combat}
                                durability={item.powerstats.durability}
                                power={item.powerstats.power}
                                intelligence={item.powerstats.intelligence}
                                speed={item.powerstats.speed}
                                strength={item.powerstats.strength}
                               />
                               
                            </li>
                       ))
                    }
                </ul>
            </div>
            <div className="col-12 mt-4 equipo">
                <h2 className='titulo-equipo'>Equipo 2 <span className='promedio-equipo'><i className="fas fa-bolt"></i>{promedio2}</span></h2> 
                <Powerstats equipo={equipo2}/>
                <ul className="list-group lista-equipo">
                    {
                       equipo2.length === 0 ? '' :
                       equipo2.map((item)=>(
                        <li key={item.id} className='list-group-item item-lista'>
                                <div className='col-12 boton-eliminar'>
                                    <button onClick={()=>eliminarEquipo2(item.id)} className="btn btn-danger"><i className="fas fa-times"></i></button>
                                </div>
                                <TarjetaEquipo
                                item={item}
                                nombre={item.name}
                                imagen={item.image.url}
                                combat={item.powerstats.combat}
                                durability={item.powerstats.durability}
                                power={item.powerstats.power}
                                intelligence={item.powerstats.intelligence}
                                speed={item.powerstats.speed}
                                strength={item.powerstats.strength}
                               />
                               
                            </li>
                       ))
                    }
                </ul>
            </div>
        </div> :
        <div className='container row d-flex flex-column align-items-center'>  
        <div className="col-12 mt-4 equipo">
                <h2 className='titulo-equipo'>Equipo 2 <span className='promedio-equipo'><i className="fas fa-bolt"></i>{promedio2}</span></h2> 
                <Powerstats equipo={equipo2}/>
                <ul className="list-group lista-equipo">
                    {
                       equipo2.length === 0 ? '' :
                       equipo2.map((item)=>(
                        <li key={item.id} className='list-group-item item-lista'>
                                <div className='col-12 boton-eliminar'>
                                    <button onClick={()=>eliminarEquipo2(item.id)} className="btn btn-danger"><i className="fas fa-times"></i></button>
                                </div>
                                <TarjetaEquipo
                                item={item}
                                nombre={item.name}
                                imagen={item.image.url}
                                combat={item.powerstats.combat}
                                durability={item.powerstats.durability}
                                power={item.powerstats.power}
                                intelligence={item.powerstats.intelligence}
                                speed={item.powerstats.speed}
                                strength={item.powerstats.strength}
                               />
                               
                            </li>
                       ))
                    }
                </ul>
            </div>
        <div className="col-12 mt-4 equipo">
                <h2 className='titulo-equipo'>Equipo 1 <span className='promedio-equipo'><i className="fas fa-bolt"></i>{promedio1}</span></h2> 
                <Powerstats equipo={equipo1}/>
                <ul className="list-group lista-equipo">
                    {
                       equipo1.length === 0 ? '' :
                       equipo1.map((item)=>(       
                           <li key={item.id} className='list-group-item item-lista'>
                                <div className='col-12 boton-eliminar'>
                                    <button onClick={()=>eliminarEquipo1(item.id)} className="btn btn-danger"><i className="fas fa-times"></i></button>
                                </div>
                               <TarjetaEquipo
                                item={item}
                                nombre={item.name}
                                imagen={item.image.url}
                                combat={item.powerstats.combat}
                                durability={item.powerstats.durability}
                                power={item.powerstats.power}
                                intelligence={item.powerstats.intelligence}
                                speed={item.powerstats.speed}
                                strength={item.powerstats.strength}
                               />
                               
                            </li>
                       ))
                    }
                </ul>
            </div>
    </div>  
    )
}
export default Equipo