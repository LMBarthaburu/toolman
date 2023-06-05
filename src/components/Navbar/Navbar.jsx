import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import NavbarLogo from '../../assets/img/LogotipoCompleto.jpg'
import './navbar.css'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg position-sticky top-0">
        <div className="container-fluid mx-3 align-itmes-center">
          <Link className="navbar-brand" to="#">
            <img src={NavbarLogo} alt="Toolman Logotipo" className='navbar-img'/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
            </span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav text-center">
              <NavLink className="nav-link" to="#">INICIO</NavLink>
              <NavLink className="nav-link" to="#">NOSOTROS</NavLink>
              <NavLink className="nav-link" to="#">SERVICIOS</NavLink>
              <NavLink className="nav-link" to='#'>PROYECTOS</NavLink>
              <NavLink className="nav-link" to='#'>CONTACTO</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar