import React, { useState } from 'react'
import NavbarLogo from '../../assets/img/LogotipoCompleto.jpg'
import './navbar.css'
import {GiBrickWall} from 'react-icons/gi'
import {BsTools} from 'react-icons/bs'

function Navbar() {
  const [state, setstate] = useState(true)
  return (
    <>
      <nav className="navbar navbar-expand-lg position-sticky top-0">
        <div className="container-fluid mx-3 align-itmes-center">
          <a className="navbar-brand" href="/#">
            <img src={NavbarLogo} alt="Toolman Logotipo" className='navbar-img'/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setstate(!state)}>
            {
              state?<GiBrickWall className="navbar-toggler-icon"/>:<BsTools className="navbar-toggler-icon close"/>
            }
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <ul className="navbar-nav text-center fw-bold">
              <li className='nav-item m-0'><a className="nav-link" href="/#">INICIO</a></li>
              <li className='nav-item m-0'><a className="nav-link" href="/#about">NOSOTROS</a></li>
              <li className='nav-item m-0'><a className="nav-link" href="/#services">SERVICIOS</a></li>
              <li className='nav-item m-0'><a className="nav-link" href='/#proyectos'>PROYECTOS</a></li>
              <li className='nav-item m-0'><a className="nav-link" href='/#contacto'>CONTACTO</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar