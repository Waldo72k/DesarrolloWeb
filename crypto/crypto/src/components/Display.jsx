import React from 'react'
import styled from '@emotion/styled'

const CuadroCrypto = styled.div`
margin-top: 30px;
  border-radius: 12px;
  background-color: blueviolet;
  width: 100%;
  height: 270px;
  color: white;
  border-style: solid;
  border-color: aliceblue;
  border-width: .2rem;

  @media (min-width: 972px){
   display: grid;
   grid-template-columns: repeat(2,1fr);
    column-gap:2rem;
  };
`

const ContenidoCrypto = styled.span`
font-family: 'Sono', sans-serif;
font-weight: bold;
font-size: 1.5rem;
`

const ContenidoCrypto2 = styled.p`
font-family: 'Sono', sans-serif;
font-size: 1.5rem;
margin: 10px auto 0px auto;
padding-right: 100px;
`
const Imagen = styled.img`
width: 100px;
margin: 10px 10px 0px 10px;
display: block;
@media (min-width: 972px){
  margin: 10px auto 0px auto;
}
`

const Display = ({datos}) => {
const {precioAhora, precioAlta, precioBajo, imagen} = datos;
const laURL = `https://cryptocompare.com${imagen}`;

  return (
    <CuadroCrypto>
      <Imagen src={laURL} alt="Imagen de Crypto" />
      <div>
      <ContenidoCrypto2><ContenidoCrypto>Alta: </ContenidoCrypto>{precioAlta}</ContenidoCrypto2>
      <ContenidoCrypto2><ContenidoCrypto>Valor:</ContenidoCrypto>{precioAhora}</ContenidoCrypto2>
      <ContenidoCrypto2><ContenidoCrypto>Baja: </ContenidoCrypto>{precioBajo}</ContenidoCrypto2>
      </div>
      </CuadroCrypto>
  )
}

export default Display