import React from 'react'
import '../css/navTop.css'

import { NavLink } from 'react-router-dom'

export const NavTop = () => {
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-body-tertiary nav-morado'>
                <div className='container-fluid'>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <NavLink className="navbar-brand fw-bolder job-color-blanco" to='ruta/rutaarch'>
                        JobAppOscar
                    </NavLink>
                    {/*<div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
                        <form className='d-flex' role="search">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Buscar..." aria-label="Buscar..." aria-describedby="button-addon2"/>
                                <button className="btn btn-dark" type="button" id="button-addon2"><Search/></button>
                            </div>
                        </form>
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <NavLink className="nav-link active" to='ruta/rutaarch'>
                                    Inicio
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className="nav-link" to='ruta/rutaarch'>
                                    Administrar
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className="nav-link" to='ruta/rutaarch'>
                                    Contacto
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className="nav-link" to='ruta/rutaarch'>
                                    Perfil
                                </NavLink>
                            </li>
                        </ul>
                    </div>*/}
                </div>
            </nav>
        </>
    )
}

