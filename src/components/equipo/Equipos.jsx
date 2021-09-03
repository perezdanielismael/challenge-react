import React from 'react'
import { activoContext } from '../context/ActivoProvider'
import { useContext } from 'react'
import TarjetaEquipo from './TarjetaEquipo'
import Powerstats from '../powerstats/Powerstats'
import './equipo.css'
const Equipos = () => {
    const {equipo1, setEquipo1, equipo2, setEquipo2, promedio1, promedio2} = useContext(activoContext)
    //Funciones para eliminar un heroe del equipo
    let eliminarEquipo1 = (id)=>{
        let nuevoArray = equipo1.filter(item => id !== item.id)
        setEquipo1([...nuevoArray])
        localStorage.setItem('equipo1', JSON.stringify(equipo1))
        return setEquipo1
     }
    let eliminarEquipo2 = (id)=>{
        let nuevoArray2 = equipo2.filter(item => id !== item.id)
        setEquipo2([...nuevoArray2])
        localStorage.setItem('equipo2', JSON.stringify(equipo2))
        return setEquipo2
     }
 //Recorre los equipos para agregar peso y altura promedio 
    let peso = 0, altura = 0, peso2 = 0, altura2 = 0
        equipo1.map((item)=>{
            peso = peso + parseInt(item.appearance.weight[1])
            altura = altura + parseInt(item.appearance.height[1])
            return {peso, altura} 
        })
        peso = Math.round( peso / equipo1.length)
        altura = Math.round(altura / equipo1.length)
        
        equipo2.map((item)=>{
            peso2 = peso2 + parseInt(item.appearance.weight[1])
            altura2 = altura2 + parseInt(item.appearance.height[1])
            return {peso2, altura2}
        })
        peso2 = Math.round( peso2 / equipo2.length)
        altura2 = Math.round(altura2 / equipo2.length)
    return (
            promedio1 >= promedio2 ? 
        <div className='container row d-flex flex-column align-items-center'>  
            <div className="col-12 mt-4 equipo">
                <div className='titulo-equipo'>
                    <div className='equipo-promedio'>
                        <h2>Team 1</h2>  
                        <span className='promedio'><i className="fas fa-bolt"></i><h2 className='mb-1'>{promedio1}</h2></span>
                    </div>
                    <div className='peso-altura'>
                        {peso > 0 && <h6 className='mb-0'>Weight: {peso}Kg</h6> } 
                        {altura > 0 && <h6 className='mb-0'>Heigth: {altura}Cm</h6> } 
                    </div>
                </div> 
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
                <div className='titulo-equipo'>
                    <div className='equipo-promedio'>
                        <h2>Team 2</h2>  
                        <span className='promedio'><i className="fas fa-bolt"></i><h2 className='mb-1'>{promedio2}</h2></span>
                    </div>
                    <div className='peso-altura'>
                        {peso2 > 0 && <h6 className='mb-0'>Weight: {peso2}Kg</h6> } 
                        {altura2 > 0 && <h6 className='mb-0'>Heigth: {altura2}Cm</h6> } 
                    </div>
                </div>  
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
                <div className='titulo-equipo'>
                    <div className='equipo-promedio'>
                        <h2>Team 2</h2>  
                        <span className='promedio'><i className="fas fa-bolt"></i><h2 className='mb-1'>{promedio2}</h2></span>
                    </div>
                    <div className='peso-altura'>
                        {peso2 > 0 && <h6 className='mb-0'>Weight: {peso2}Kg</h6> } 
                        {altura2 > 0 && <h6 className='mb-0'>Heigth: {altura2}Cm</h6> } 
                    </div>
                </div>  
                <Powerstats equipo={equipo2}/>
                <ul className="list-group lista-equipo">
                    {
                       equipo2.length === 0 ? '' :
                       equipo2.map((item)=>(
                        <li key={item.id} className='list-group-item item-lista border-top-1'>
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
                <div className='titulo-equipo'>
                    <div className='equipo-promedio'>
                        <h2>Team 1</h2>  
                        <span className='promedio'><i className="fas fa-bolt"></i><h2 className='mb-1'>{promedio1}</h2></span>
                    </div>
                    <div className='peso-altura'>
                        {peso > 0 && <h6 className='mb-0'>Weight: {peso}Kg</h6> } 
                        {altura > 0 && <h6 className='mb-0'>Heigth: {altura}Cm</h6> } 
                    </div>
                </div> 
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
export default Equipos