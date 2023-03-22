import {useEffect , React, useState} from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectorMonedas from '../hooks/useSelectorMonedas'
import {monedas} from '../data/monedas.js'

const InputSubmit = styled.input`
    background-color: #800080;
    color: aliceblue;
    border: none;
    width: 100%;
    text-transform: uppercase;
    border-radius: 12px;
    padding: 10px;
    transition: background-color .3s ease;
    font-family: 'Sono', sans-serif;
    font-weight: bold;
    font-size: 1rem;

    &:hover{
        background-color: #6b006b;
        cursor: pointer;
    }
`

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

const Formulario = () => {
  
  const [cryptos, setCryptos] = useState([]);

  const [error, setError] = useState(false);

  const [validacion, setValidacion] = useState(false);

  const [state, SelectorMonedas] = useSelectorMonedas('Elije tu coink', monedas); //este es un Hook

  const [criptoMoneda, SelectorCryptos] =useSelectorMonedas('Elije tu Cryptocoink', cryptos);

  const [datosReales, setDatosReales] = useState({});

  const [vinculo, setVinculo] = useState(`USD`);

  

  useEffect(() => {
    const consultarApi = async () => { //Funcion asyncrona y el => es un return 
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=${vinculo}`; //cambiar lo de la moneda
      const respuesta = await fetch(url); //va a esperar un fetch de url
      const resultado = await respuesta.json();

      const arregloCryptos = resultado.Data.map(agarraElNombreDelObjeto => { //Lit esa variabla va a agarrar todos los valores del arreglo
        
        const nuevoObjetoMio = {
          id: agarraElNombreDelObjeto.CoinInfo.Name,
          nombre: agarraElNombreDelObjeto.CoinInfo.FullName,
          
        };
        // console.log(nuevoObjetoMio.precio);
        return nuevoObjetoMio;
        
        
      });
      // console.log(arregloCryptos);
      // arregloCryptos.map((criptoMoneda) => (
      //   precio = arregloCryptos.precio
      // ));
      
      setCryptos(arregloCryptos);
    }
    consultarApi();
  }, [])

  const manejadorSubmit = async (e) => {
    e.preventDefault();

    if([state,criptoMoneda].includes('')) {
      console.log("error, echele datos mijo");
      setError(true);
      setValidacion(false);
      return
    } else {
      setError(false);
      setValidacion(true);
    }

    if([state,criptoMoneda].includes('Seleccione una divisa')) {
      console.log("error, echele datos mijo");
      setError(true);
      setValidacion(false);
      return
    } else {
      setError(false);
      setValidacion(true);
    }


    // console.log(state)
    // console.log(criptoMoneda) ////////Lo tengo que ahcer como stare y criptomoneda, lo del precio´
    // console.log(arregloCryptos)
    
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${state}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const objetoCypto = resultado.Data.find(
      (crypto) => crypto.CoinInfo.Name === criptoMoneda
    );
    const objetoData = objetoCypto.DISPLAY[state];
    setDatosReales({
      precioAhora: objetoData.PRICE,
      precioBajo: objetoData.LOWDAY,
      precioInicio: objetoData.OPENDAY,
      imagen: objetoData.IMAGEURL,
    });
    console.log(objetoData);
    setError(false);
    setValidacion(true); 
    
    
    // console.log(segundaPosicion);
    // console.log(segundaPosicion.nombre);
  }

  const laURL = `https://cryptocompare.com${datosReales.imagen}`;

  return (
    <>
    {error && <Error>Todos los campos son obligatorios!</Error>} 
    <div>
        <form
        onSubmit={manejadorSubmit}
        >  
          <SelectorMonedas/>
          <SelectorCryptos/>
            <InputSubmit type="submit"  value={"Cotizar"} onClick={console.log(cryptos)}/>

        </form>
    </div>
    {validacion && 
      <CuadroCrypto>
      <Imagen src={laURL} alt="Imagen de Crypto" />
      <div>
      <ContenidoCrypto2><ContenidoCrypto>Valor:</ContenidoCrypto>{datosReales.precioAhora}</ContenidoCrypto2>
      <ContenidoCrypto2><ContenidoCrypto>Baja: </ContenidoCrypto>{datosReales.precioBajo}</ContenidoCrypto2>
      
      </div>
      </CuadroCrypto>}
    
    </>
  )
}

export default Formulario