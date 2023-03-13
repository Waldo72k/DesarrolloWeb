import React from 'react'

const Estudiante = ({estudiante, setEstudiante, estudiantes, setEstudiantes, borrarEstudiante}) => {
  const {nombre, carrera, semestre, promedio} = estudiante;
  // const borrarEstudiante = (id) => {
  //   console.log(id);
  //   const nuevaLista = estudiantes.filter((estudiante) => estudiante.id !== id);
  //   setEstudiantes(nuevaLista);
  // };

  return (
    <div className='pl-3 py-10 shadow-lg mt-7 bg-[#00b4d8]'>
      <p className='font-bold mb-2 uppercase mx-10'>Nombre: <span className='font-normal ml-3 normal-case'>{nombre}</span></p>
      <p className='font-bold mb-2 uppercase mx-10'>Carrera: <span className='font-normal ml-3 normal-case'>{carrera}</span></p>
      <p className='font-bold mb-2 uppercase mx-10'>Semestre: <span className='font-normal ml-3 normal-case'>{semestre}</span></p>
      <p className='font-bold mb-2 uppercase mx-10'>Promedio: <span className='font-normal ml-3 normal-case'>{promedio}</span></p>
      <div className='flex justify-between px-10'>
        <button
          type='button'
          className='hover:bg-cyan-700 rounded-md w-28 py-2 mt-4 text-yellow-50 bg-blue-300 mr-7'
          onClick={()=>setEstudiante(estudiante)}
          >Modificar</button>

          <button
          type='button'
          className='hover:bg-cyan-700 rounded-md w-28 py-2 mt-4 text-yellow-50 bg-blue-300'
          onClick={()=>borrarEstudiante(estudiante.id)}
          >Eliminar</button>
      </div>
    </div>
  )
}

export default Estudiante