import React from 'react'
import './contact.css'
import {BsInstagram} from 'react-icons/bs'
import {ImFacebook2} from 'react-icons/im'
import {useRef, useState} from 'react'
import emailjs from 'emailjs-com'
import { Link } from 'react-router-dom'


function Contact() {

  const formRef = useRef()
  const [done, setDone]=useState(false)


  const handleSubmit=(e)=>{
    e.preventDefault()
    emailjs.sendForm('service_sk7z85l','template_fnv45rm', formRef.current,'y7xW86yMJ4daVgaeO')
    setDone(true)
    const formulario =document.getElementById('formulario')
    formulario.reset()
  }

  return (
    <div className='contact-bg'>
      <div className='contact-box container d-lg-flex align-items-center justify-content-center'>
        <div className='contact-text-box col-lg-5'>
          <h1 className='contact-text-title'>Ponte en contacto con nosotros!</h1>
            <Link to='https://www.google.com' className='d-flex align-items-center contact-text-rrss'><BsInstagram/><p className='m-0 ps-2'>tollmantuc</p></Link>
            <Link to='https://www.google.com' className='d-flex align-items-center contact-text-rrss'><ImFacebook2/><p className='m-0 ps-2'>tollmantuc</p></Link>
        </div>
        <div className='contact-form col-lg-5 d-flex flex-column justify-content-center align-items-center' id='contact'>
        <div className='d-flex justify-content-center align-items-center container'>
          <div className='col-12'>
            <form className='d-flex flex-column' ref={formRef} onSubmit={handleSubmit} id='formulario'>
              <input type="text" placeholder='Nombre Completo' name='user_name' className='form-input'required/>
              <input type="number" placeholder='Teléfono' name='user_subject' className='form-input'required/>        
              <input type="email" placeholder='Casilla de Correo' name='user_email' className='form-input'required/>
              <textarea id="" placeholder='Describinos tu proyecto' name='message' rows="5" className='form-text-area'required></textarea>
              <div className='d-flex align-items-center justify-content-center'>
                <button className='form-btn w-50'>Enviar</button>
                {done && <p className='sent-msg'>Mensaje enviado con exito!!</p>}
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact