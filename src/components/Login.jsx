import React from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { withRouter } from 'react-router-dom'



const Login = (props) => {
    
    let errorIngreso = ''
 
    return (
        <div className='row d-flex justify-content-center'>
            <img className='img-login mt-5' src="https://campus.alkemy.org/static/media/logo.a56b5107.svg" alt="Logo de alkemy" />
            <h4 className='text-center'>Challenge React</h4>
            <Formik initialValues={{ correo: '', password: ''}}
                validate={(valores)=>{
                    let errores = {}
                    //Validar correo
                    if(!valores.correo){
                        errores.correo = 'Por favor escriba su correo'
                        return errores
                    }
                     //Validar contraseña
                    if(!valores.password){
                        errores.password = 'Por favor escriba su contraseña'
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
                        props.history.push('/home')
                    } catch (error) {
                        console.log(error)
                        errorIngreso = 'Usuario y/o contraseña inválido'
                    }
                    
                    resetForm()
                }}
                >
                {({errors,touched})=>(
                    <Form className='col-10 ' >
                        <div className='mt-5'>
                            <label htmlFor="correo" className="form-label mb-0">Correo</label>
                            <Field
                                type="email" 
                                id='correo' 
                                name='correo' 
                                className="form-control" 
                                placeholder='daniel@alkemy.com'  
                            />
                            {touched.correo && errors.correo && <div className='mt-1 alert alert-danger' role='alert'>{errors.correo}</div>}
                        </div>
                        <div className=' mt-3'>
                            <label htmlFor="password" className="form-label mb-0">Contraseña</label>
                            <Field 
                                type="password" 
                                id='password' 
                                className="form-control" 
                                name='password' 
                            />
                            {touched.password && errors.password && <div className='mt-1 alert alert-danger'>{errors.password}</div>}
                        </div>
                        <div className="mt-4 d-grid">
                            <button type='submit' className="btn btn-primary" >Ingresar</button>
                        </div>
                        {errorIngreso && <div className='mt-1 alert alert-danger'>{errorIngreso}</div>}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default withRouter(Login)
