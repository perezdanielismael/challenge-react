import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import axios from 'axios'
import TarjetaBusqueda from './TarjetaBusqueda'
import './buscador.css'
import { activoContext } from '../context/ActivoProvider'
import { useContext } from 'react'
import { useState } from 'react'
const Buscador = () => {
    const {error, setError} = useContext(activoContext)
    const [btnAnterior, setBtnAnterior] = useState(false)
    const [btnSiguiente, setBtnSiguiente] = useState(false)
    let contador = 3
    let mostrar = []
        const siguiente = async(heroes) =>{
            setError(null)
            if(contador > heroes.length){
                setBtnSiguiente(true)
                return
            }else{
                setBtnSiguiente(false)
                setBtnAnterior(false)
            }
           mostrar = heroes.slice(contador, contador+3)
           contador+=3
        }
        const anterior = async(heroes) =>{
            setError(null)
            if(contador < 6){
                setBtnAnterior(true)
                return
            }else{ setBtnAnterior(false)}
            contador-=3
            mostrar = heroes.slice(contador, contador+3)
        }
    return (
        <>
            <Formik
                initialValues={{ buscador: '', heroes:[]}}
                validate={(valores)=>{
                    let errores = {}
                    //Validar el campo de busqueda
                    if(!valores.buscador){
                        errores.buscador = 'Escriba el nombre de un superheroe'
                        return errores
                    }
                }}
                onSubmit={async(valores)=>{
                    try {
                        const res = await axios.get(`https://superheroapi.com/api/2016649095160560/search/${valores.buscador}`)
                        valores.heroes = await res.data.results
                    } catch (error) {
                        console.log('Error ', error)
                    } 
                }}
            >
            {({values, errors})=>(
                <Form className='row d-flex flex-row justify-content-center'>
                    <div className="col-12  mt-4 d-flex align-items-center flex-column" >
                        <div className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4'>
                            <Field 
                                className=' form-control input' 
                                type='text'
                                placeholder='Buscar un Superhéroe'
                                name='buscador'
                                id='buscador'
                                values={values.buscador}
                            >    
                            </Field>
                            {errors.buscador && <div className='mt-1 alert alert-warning'>{errors.buscador}</div>}
                            <div className='col-12 mt-2 d-grid'>
                                <button type='submit' className="btn btn-dark">Search</button>
                            </div>
                        </div>       
                        <FieldArray name='heroes' >
                            {
                                (fieldArrayProps) => {
                                    const {form} = fieldArrayProps
                                    const {values} = form
                                    const {heroes} = values
                                    heroes && heroes.length > 3 ? (mostrar = heroes.slice(contador-3, contador)) : (mostrar = heroes)
                                    return <div className='mt-3 col-12 d-flex justify-content-center'>
                                        {
                                            !heroes ? <div className='alert alert-warning mt-1 col-sm-8 col-lg-6'>No hay superheroes con ese nombre</div>
                                            :
                                            <div className=' col-12 col-sm-10 contenedor-busqueda'>
                                              
                                              <div className='col-12 contenedor-resultado'>
                                              { 
                                             
                                               mostrar.map((heroe, index) => (
                                                       <TarjetaBusqueda 
                                                            key={index}
                                                            imagen={heroe.image.url}      
                                                            nombre={heroe.name}
                                                            heroe={heroe}
                                                        />  
                                                ))
                                             }  
                                            </div> 
                                            <div>
                                             {
                                                 error ? <div className='col-12 col-sm-10 col-lg-8 alerta alert alert-warning'>{error}</div> : null
                                             }
                                             </div>
                                               {
                                                   heroes.length > 6 &&  
                                                <div className='botones-siguiente'>
                                                   <button 
                                                       type='submit' 
                                                       onClick={()=>anterior(heroes)} 
                                                       disabled={btnAnterior}
                                                       className="btn btn-dark btn-width">Previous
                                                   </button>
                                                   <button 
                                                       type='submit' 
                                                       onClick={()=>siguiente(heroes)}
                                                       disabled={btnSiguiente} 
                                                       className="btn btn-dark btn-width">Next
                                                   </button>
                                                </div>
                                               }                                                  
                                            </div>
                                        }
                                        </div>
                                }
                            }
                        </FieldArray>
                    </div>
                </Form>
            )} 
            </Formik>       
        </>
    )
}
export default Buscador