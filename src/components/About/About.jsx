import React from 'react'
import './about.css'
import ToolmanLogo from '../../assets/img/LogotipoCompleto.jpg'
import AboutImg from '../../assets/img/about-img.jpg'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className='about d-flex align-itmes-center align-items-lg-end' id='about'>
      <div className='about-fondo'></div>
      <div className='about-circulo'></div>
      <div className='container'>
        <div className='about-text-box'>
          <div className='col-12 col-lg-7 d-flex flex-column'>
            <h1 className='about-title'>Somos</h1>
            <img src={ToolmanLogo} alt="" className='w-75 about-logo'/>
            <h5 className='about-subtitle'>Lorem ipsum dolor sit amet consectetur. Nam malesuada sit cursus lacus dictum tempus leo tellus. Donec hendrerit sit nibh nascetur faucibus commodo turpis viverra. Viverra consequat proin rhoncus turpis lectus senectus viverra. Varius morbi neque eu nunc mus. Diam consequat odio mauris in risus dictumst non. Faucibus leo commodo scelerisque commodo cras nulla. </h5>
            <Link to=''className='about-link'>Conoce más</Link>
          </div>
          <div className='col-12 col-lg-5'>
            <img src={AboutImg} alt="" className='w-100 about-img'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About