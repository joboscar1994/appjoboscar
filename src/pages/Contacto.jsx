import React from 'react'
import '../css/contacto.css'

export const Contacto = () => {
  return (
    <>
        <div className='row justify-content-md-center'>
            <div className='col-sm-4'>
                <div className='cont_contacto mt-5 mb-5' style={{position:"relative"}}>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-md-12">
                                <br />
                                <br />
                                <h5 className='mb-0 text-end'>Contactenos en</h5>
                                <h2 className='jbo-color-morado text-end'>JobAppOscar</h2>
                            </div>
                            <div className="col-md-12" style={{paddingBottom:'50px'}}>
                                <form action="" className='formContacto'>
                                    <div className="form-group">
                                        <label htmlFor="id_nombre" className='fs-6 fw-semibold'>Ingresa tu nombre</label>
                                        <input id="id_nombre" type="text" className='form-control'/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="id_correo" className='fs-6 fw-semibold'>Ingresa tu correo</label>
                                        <input id="id_correo" type="email" className='form-control' placeholder='ejemplo@fmail.com'/>
                                        <small className='fs-7 job-color-gris'>ejemplo@fmail.com</small>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="id_correo" className='fs-6 fw-semibold'>Ingresa tu mensaje</label>
                                        <textarea placeholder='Ingresa tu mensaje' rows='5' className='form-control'></textarea>
                                    </div>
                                    <br />
                                    <div className="d-grid gap-2">
                                        <button type='submit' className='btn btn-dark btn-block'>Enviar</button>
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
