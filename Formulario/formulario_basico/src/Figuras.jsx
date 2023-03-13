import React, { useState } from 'react'
import PropTypes from "prop-types"
import './App.css'

const Figuras = ({ladoCuadrado,baseRectangulo, alturaRectangulo, baseTriangulo, alturaTriangulo}) => {
  const [cuadrado, setCuadrado] = useState(ladoCuadrado)

  const [rectangulo, setRectangulo] = useState(baseRectangulo)

  const [triangulo, setTriangulo] = useState(baseTriangulo)
 
  const formulaCuadrado = (event) => {
    setCuadrado(cuadrado*cuadrado);
  }

  const formulaRectangulo = (event) => {
    setRectangulo(rectangulo * alturaRectangulo);
  }

  const formulaTriangulo = (event) => {
    setTriangulo(triangulo * alturaTriangulo /2);
  }

  const handleReset = (event) => {
    setCuadrado(ladoCuadrado);
    setRectangulo(baseRectangulo);
    setRectangulo(alturaRectangulo);
    setTriangulo(baseTriangulo);
    setTriangulo(alturaTriangulo);
  }
  

  return (
    <div class= "contenedor">
        <div class="contenedor--titulo">
            <h1>Formulario Basico</h1>
        </div>
      <h2>{cuadrado}</h2>
      <button onClick={formulaCuadrado
      }
      >Cuadrado</button>
      <h2>{rectangulo}</h2>
      <button onClick={formulaRectangulo}
      >Rectangulo</button>
      <h2>{triangulo}</h2>
      <button onClick={formulaTriangulo}
      >Triangulo</button>
      <h2></h2>
      <button onClick={handleReset}
      >Reset</button>
    </div>
  )
}



Figuras.propTypes = {
    ladoCuadrado: PropTypes.number.isRequired,
    baseRectangulo: PropTypes.number.isRequired,
    alturaRectangulo: PropTypes.number.isRequired,
    baseTriangulo: PropTypes.number.isRequired, 
    alturaTriangulo: PropTypes.number.isRequired
}

export default Figuras