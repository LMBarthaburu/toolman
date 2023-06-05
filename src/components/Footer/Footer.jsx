import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {ImFacebook2} from 'react-icons/im'
import ToolmanLogo from '../../assets/img/LogotipoCompleto.jpg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer d-flex flex-column justify-content-center align-items-center'>
      <div className='footer-linea'></div>
      <div className='d-flex flex-column justify-content-center align-items-center footer-text-box'>
        <div className='d-flex flex-column justify-content-center align-items-center footer-logo-box'>
          <img src={ToolmanLogo} alt="Logo Toolman" className='footer-logo'/>
        </div>
        <div >
          <Link to="https://www.google.com" target='_blank'><BsInstagram className='footer-rrss'/></Link>
          <Link to="https://www.google.com" target='_blank'><ImFacebook2 className='footer-rrss'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer