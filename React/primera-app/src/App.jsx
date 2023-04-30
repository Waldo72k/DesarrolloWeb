import Horario from "./Horario"
import Portada from "./Portada"
import Contador from "./Contador"

function App() {

  return (
   <div>
    <Portada 
    titulo="Aprendiendo React" 
    fecha="16 de febrero de 2023"
    />
    <Horario/>
    <Contador
    contador={7} //enviar datos en brackets es lo que logra enviar numeros y eso
    //numero="7" //esto obviamente es un string bru
    />
    </div>
   
  )
}

export default App
