import React, { useState } from 'react'
import PropTypes from "prop-types"


const Contador = ({contador}) => {
    //Est o lo invocas con uses
    const [valor, setValor] = useState(contador)

    const handleAdd = (event) => {
        setValor(valor+ 1);
    }

    const handleMinus = (event) => {
        setValor(valor-1);
    }

    const handleReset = (event) => {
        setValor(contador);
    }


  return (
    <div>
    <h1>Contador App</h1>
    <h1>{valor}</h1>
    <button onClick={handleAdd //llamada al evento cada que clickeamos, si a la funcion le ponemos () al final, esta se ejecutara sola
    }>+1</button>
    <button onClick={handleMinus}>-1</button>
    <button onClick={handleReset}>Reset</button>
    </div>
  )
}

Contador.propTypes ={
    contador: PropTypes.number.isRequired,
}

export default Contador