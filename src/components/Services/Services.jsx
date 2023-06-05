import React from 'react'
import './services.css'
import {servicios} from '../../assets/dataBase/servicios'
import ServicesCard from '../ServicesCard/ServicesCard'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Services() {

  return (
    <section className='services' id='services'> 
      <h1 className='text-center mt-xxl-4 pt-3 pt-xxl-5 services-title'>Nuestros Servicios</h1>
      <div className='container'>
        <Splide aria-label="My Favorite Images"   options={ {
            perPage: 3,
            breakpoints: {
              992 : { perPage: 2 },
              575 : {perPage: 1},
            },
          } }
          >
          {
            servicios.map(item=><SplideSlide><ServicesCard key={item.id} servicio={item.servicio} detalle={item.detalle} logo={item.logo}/></SplideSlide>)
          }
        </Splide>
      </div>
    </section>
  )
}

export default Services