import React from 'react'
import './proyects.css'
import ProyectsCard from '../ProyectsCard/ProyectsCard'
import {proyects} from '../../assets/dataBase/proyects'

function Proyects() {
  return (
    <section id='proyectos' className='container pt-5'>
      <h1 className='proyectos-title'>Proyectos<span className='naranja m-0'> / </span>Avances de obra</h1>
      <div className='my-3 my-lg-5'>
        {
          proyects.map(item=><ProyectsCard key={item.id} video={item.video} titulo={item.titulo} descripcion={item.descripcion}/>)
        }
      </div>
    </section>
  )
}

export default Proyects