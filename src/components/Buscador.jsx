import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import axios from 'axios'
import TarjetaBusqueda from './TarjetaBusqueda'



const Buscador = () => {

    let resultado = []
    let contador = 3
    let mostrar = []
        const siguiente = async(heroes) =>{
                contador+=3
                resultado = await heroes.splice(0, contador)
                mostrar = await resultado.slice(contador-3, resultado.length)
        }

        const anterior = async(heroes) =>{
            contador-=3
            resultado = await heroes.splice(0, contador)
            mostrar = await resultado.slice(contador-3, resultado.length)
        }

    return (
        <>
            <Formik
                initialValues={{ buscador: '', heroes:[]}}
                validate={(valores)=>{
                    let errores = {}
                    //Validar correo
                    if(!valores.buscador){
                        errores.buscador = '*Por favor escriba el nombre de un superheroe'
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
                    <div className="col-12 mt-4">
                        <div>
                            <Field className=' form-control' 
                                    type='text'
                                    placeholder='Nombre de Superhéroe'
                                    name='buscador'
                                    id='buscador'
                                    values={values.buscador}
                            >    
                            </Field>
                            {errors.buscador && <div className='mt-1' style={{color: 'red'}}>{errors.buscador}</div>}
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
            
                                    return <div className='mt-3 col-12  d-flex flex-column align-items-center'>
                                        {
                                            !heroes ? <span className='alert-warning'>No hay superheroes con ese nombre</span>  :
                                            <div className='d-flex col-sm-10 flex-column row'>
                                              
                                              <div className='d-flex col-6 flex-column '>
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
                                                <div>
                                                   <button 
                                                       type='submit' 
                                                       onClick={()=>anterior(heroes)} 
                                                       className="btn btn-primary">Anterior
                                                   </button>
                                                   <button 
                                                       type='submit' 
                                                       onClick={()=>siguiente(heroes)} 
                                                       className="btn btn-primary">Siguiente
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
