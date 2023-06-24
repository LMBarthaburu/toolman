import React from 'react'
import './proyectosCard.css'

function ProyectsCard({video,descripcion,titulo,id}) {
  return (
    <div className='mb-4 py-md-1 d-flex flex-column flex-md-row proyect-card' id={`list-item-${id}`}>
      <div className='col-12 col-md-6 pe-md-3'>
        <h4><span className='naranja m-0'>Obra: </span>{titulo}</h4>
        <p>
          <span className='naranja m-0 fs-5 fw-bold'>Descripción:</span> <br />
          {descripcion}
        </p>
      </div>
      <div className='col-12 col-md-6'>
        <video src={video} controls className='video-proyectos'></video>
      </div>
      <div className='linea'></div>
    </div>
  )
}

export default ProyectsCard