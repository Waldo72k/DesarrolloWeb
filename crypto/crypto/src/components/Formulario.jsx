import React from 'react'
import styled from '@emotion/styled'
import useSelectorMonedas from '../hooks/useSelectorMonedas'
import {monedas} from '../data/monedas.js'

const InputSubmit = styled.input`
    background-color: blueviolet;
    color: aliceblue;
    border: none;
    width: 100%;
    text-transform: uppercase;
    border-radius: 12px;
    padding: 10px;
    transition: background-color .3s ease;

    &:hover{
        background-color: #330156;
        cursor: pointer;
    }
`



const Formulario = () => {

  

  const [state, SelectorMonedas] = useSelectorMonedas('Elije tu coin', monedas);

  return (
    <div>
        <form>
          <SelectorMonedas/>
            <InputSubmit type="submit"  value={"Cotizar"} />

        </form>
            
    </div>
  )
}

export default Formulario