import { useEffect, useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Listado from './components/Listado'

function App() {

  //Aqui se almacena la lista de estudiantes
  const [estudiantes, setEstudiantes] = useState([]);

  //Aqui se almacena el estudiante a modificar
  const [estudiante, setEstudiante] = useState({})


  return (
    <div className='container mx-auto'>
    <Header/>

    <div className='mt-12 md:flex gap-2'>
    <Formulario
      estudiantes={estudiantes}
      setEstudiantes={setEstudiantes}
      estudiante={estudiante}
    />
    <Listado 
    estudiantes={estudiantes}
    setEstudiante={setEstudiante}
    setEstudiantes={setEstudiantes}
    estudiante={estudiante}
    />
    </div>
    </div>
  )
}

export default App
