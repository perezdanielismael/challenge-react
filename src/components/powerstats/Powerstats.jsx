import React from 'react'
import { activoContext } from '../context/ActivoProvider'
import { useContext } from 'react'
import './powerstats.css'
const Powerstats = (props) => {
    const {equipo1, equipo2, setPromedio1, setPromedio2} = useContext(activoContext)
     //-----------------Equipo 2 Reduce --------------------------------------//
    const power1 = equipo1.reduce((acc, item) => {
      let temporal = !isNaN(parseInt(item.powerstats.power))
        temporal ? acc += parseInt(item.powerstats.power) : acc += 0
      return  acc 
    },0)
        const speed1 = equipo1.reduce((acc, item) => {
        let temporal = !isNaN(parseInt(item.powerstats.speed))
          temporal ? acc += parseInt(item.powerstats.speed) : acc += 0
        return  acc 
      },0)
      const strength1 = equipo1.reduce((acc, item) => {
        let temporal = !isNaN(parseInt(item.powerstats.strength))
          temporal ? acc += parseInt(item.powerstats.strength) : acc += 0
        return  acc 
      },0)
      const durability1 = equipo1.reduce((acc, item) => {
        let temporal = !isNaN(parseInt(item.powerstats.durability))
          temporal ? acc += parseInt(item.powerstats.durability) : acc += 0
        return  acc 
      },0)
      const intelligence1 = equipo1.reduce((acc, item) => {
        let temporal = !isNaN(parseInt(item.powerstats.intelligence))
          temporal ? acc += parseInt(item.powerstats.intelligence) : acc += 0
        return  acc 
      },0)
      const combat1 = equipo1.reduce((acc, item) => {
        let temporal = !isNaN(parseInt(item.powerstats.combat))
          temporal ? acc += parseInt(item.powerstats.combat) : acc += 0
        return  acc 
      },0)
    //-----------------Equipo 2 Reduce --------------------------------------//
        const power2 = equipo2.reduce((acc, item) => {
        let temporal = !isNaN(parseInt(item.powerstats.power))
          temporal ? acc += parseInt(item.powerstats.power) : acc += 0
        return  acc 
      },0)
      const speed2 = equipo2.reduce((acc, item) => {
        let temporal = !isNaN(parseInt(item.powerstats.speed))
          temporal ? acc += parseInt(item.powerstats.speed) : acc += 0
        return  acc 
      },0)
      const strength2 = equipo2.reduce((acc, item) => {
        let temporal = !isNaN(parseInt(item.powerstats.strength))
          temporal ? acc += parseInt(item.powerstats.strength) : acc += 0
        return  acc 
      },0)
      const durability2 = equipo2.reduce((acc, item) => {
        let temporal = !isNaN(parseInt(item.powerstats.durability))
          temporal ? acc += parseInt(item.powerstats.durability) : acc += 0
        return  acc 
      },0)
      const intelligence2 = equipo2.reduce((acc, item) => {
        let temporal = !isNaN(parseInt(item.powerstats.intelligence))
          temporal ? acc += parseInt(item.powerstats.intelligence) : acc += 0
        return  acc 
      },0)
      const combat2 = equipo2.reduce((acc, item) => {
        let temporal = !isNaN(parseInt(item.powerstats.combat))
          temporal ? acc += parseInt(item.powerstats.combat) : acc += 0
        return  acc 
      },0)
      //--------------------------PROMEDIO---------------------------------//
      const calcularPromedio = (power, speed, strength, durability, intelligence, combat) =>{
        let resultado = Math.round((power + speed + strength + durability + intelligence + combat) / 6)
        setPromedio1(resultado)
    }
        const calcularPromedio2 = (power, speed, strength, durability, intelligence, combat) =>{
        let resultado = Math.round((power + speed + strength + durability + intelligence + combat) / 6)
        setPromedio2(resultado)
    }
       calcularPromedio(power1, speed1, strength1, durability1, intelligence1, combat1)
       calcularPromedio2(power2, speed2, strength2, durability2, intelligence2, combat2)
    return (
        <div>
            {
            props.equipo === equipo1 ? 
                <div>
                    {
                        equipo1.length > 0 && 
                        <div className='powerstats'>
                          <div className='detalle-power'>
                            <h6 className='mb-0'>Combat: {combat1} </h6>
                            <h6 className='mb-0'>Durability: {durability1}</h6>
                            <h6 className='mb-0'>Power: {power1} </h6>
                          </div>
                            <div  className='detalle-power'>
                              <h6 className='mb-0'>Intelligence: {intelligence1}</h6>
                              <h6 className='mb-0'>Speed: {speed1} </h6>
                              <h6 className='mb-0'>Strength {strength1}</h6>
                            </div>
                        </div>
                    }
                    
                </div>
            :
                <div>
                    {
                        equipo2.length > 0 && 
                        <div className='powerstats'>
                          <div className="detalle-power">
                            <h6 className='mb-0'>Combat: {combat2} </h6>
                            <h6 className='mb-0'>Durability: {durability2}</h6>
                            <h6 className='mb-0'>Power: {power2} </h6>
                          </div>
                        <div className="detalle-power">
                          <h6 className='mb-0'>Intelligence: {intelligence2}</h6>
                          <h6 className='mb-0'>Speed: {speed2} </h6>
                          <h6 className='mb-0'>Strength {strength2}</h6>
                        </div>
                        </div>
                    }
                </div>
            }     
        </div>
    )
}
export default Powerstats