## Como consultar un api

useEffect(() => {
const consultarApi = async () => { //Funcion asyncrona y el => es un return
const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
const respuesta = await fetch(url); //va a esperar un fetch de url
const resultado = await respuesta.json();
console.log(resultado);
}

    consultarApi();

}, [])

## Esta parte muestra el como mapea un arreglo de objetos, extrayendo las propiedades en un select

    const [state,setState] = useState('');

const SelectorMonedas = () =>
<>
<Label>{label}</Label>  
 <select value={state}
onChange={e => setState(e.target.value)
}>

<option >Seleccione una divisa</option>
{divisas.map(opcion => (
<option
        key={opcion.id}
        value={opcion.id}
        >{opcion.nombre}</option>
))}
</select>
</>

return [ state, SelectorMonedas ]; //necesitamos regresar el state tmbn

}
