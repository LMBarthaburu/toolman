import React, { useState } from 'react'
import './about.css'
import ToolmanLogo from '../../assets/img/LogotipoCompleto.jpg'
import AboutImg from '../../assets/img/about-img.jpg'
import Team from '../Team/Team'
import {IoIosArrowUp} from 'react-icons/io'
import 'animate.css';

function About() {
  const [link, setLink] = useState(true)
  return (
    <section className='about d-flex align-itmes-center align-items-lg-end' id='about'>
      <div className='about-fondo'></div>
      <div className='about-circulo'></div>
      <div className='container pt-5 pt-lg-0'>
        <div className='d-flex flex-column'>
          <div className='about-text-box  col-12 d-flex'>
            <div className='col-12 col-lg-7 '>
              <h1 className='about-title'>Somos</h1>
              <img src={ToolmanLogo} alt="" className='w-75 about-logo'/>
              <p className='about-subtitle fs-5 pe-lg-3'>Nos especializamos en: plomería, gas, electricidad, carpintería, albañilería, pintura, construcción en seco, herrería, yeso e impermeabilización. También en decoración de interiores y exteriores, parquizaciones, mantenimiento de jardines y asesoramiento técnico.
              Brindamos nuestros servicios a consorcios, administraciones, countries, barrios privados, edificios, galerías comerciales, etc.</p>
              <div data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={()=>{setLink(!link)}}>
                {
                    link?<h5 className='about-link-mas'>Conoce más!</h5> : null
                }
              </div>
            </div>
            <div className='col-12 col-lg-5'>
              <img src={AboutImg} alt="" className='w-100 about-img'/>
            </div>
          </div>
          <div className="collapse" id="collapseExample">
            <div>
              <Team/>
            </div>
          </div>
          <div data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" onClick={()=>{setLink(!link)}}>
            {
              link? null :<a className='about-link' href='/#about'>
                <IoIosArrowUp className='fs-3'/>
                <h5 className='about-link-menos'>Ver menos</h5>
                </a>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About