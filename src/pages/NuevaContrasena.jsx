import React from 'react'
import '../css/nuevaContrasena.css'

export const  NuevaContrasena = () => {
  return (
    <>
        <div className='row justify-content-md-center'>
            <div className='col-sm-3'>
                <div className='cont_restablecerContrasena mt-5 mb-5' style={{position:"relative"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-12">
                                <br />
                                <br />
                                <h5 className='mb-0 text-end'>Cambiar la contrasena para el acceso a</h5>
                                <h2 className='jbo-color-morado text-end'>JobAppOscar</h2>
                            </div>
                            <div className="col-md-12">
                                <form action="" className='formRegister'>
                                    <div className="form-group">
                                        <label htmlFor="id_nombre" className='fs-6 fw-semibold'>Nueva contrasena</label>
                                        <input id="id_nombre" type="email" className='form-control' placeholder='Nueva contrasena'/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="id_correo" className='fs-6 fw-semibold'>Confirmar nueva contrasena</label>
                                        <input id="id_correo" type="password" placeholder='Confirmar nueva contrasena' className='form-control'/>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="d-grid gap-2">
                                        <button type='submit' className='btn btn-dark btn-block'>Cambiar la contrasena</button>
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
