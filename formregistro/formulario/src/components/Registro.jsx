import React from 'react'
import '../styles/registroStyle.css'

const Registro = () => {
  return (
    <div className='containerRegistro'>
    <h1>Registro</h1>
    <form>
    
    <label htmlFor="">Nombre</label><br />
    <input type="text" name="" id="" />
    <br />
    <label htmlFor="">Apellido</label><br />
    <input type="text" name="" id="" />
    <br />
    <label>Sexo</label><br />
    <label className='sexo'>Masculino</label>
    <input type='radio' name="Sexo" id="" />
    <label className='sexo'>Femenino</label>
    <input type='radio' name="Sexo" id="" />
    <br />
    <label htmlFor="">Edad</label><br />
    <input type="number" name="" id="" />
    <br />
    <label htmlFor="">Cumpleaños</label><br />
    <input type='date' name="" id="" />
    <br /> <br />
    <input type="button" value="Enviar" />
    </form>
</div>
  )
}

export default Registro