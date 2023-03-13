import React from 'react'
import '../styles/cabeceraStyle.css'

const Cabecera = ({titulo}) => {
  return (
    <div className='cabeceraContainer'><h1 className='cabeceraContainer_titulo'>{titulo}</h1></div>
  )
}

export default Cabecera