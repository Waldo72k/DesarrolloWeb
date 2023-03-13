import React from 'react'
import Estudiante from './Estudiante'

const Listado = ({estudiantes, setEstudiante, setEstudiantes}) => {
const borrarEstudiante = (id) => {
    console.log(id);
    const nuevaLista = estudiantes.filter((estudiante) => estudiante.id !== id);
    setEstudiantes(nuevaLista);
  };
  

  return (
    <div className='md:w-1/2 lg:w-3/5 bg-[#0077B6] rounded-md text-xl p-[20px] h-screen lg:overflow-y-scroll'>
      <h1 className=' text-center font-bold text-2xl'>Registro de estudiantes</h1>
    <h2 className=' text-center font-bold'>Administra estudiantes</h2>

    {estudiantes.map((estudiante)=>( //Key es la posicion, en este casl
      <Estudiante key={estudiante.id} estudiante={estudiante}
      setEstudiante={setEstudiante} borrarEstudiante={borrarEstudiante}
      />
    ))}


    </div>
  )
}

export default Listado