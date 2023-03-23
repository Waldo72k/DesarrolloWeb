import React from 'react'
import styled from '@emotion/styled'

const CuadroCrypto = styled.div`
margin-top: 30px;
  border-radius: 12px;
  background-color: blueviolet;
  width: 100%;
  height: 100%;
  max-height: 500px;
  color: white;
  border-style: solid;
  border-color: aliceblue;
  border-width: .2rem;
  

  @media (min-width: 972px){
    max-height: 250px;
   display: grid;
   grid-template-columns: repeat(2,1fr);
    column-gap:2rem;
  };
`

const ContenidoCrypto = styled.span`
font-family: 'Sono', sans-serif;
font-weight: bold;
font-size: 1.5rem;
vertical-align: center;
`

const ContenidoCrypto2 = styled.p`
font-family: 'Sono', sans-serif;
font-size: 1.5rem;
margin: 10px auto 0px auto;
text-align: center; 
margin: 2rem;

@media (min-width: 972px){
    text-align: left;
    vertical-align: none;
    display: block;
    margin: 1rem;
}
`
const Imagen = styled.img`
width: 100%;
max-height: 200px;
max-width: 200px;
margin: 10px auto 0px auto;
display: block;

@media (min-width: 972px){
  max-width: 100%;  
  margin: 10px 10px 0px auto;

}
`

const Cargando = styled.div`
border: 5px;
border-top: 5px solid #f3f3f3;
border-radius: 50%;
width: 50px;
height: 50px;
margin: 30px auto;
animation: spin 1s linear infinite;
@keyframes spin {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
;
`

const Display = ({datos}, props) => {
const { cargando } = props;
const {precioAhora, precioAlta, precioBajo, imagen} = datos;
const laURL = `https://cryptocompare.com${imagen}`;
console.log("Cargando es"+cargando)
  return (
    <CuadroCrypto>
      {cargando ? (<Cargando />) : (<Imagen src={laURL} alt={<Cargando />} />)}
      <div>
      <ContenidoCrypto2><ContenidoCrypto>Alta: </ContenidoCrypto>{precioAlta}</ContenidoCrypto2>
      <ContenidoCrypto2><ContenidoCrypto>Valor:</ContenidoCrypto>{precioAhora}</ContenidoCrypto2>
      <ContenidoCrypto2><ContenidoCrypto>Baja: </ContenidoCrypto>{precioBajo}</ContenidoCrypto2>
      </div>
      </CuadroCrypto>
  )
}

export default Display