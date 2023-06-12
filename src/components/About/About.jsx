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
              <h5 className='about-subtitle'>Lorem ipsum dolor sit amet consectetur. Nam malesuada sit cursus lacus dictum tempus leo tellus. Donec hendrerit sit nibh nascetur faucibus commodo turpis viverra. Viverra consequat proin rhoncus turpis lectus senectus viverra. Varius morbi neque eu nunc mus. Diam consequat odio mauris in risus dictumst non. Faucibus leo commodo scelerisque commodo cras nulla. </h5>
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
              link? null :<div className='about-link' >
                <IoIosArrowUp className='fs-3'/>
                <h5 className='about-link-menos'>Ver menos</h5>
                </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About