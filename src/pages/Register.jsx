import React from 'react'
import '../css/register.css'
import { NavLink } from 'react-router-dom'

export const Register = () => {
  return (
    <>
        <div className='row justify-content-md-center'>
            <div className='col-sm-3'>
                <div className='cont_register mt-5 mb-5' style={{position:"relative"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-12">
                                <br />
                                <br />
                                <h5 className='mb-0 text-end'>Registrate ahora en</h5>
                                <h2 className='jbo-color-morado text-end'>JobAppOscar</h2>
                            </div>
                            <div className="col-md-12">
                                <form action="" className='formRegister'>
                                    <div className="form-group">
                                        <label htmlFor="id_nombre" className='fs-6 fw-semibold'>Nombres</label>
                                        <input id="id_nombre" type="text" className='form-control'/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="id_apellido" className='fs-6 fw-semibold'>Apellidos</label>
                                        <input id="id_apellido" type="text" className='form-control'/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="id_correo" className='fs-6 fw-semibold'>Correo Electronico</label>
                                        <input id="id_correo" type="email" className='form-control' placeholder='ejemplo@fmail.com'/>
                                        <small className='fs-7 job-color-gris'>ejemplo@fmail.com</small>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="id_correo" className='fs-6 fw-semibold'>Contrasena</label>
                                        <input id="id_correo" type="password" placeholder='contrasena' className='form-control'/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="id_correo" className='fs-6 fw-semibold'>Confirmar contrasena</label>
                                        <input id="id_correo" type="password" placeholder='contrasena' className='form-control'/>
                                    </div>
                                    <br />
                                    <div className="d-grid gap-2">
                                        <button type='submit' className='btn btn-dark btn-block'>Registrarme</button>
                                    </div>
                                </form>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
