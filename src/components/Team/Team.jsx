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
        <h5>Lorem ipsum dolor sit amet consectetur. Nam malesuada sit cursus lacus dictum tempus leo tellus. Donec hendrerit sit nibh nascetur faucibus commodo turpis viverra. Viverra consequat proin rhoncus turpis lectus senectus viverra. Varius morbi neque eu nunc mus. Diam consequat odio mauris in risus dictumst non.</h5>
        <h3 className='team-titulo'>COMO LO HACEMOS?</h3>
        <h5>Lorem ipsum dolor sit amet consectetur. Nam malesuada sit cursus lacus dictum tempus leo tellus. Donec hendrerit sit nibh nascetur faucibus commodo turpis viverra. Viverra consequat proin rhoncus turpis lectus senectus viverra. Varius morbi neque eu nunc mus. Diam consequat odio mauris in risus dictumst non.</h5>
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