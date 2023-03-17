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



const Formulario = () => {
  
  const [cryptos, setCryptos] = useState([]);

  const [error, setError] = useState(false);

  const [state, SelectorMonedas] = useSelectorMonedas('Elije tu coink', monedas); //este es un Hook

  const [criptoMoneda, SelectorCryptos] =useSelectorMonedas('Elije tu Cryptocoink', cryptos);

  useEffect(() => {
    const consultarApi = async () => { //Funcion asyncrona y el => es un return 
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=72&tsym=USD";
      const respuesta = await fetch(url); //va a esperar un fetch de url
      const resultado = await respuesta.json();

      const arregloCryptos = resultado.Data.map(agarraElNombreDelObjeto => { //Lit esa variabla va a agarrar todos los valores del arreglo
        
        const nuevoObjetoMio = {
          id: agarraElNombreDelObjeto.CoinInfo.Name,
          nombre: agarraElNombreDelObjeto.CoinInfo.FullName,
        };
        return nuevoObjetoMio;
        // console.log(nuevoObjetoMio.nombre)
        
      });
      setCryptos(arregloCryptos);
    }
    consultarApi();
  }, [])

  const manejadorSubmit = e => {
    e.preventDefault();

    if([state,criptoMoneda].includes('')) {
      console.log("error, echele datos mijo");
      setError(true);
      return
    }
    setError(false);

    console.log(state)
    console.log(criptoMoneda)
  }

  return (
    <>
    {error && <Error>Todos los campos son obligatorios</Error>} 
    <div>
        <form
        onSubmit={manejadorSubmit}
        >  
          <SelectorMonedas/>
          <SelectorCryptos/>
            <InputSubmit type="submit"  value={"Cotizar"} />

        </form>
            
    </div>
    </>
  )
}

export default Formulario