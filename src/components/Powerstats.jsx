import React from 'react'
import { activoContext } from './context/ActivoProvider'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const Powerstats = (props) => {
    const {equipo1, equipo2, promedio1, promedio2, setPromedio1, setPromedio2} = useContext(activoContext)

    const [combat, setCombat] = useState(0)
    const [durability, setDurability] = useState(0)
    const [intelligence, setIntelligence] = useState(0)
    const [power, setPower] = useState(0)
    const [speed, setSpeed] = useState(0)
    const [strength, setStrength] = useState(0)

    const [combat2, setCombat2] = useState(0)
    const [durability2, setDurability2] = useState(0)
    const [intelligence2, setIntelligence2] = useState(0)
    const [power2, setPower2] = useState(0)
    const [speed2, setSpeed2] = useState(0)
    const [strength2, setStrength2] = useState(0)    
    
    let combate = 0, durabilidad = 0, inteligencia = 0, poder = 0, velocidad = 0, fuerza = 0, promedio = 0
    let combate2 = 0, durabilidad2 = 0, inteligencia2 = 0, poder2 = 0, velocidad2 = 0, fuerza2 = 0
    function promedioE1(combate, durabilidad, inteligencia, poder, velocidad, fuerza, promedio){
        promedio = Math.round((combate + durabilidad + inteligencia + poder +  velocidad + fuerza) / 6)
        setPromedio1(promedio)
        console.log(promedio1)
    }
    function promedioE2(combate, durabilidad, inteligencia, poder, velocidad, fuerza, promedio){
        promedio = Math.round((combate + durabilidad + inteligencia + poder +  velocidad + fuerza) / 6)
        setPromedio2(promedio)
        console.log(promedio2)
    }

    const sumarPoder = () =>{
        equipo1.map((item) => {
            combate += parseInt(item.powerstats.combat)
            durabilidad += parseInt(item.powerstats.durability)
            inteligencia += parseInt(item.powerstats.intelligence)
            poder += parseInt(item.powerstats.power)
            velocidad += parseInt(item.powerstats.speed)
            fuerza += parseInt(item.powerstats.strength)
        })
        setCombat(combate)
        setDurability(durabilidad)
        setIntelligence(inteligencia)
        setPower(poder)
        setSpeed(velocidad)
        setStrength(fuerza)
        promedioE1(combat, durability, intelligence, power, speed, strength, promedio)
    }

    const sumarPoder2 = () =>{
        equipo2.map((item) => {
            combate2 += parseInt(item.powerstats.combat)
            durabilidad2 += parseInt(item.powerstats.durability)
            inteligencia2 += parseInt(item.powerstats.intelligence)
            poder2 += parseInt(item.powerstats.power)
            velocidad2 += parseInt(item.powerstats.speed)
            fuerza2 += parseInt(item.powerstats.strength)
        })
        setCombat2(combate2)
        setDurability2(durabilidad2)
        setIntelligence2(inteligencia2)
        setPower2(poder2)
        setSpeed2(velocidad2)
        setStrength2(fuerza2)
        promedioE2(combat2, durability2, intelligence2, power2, speed2, strength2,promedio)
    }


    useEffect(()=>{
        sumarPoder()
        sumarPoder2()
    },[sumarPoder, sumarPoder2])

    return (
        <div>
            {
               props.equipo === equipo1 ? 
                <div className='powerstate'>
                    {
                        equipo1.length > 0 && <div>
                            <h3>Powerstats</h3>
                        <h6>Combat:{!combat ? 0 : combat}</h6>
                        <h6>Durability: {!durability ? 0 : durability}</h6>
                        <h6>Intelligence: {!intelligence ? 0 : intelligence}</h6>
                        <h6>Power: {!power ? 0 : power}</h6>
                        <h6>Speed: {!speed ? 0 : speed}</h6>
                        <h6>Strength: {!strength ? 0 : strength}</h6>
                        </div> 
                    }
                    
                </div> :
                <div>
                    {
                        equipo2.length > 0 && <div>
                             <h3>Powerstats</h3>
                             <h6>Combat:{!combat2 ? 0 : combat2}</h6>
                        <h6>Durability: {!durability2 ? 0 : durability2}</h6>
                        <h6>Intelligence: {!intelligence2 ? 0 : intelligence2}</h6>
                        <h6>Power: {!power2 ? 0 : power2}</h6>
                        <h6>Speed: {!speed2 ? 0 : speed2}</h6>
                        <h6>Strength: {!strength2 ? 0 : strength2}</h6>
                        </div>
                    }
                   
                </div>
            }
        </div>
    )
}

export default Powerstats
