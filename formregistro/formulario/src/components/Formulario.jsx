import React from 'react'
import '../styles/formularioStyle.css'

const Formulario = () => {
  return (
    <div className='container'>
        <h1>Formulario</h1>
        <form>
        
        <label htmlFor="">Nombre(s)</label><br />
        <input type="text" name="" id="" />
        <br />
        <label htmlFor="">Apellidos</label><br />
        <input type="text" name="" id="" />
        <br />
        <label htmlFor="">Correo electronico</label><br />
        <input type='email' name="" id="" />
        <br />
        <label htmlFor="">Telefono</label><br />
        <input type='tel' name="" id="" />
        <br />
        <label htmlFor="">Contraseña</label><br />
        <input type='password' name="" id="" />
        <br /><br />
        <input type="button" value="Enviar" />
        </form>
    </div>
  )
}

export default Formulario