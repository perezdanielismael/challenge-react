import React from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


const Login = (props) => {
    
    let errorIngreso = ''
 
    return (
        <div className='row d-flex justify-content-center'>
            <Formik initialValues={{ correo: '', password: ''}}
                validate={(valores)=>{
                    let errores = {}
                    //Validar correo
                    if(!valores.correo){
                        errores.correo = '*Por favor escriba su correo electrónico'
                        return errores
                    }
                     //Validar contraseña
                    if(!valores.password){
                        errores.password = '*Por favor escriba su contraseña'
                        return errores
                    }
                }}
               
                onSubmit={ async(valores , {resetForm})=>{
                    try { 
                            const res = await axios({
                            method:'POST',
                            url:'http://challenge-react.alkemy.org/',
                            data:{
                                    "email": `${valores.correo}`,
                                    "password": `${valores.password}`
                            }
                        })
                        const token = await res.data.token
                        localStorage.setItem('token', token)
                        props.history.push('/admin')
                    } catch (error) {
                        console.log(error)
                        errorIngreso = 'El usuario ingresado no está registrado'
                    }
                    
                    resetForm()
                }}
                >
                {({errors,touched})=>(
                    <Form className='col-3' >
                        <div className=''>
                            <label htmlFor="correo" className="form-label">Correo</label>
                            <Field
                                type="email" 
                                id='correo' 
                                name='correo' 
                                className="form-control" 
                                placeholder='daniel@alkemy.com'  
                            />
                            {touched.correo && errors.correo && <div className='mt-1' style={{color: 'red'}}>{errors.correo}</div>}
                        </div>
                        <div className=' mt-3'>
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <Field 
                                type="password" 
                                id='password' 
                                className="form-control" 
                                name='password' 
                            />
                            {touched.password && errors.password && <div className='mt-1' style={{color: 'red'}}>{errors.password}</div>}
                        </div>
                        <div className="mt-3 d-grid">
                            <button type='submit' className="btn btn-primary" >Ingresar</button>
                        </div>
                        {errorIngreso && <div className='mt-1' style={{color: 'red'}}>{errorIngreso}</div>}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default withRouter(Login)
