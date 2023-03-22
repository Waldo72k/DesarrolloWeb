import {useState} from 'react'
import styled from '@emotion/styled'

export const useSelectorMonedas = (label, divisas) => {

    const Label = styled.label`
    color: aliceblue;
    font-size: 1.2rem;
    font-family: 'Sono', sans-serif;
    font-weight: bold;
    `
const DropMenu = styled.select`
background-color: blueviolet;
color: aliceblue;
border: none;
width: 100%;
text-transform: uppercase;
font-family: 'Sono', sans-serif;
font-weight: bold;
border-radius: 12px;
padding: 10px;
margin: 10px 0 10px 0;
transition: background-color .3s ease;

&:hover{
    background-color: #330156;
    cursor: pointer;
}
`;
    /////Todo////
    

    const [state,setState] = useState('');
  
const SelectorMonedas = () => 
    <>
    <Label>{label}</Label>  
    <DropMenu value={state}
    onChange={e => setState(e.target.value)
    }>
    <option >Seleccione una divisa</option>
    {divisas.map(opcion => (
        <option
        key={opcion.id}
        value={opcion.id}
        >{opcion.nombre}</option>  
    ))}
    </DropMenu>
    
    </>


return [ state, SelectorMonedas ]; //necesitamos regresar el state tmbn

}

export default useSelectorMonedas