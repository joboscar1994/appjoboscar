import React from 'react'
import '../css/login.css'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  return (
    <>
        <div className='row justify-content-md-center'>
            <div className='col-sm-3'>
                <div className='cont_login mt-5' style={{position:"relative"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-12">
                                <br />
                                <br />
                                <h5 className='mb-0 text-center'>Iniciar Sesion en</h5>
                                <h2 className='jbo-color-morado text-center'>JobAppOscar</h2>
                            </div>
                            <div className="col-md-12">
                                <form action="" className='formLogin'>
                                    <div className="form-group">
                                        <label htmlFor="id_correo" className='fs-6 fw-semibold'>Correo Electronico</label>
                                        <input id="id_correo" type="email" className='form-control' placeholder='ejemplo@fmail.com'/>
                                        <small className='fs-7 job-color-gris'>ejemplo@fmail.com</small>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="id_clave" className='fs-6 fw-semibold'>Contrasena</label>
                                        <input type="password" id='id_clave' className='form-control' placeholder='Contrasena'/>
                                    </div>
                                    <NavLink style={{bottom:'122px',right:'0',position:'absolute'}} className="jbo-color-moradoClaro fs-7  job-link-decoration" to="/restablece_contrasena">Olvido su clave?</NavLink>
                                    <br />
                                    <br />
                                    <div className="d-grid gap-2">
                                        <button type='submit' className='btn btn-dark btn-block'>Iniciar Sesion</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-12">
                                <p className='fs-7' style={{right:"12px",bottom:"0",position:"absolute"}}>No estas registrado?<NavLink className="jbo-color-moradoClaro job-link-decoration" to='/registro'> Registrate ahora</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

