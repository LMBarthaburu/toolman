import React from 'react'
import WtspImg from '../../assets/img/wtsp-logo.png'
import './wtsp.css'

function Wtsp() {
  return (
    <div className='container'>
      <a href='https://api.whatsapp.com/send?phone=0000000000&text=Hola! Quisiera cotizar un proyecto!' target='_blanck'>
        <img src={WtspImg} alt="WTSP logo" className='wtsp-logo' />
      </a>
    </div>
  )
}

export default Wtsp