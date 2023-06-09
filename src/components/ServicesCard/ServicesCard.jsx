import React from 'react'
import './servicesCard.css'

function ServicesCard({id, servicio, detalle, logo}) {
  return (
    <div className="services-card text-center" key={id}>
      <div className='img-box'>
       <img src={logo} className="card-img-top" alt="..."/>   
      </div>
      <div className="card-body">
        <h2 className="card-title">{servicio}</h2>
        <p className="card-text">{detalle}</p>
      </div>
    </div>
  )
}

export default ServicesCard