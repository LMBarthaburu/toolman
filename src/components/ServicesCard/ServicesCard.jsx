import React from 'react'
import './servicesCard.css'

function ServicesCard({id, servicio, detalle, logo}) {
  return (
    <div className="services-card text-center d-md-flex justify-conten-center align-items-center" key={id}>
      <div className='col-md-6 d-none d-md-block'>
       <img src={logo} className="card-img-top" alt="..."/>   
      </div>
      <div className="col-md-6 px-md-3">
        <h1 className="card-title">{servicio}</h1>
        <p className="card-text">{detalle}</p>
      </div>
    </div>
  )
}

export default ServicesCard