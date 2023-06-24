import React from 'react'

function TeamCard({img, nombre, profesion, tarea, id}) {
  return (
    <>
      <div className='col-12 col-lg-6 p-2 d-flex align-items-center justify-content-center'>
        <div className="card">
          <div className='team-fondo-img'></div>
          <div className='team-fondo'></div>
          <div className='card-text-box-team'>
            <img src={img} className="card-img-team col-6" alt="..."/>
            <div className="card-body col-6 px-2">
              <h1 >{nombre}</h1>
              <p className='fs-4' >{profesion}</p>
              <p>{tarea}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamCard