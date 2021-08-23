import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik'
import axios from 'axios'
import { activoContext } from './context/ActivoProvider'
import { useContext } from 'react'


const Buscador = () => {
    const {equipo1, setEquipo1, equipo2, setEquipo2} = useContext(activoContext)
    const agregarEquipo1 =(heroe)=>{
        let error = ''
        if(equipo1.length > 5){
            error = 'El maximo permitido son 6 superheroes'
            return console.log(error) 
        }
       setEquipo1([...equipo1, heroe])
       console.log(equipo1)
       localStorage.setItem('equipo1', equipo1)
    }
    const agregarEquipo2 =(heroe)=>{
        let error = ''
        if(equipo2.length > 5){
            error = 'El maximo permitido son 6 superheroes'
            return console.log(error) 
        }
       setEquipo2([...equipo2, heroe])
       console.log(equipo1)
       localStorage.setItem('equipo2', equipo2)
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
                    const res = await axios.get(`https://superheroapi.com/api/2016649095160560/search/${valores.buscador}`)
                    valores.heroes = await res.data.results
                    console.log(valores.heroes)
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
                                    return <div className='mt-3 col-12 d-flex flex-column align-items-center'>
                                        {
                                            heroes.length === 0 ? 'Por favor busca un superheroe' :
                                            heroes.map((heroe, index) => (
                                                <div key={index} className='col-12 d-flex'>
                                                    <div className="card mb-3 " >
                                                        <div className="row g-0 d-flex justify-content-center text-center">
                                                            <div className="col-6 col-md-4">
                                                                <img src={heroe.image.url} className="img-fluid rounded-start" alt="..."/>
                                                            </div>
                                                            <div className="col-6 col-md-8">
                                                                <div className="card-body">
                                                                    <h5 className="card-title mb-5">{heroe.name}</h5>
                                                                    <div className='d-flex align-items-center justify-content-center'>
                                                                        <h6>Equipo 1</h6>
                                                                        <button 
                                                                            type='button'
                                                                            onClick={()=>agregarEquipo1(heroe)}
                                                                            className="btn btn-primary mb-2 ms-2"> + 
                                                                        </button>
                                                                    </div>
                                                                    <div className='d-flex align-items-center justify-content-center'>
                                                                    <h6>Equipo 2</h6>
                                                                        <button 
                                                                        type='button'
                                                                        onClick={()=>agregarEquipo2(heroe)}
                                                                        className="btn btn-primary mb-2 ms-2">+ </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
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
