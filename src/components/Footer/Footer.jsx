import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {ImFacebook2} from 'react-icons/im'
import ToolmanLogo from '../../assets/img/LogotipoCompleto.jpg'

function Footer() {
  return (
    <div className='footer d-flex flex-column justify-content-center align-items-center'>
      <div className='footer-linea'></div>
      <div className='d-flex flex-column justify-content-center align-items-center footer-text-box'>
        <div className='d-flex flex-column justify-content-center align-items-center footer-logo-box'>
          <img src={ToolmanLogo} alt="Logo Toolman" className='footer-logo'/>
        </div>
        <div >
          <a href=" https://www.instagram.com/toolmantuc/ " target='blank'><BsInstagram className='footer-rrss'/></a>
          <a href=" https://www.facebook.com/toolmantuc " target='blank'><ImFacebook2 className='footer-rrss'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer