import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import axios from 'axios'
import TarjetaBusqueda from './TarjetaBusqueda'
import './buscador.css'
import { useState } from 'react'
const Buscador = () => {
    const [btnAnterior, setBtnAnterior] = useState(false)
    const [btnSiguiente, setBtnSiguiente] = useState(false)
    let resultado = []
    let contador = 3
    let mostrar = []
        const siguiente = async(heroes) =>{
               
        }
        const anterior = async(heroes) =>{
          
        }
    return (
        <>
            <Formik
                initialValues={{ buscador: '', heroes:[]}}
                validate={(valores)=>{
                    let errores = {}
                    //Validar correo
                    if(!valores.buscador){
                        errores.buscador = 'Escriba el nombre de un superheroe'
                        return errores
                    }
                }}
                onSubmit={async(valores)=>{
                    try {
                        const res = await axios.get(`https://superheroapi.com/api/2016649095160560/search/${valores.buscador}`)
                        valores.heroes = await res.data.results
                        console.log(valores.heroes)
                        valores.buscador=''
                        
                    } catch (error) {
                        console.log('Error ', error)
                    }
                }}
            >
            {({values, errors})=>(
                <Form className='row d-flex flex-row justify-content-center'>
                    <div className="col-12  mt-4 d-flex align-items-center flex-column" >
                        <div className='col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4'>
                            <Field className=' form-control ' 
                                    type='text'
                                    placeholder='Buscar un Superhéroe'
                                    name='buscador'
                                    id='buscador'
                                    values={values.buscador}
                            >    
                            </Field>
                            {errors.buscador && <div className='mt-1 alert alert-warning'>{errors.buscador}</div>}
                            <div className='col-12 mt-2 d-grid'>
                                <button type='submit' className="btn btn-primary">Buscar</button>
                            </div>
                        </div>       
                        <FieldArray name='heroes' >
                            {
                                (fieldArrayProps) => {
                                    const {form} = fieldArrayProps
                                    const {values} = form
                                    const {heroes} = values
                                    if(heroes.length > 3){
                                        mostrar = heroes.slice(contador-3, contador)
                                    }else{
                                        mostrar = heroes
                                    }
                                    return <div className='mt-3 col-12 '>
                                        {
                                        !heroes ? <span className='alert alert-warning'>No hay superheroes con ese nombre</span>
                                            :
                                            <div className=' col-12 col-sm-10 '>
                                              
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
                                               {
                                                   heroes.length > 6 &&  
                                                <div className='botones-siguiente'>
                                                   <button 
                                                       type='submit' 
                                                       onClick={()=>anterior(heroes)} 
                                                       disabled={btnAnterior}
                                                       className="btn btn-dark">Anterior
                                                   </button>
                                                   <button 
                                                       type='submit' 
                                                       onClick={()=>siguiente(heroes)}
                                                       disabled={btnSiguiente} 
                                                       className="btn btn-dark">Siguiente
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
