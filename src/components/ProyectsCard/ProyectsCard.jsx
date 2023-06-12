import React from 'react'
import './proyectosCard.css'

function ProyectsCard({video,descripcion,titulo,id}) {
  return (
    <div className='mb-4 py-md-1 d-flex flex-column flex-md-row' id={`list-item-${id}`}>
      <div className='col-12 col-md-6 pe-md-3'>
        <h4><span className='naranja m-0'>Obra: </span>{titulo}</h4>
        <h5>
          <span className='naranja m-0'>Descripción:</span> <br />
          {descripcion}
        </h5>
      </div>
      <div className='col-12 col-md-6'>
        <video src={video} controls className='video-proyectos'></video>
      </div>
    </div>
  )
}

export default ProyectsCard