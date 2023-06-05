import React from 'react'
import './hero.css'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero-img'>
      <div className='hero-fondo'></div>
      <div className='hero-text-box d-flex align-items-center'>
        <div className='container'>
          <h1 className='hero-title'>TU SOLUCIÓN <br /> EN NUESTRAS MANOS</h1>
          <h3 className='hero-subtitle'>Lorem ipsum dolor sit amet consectetur. Nam malesuada sit cursus lacus dictum tempus leo tellus.</h3>
          <Link to='#contacto' className='hero-link'>Cotiza tu proyecto</Link>
        </div>
      </div>
    </div>
    )
}

export default Hero