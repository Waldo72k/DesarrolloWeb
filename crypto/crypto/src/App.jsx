import './App.css'
import ImageCrypto from './img/cryptologo.png'
import styled from '@emotion/styled'
import Formulario from './components/Formulario';

function App() {

  const Heading = styled.h1`
  font-family: 'Sono', sans-serif;
  color: aliceblue;
  margin-top: 80px;
  margin-bottom: 50px;
  text-align: center;
  font-size: 5rem;
  &::after{
    content: '';
    width: 200px;
    height: 6px;
    background-color: purple;
    display: block;
    margin: 10px auto 0 auto;
  };
  `;

  const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0px auto;
  display: block;
  @media (min-width: 972px){
    margin: 10px auto 0px auto;
  }
  `

  const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  
  @media (min-width: 972px){
   display: grid;
   grid-template-columns: repeat(2,1fr);
    column-gap:2rem;
  };
  `;

  return (
        <Contenedor>
        <Imagen
        src={ImageCrypto}
        alt="Imagen de crypto hue"
        />
        <div>
        <Heading>Apex Crypto</Heading>
        <Formulario/>
        
        </div>
        </Contenedor>
  )
}

export default App
