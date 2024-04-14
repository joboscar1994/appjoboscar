import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import {NavTop} from './layouts/NavTop';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { RestablecerContrasena } from './pages/RestablecerContrasena';
import { NuevaContrasena } from './pages/NuevaContrasena';
import { Contacto } from './pages/Contacto';
import { Home } from './pages/Home';
import { Perfil } from './pages/Perfil';
import { Administrador } from './pages/Administrador';

function App() {
  return (
    <>
      <header>
        <NavTop/>
      </header>
      <section>

      </section>
      <aside>
        <div className='container-fluid'>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/registro' element={<Register/>}/>
            <Route path='/restablecer' element={<RestablecerContrasena/>}/>
            <Route path='/nueva_contrasena' element={<NuevaContrasena/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path='/administrador' element={<Administrador/>}/>
          </Routes>
        </div>
      </aside>
      <footer>

      </footer>
    </>
  );
}

export default App;
