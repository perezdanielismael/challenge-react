import React from 'react'
import { activoContext } from './context/ActivoProvider'
import { useContext } from 'react'
import TarjetaEquipo from './TarjetaEquipo'
import Powerstats from './Powerstats'

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
            <div className="col-12 mt-4">
                <h2>Equipo 1</h2> 
                <Powerstats equipo={equipo1}/>
                <ul className="list-group">
                    {
                       equipo1.length === 0 ? 'Aun no tiene superheroes' :
                       equipo1.map((item)=>(       
                           <li key={item.id} className='list-group-item d-flex flex-column align-items-center'>
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
                               <div className='d-flex col-12'>
                                    <button onClick={()=>eliminarEquipo1(item.id)} className="btn btn-danger mt-2 ms-1">X</button>
                                </div> 
                            </li>
                       ))
                    }
                </ul>
            </div>
            <div className="col-12 mt-4">
                <h2>Equipo 2</h2> 
                <Powerstats equipo={equipo2}/>
                <ul className="list-group">
                    {
                       equipo2.length === 0 ? 'Aun no tiene superheroes' :
                       equipo2.map((item)=>(
                        <li key={item.id} className='list-group-item d-flex flex-column align-items-center'>
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
                               <div className='d-flex col-12'>
                                    <button onClick={()=>eliminarEquipo2(item.id)} className="btn btn-danger mt-2 ms-1">X</button>
                                </div>
                            </li>
                       ))
                    }
                </ul>
            </div>
        </div> :
        <div className='container row d-flex flex-column align-items-center'>  
        <div className="col-12 mt-4">
            <h2>Equipo 2</h2> 
            <Powerstats equipo={equipo2}/>
            <ul className="list-group">
                {
                   equipo2.length === 0 ? 'Aun no tiene superheroes' :
                   equipo2.map((item)=>(
                    <li key={item.id} className='list-group-item d-flex flex-column align-items-center'>
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
                           <div className='d-flex col-12'>
                                <button onClick={()=>eliminarEquipo2(item.id)} className="btn btn-danger mt-2 ms-1">X</button>
                            </div>
                        </li>
                   ))
                }
            </ul>
        </div>
        <div className="col-12 mt-4">
            <h2>Equipo 1</h2> 
            <Powerstats equipo={equipo1}/>
            <ul className="list-group">
                {
                   equipo1.length === 0 ? 'Aun no tiene superheroes' :
                   equipo1.map((item)=>(
                        
                       <li key={item.id} className='list-group-item d-flex flex-column align-items-center'>
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
                           <div className='d-flex col-12'>
                                <button onClick={()=>eliminarEquipo1(item.id)} className="btn btn-danger mt-2 ms-1">X</button>
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