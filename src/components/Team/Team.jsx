import React from 'react'
import './team.css'
import img from '../../assets/img/hero-img.jpg'
import {equipo} from '../../assets/dataBase/equipo'
import TeamCard from '../TeamCard/TeamCard'

function Team() {
  return (
    <section className='team'>
    <div className='d-flex'>
      <div className='d-none d-md-block col-6 text-center'>
        <img src={img} alt="" className='team-img'/>        
      </div>
      <div className='col-12 col-md-6 team-text-box'>
        <h3 className='team-titulo'>QUE HACEMOS?</h3>
        <p>¡Si estas pensando en hacerle renovaciones a tu casa, nosotros te ayudamos! <br />Ofrecemos un servicio integral de reparación y mantenimiento para tu hogar o inmueble, basandonos en los principios de Seguridad, Compromiso, Calidad, Rapides y Garantía!</p>
        <h3 className='team-titulo'>COMO LO HACEMOS?</h3>
        <p>Tenemos todos los servicios disponibles con asesoría ¡SIN COSTO! <br />Ponete en contacto con nostros por wtsp o a traves de nuestro formulario de contacto y dejate acesorar por los mejores!</p>
      </div>
    </div>
    <div className='team-equipo'>
      <div className='col-12 col-lg-6 d-flex align-items-center justify-content-center'>
        <h2 className='tean-titulo-equipo'>Nuestro <br /> <span className='team-titulo-equipo naranja'>Equipo!</span></h2>
      </div>
      {
        equipo.map(item=><TeamCard key={item.id} img={item.img} nombre={item.nombre} profesion={item.profesion} tarea={item.tarea}/>)
      } 
    </div>
    </section>
  )
}

export default Team