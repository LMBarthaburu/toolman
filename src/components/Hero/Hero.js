import React from 'react'
import './hero.css'
import 'animate.css';

function Hero() {
  return (
    <div className='hero-img' id='inicio'>
      <div className='hero-fondo'></div>
      <div className='hero-text-box d-flex align-items-center'>
        <div className='container'>
          <h1 className='hero-title animate__animated animate__fadeIn animate__delay-1s animate__slow'>TU SOLUCIÓN <br /> EN NUESTRAS MANOS</h1>
          <h3 className='hero-subtitle animate__animated animate__fadeIn animate__delay-2s animate__slow'> Somos un equipo de profesionales altamente capacitados para brindarte un servicio integral de construcción y mantenimiento a tu hogar o inmueble.</h3>
          <a href='#contacto' className='hero-link fs-5 fw-bold animate__animated animate__fadeIn animate__delay-2s animate__slow'>Cotiza tu proyecto</a>
        </div>
      </div>
    </div>
    )
}

export default Hero