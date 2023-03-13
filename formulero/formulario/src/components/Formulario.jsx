import React, { useEffect, useState } from 'react'
// import { useLocalStorage } from './useLocalStorage';

const Formulario = ( {estudiantes,setEstudiantes, estudiante} ) => { //aqui entre el parentesis mande recibo el setestudiantes, el cual declare en el app.jsx


  const [nombre, setNombre] = useState(''); //Puedo cambiar el usestate por el useLocalStorage
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [promedio, setPromedio] = useState('');

  const [error, setError] = useState(false);

  const borrarEstudiante = "Eliminando estudiante";

  useEffect(() => {
    if(Object.keys(estudiante).length > 0){
      setNombre(estudiante.nombre);
      setCarrera(estudiante.carrera);
      setSemestre(estudiante.semestre);
      setPromedio(estudiante.promedio);
    }
  }, [estudiante]) //Si este (el THIRD) esta vacio, el useEffect solo se ejecutara cuando se inicie o refresque la pagina
  
  const generarID = () => { //funcion para generar IDs hue
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return random + fecha;
  }

  const manejadorSubmit = (e) => {
      e.preventDefault();
      if([nombre.trim(),carrera.trim(),semestre.trim(),promedio.trim()].includes('')){
        console.log("No se premite ingresar nada");
        setError(true);
        return
      } 
      setError(false);

      const objetoEstudiante={
        
        nombre, //En un obejto es lo mismo poner solamente 'nombre' a poner 'nombre: nombre' ya que son 'key: value'
        carrera,
        semestre,
        promedio
      }

      if(estudiante.id){
        console.log("Modificando estudiante");
        objetoEstudiante.id = estudiante.id;
        const estudiantesActualizados = estudiantes.map( estudianteState => estudianteState.id === estudiante.id ? objetoEstudiante : estudianteState) //los mapas recorren todo el arreglo y hace un return
        setEstudiantes(estudiantesActualizados);
        console.log(estudiante.id);
        estudiante.id = "";
        //Hay que mandarle setEstudiante y tambien implementar la eliminacion
      } else {
        objetoEstudiante.id = generarID();
        setEstudiantes([...estudiantes,objetoEstudiante]); 
        console.log("Registro nuevo")
      }

      limpiar();
  }

  const limpiar = ()=> {
    setNombre('');
    setCarrera('');
    setSemestre('');
    setPromedio(''); 
  }

  


  return (
    <div className='p-[20px] md:w-1/2 lg:w-2/5 bg-[#0077B6] text-xl rounded-md'>    
    <h1 className=' text-center font-bold text-2xl'>Registro de estudiantes</h1>
    <h2 className=' text-center font-bold'>Registro de estudiantes</h2>
    <form
    onSubmit={manejadorSubmit} //btw esta cosa va sin () ya que se autoejecutaria de manera automatica, ya que no lo lleva se hace hasta que el usuario lo activa
    >
      {error && ( <div> 
        <p className=' bg-red-700 text-center mt-3 font-extrabold text-white' >Llena los campos pa</p>
         </div> )}
      <div className=''>
        <label className='block mb-2 mt-7'>Nombre</label>
        <input type="text" value={nombre} //Aqui va la var nombre ya que este es el get, el que va a obtener
        onChange= { (e)=> setNombre(e.target.value)} //Aqui la e hace referencia a "event", y targetvalue agarra el valor, donde setNombre se lo da al nombre (get)
        name="" id="" placeholder='Nombre'className='border-2 p-1 w-full rounded-md'/>
        </div>
      <div>
        <label className='block mb-2 mt-2'>Carrera</label>
        <input type="text" value={carrera} onChange={(e)=> setCarrera(e.target.value)}
         name="" id="" placeholder='Carrera'className='border-2 p-1 w-full rounded-md'/>
        </div>
      <div>
        <label className='block mb-2 mt-2'>Semestre</label>
        <input type="text" value={semestre} onChange={(e)=> setSemestre(e.target.value)}
        name="" id="" placeholder='Semestre'className='border-2 p-1 w-full rounded-md'/>
        </div>
      <div>
        <label className='block mb-2 mt-2'>Promedio</label>
        <input type="text" value={promedio} onChange={(e)=> setPromedio(e.target.value)}
        name="" id="" placeholder='Promedio'className='border-2 p-1 w-full rounded-md'/>
        </div>

        <div>
          <input type="submit"
          className='bg-white mt-2 rounded-md w-full uppercase hover:bg-blue-50 cursor-pointer'
          value={estudiante.id ? "Actualizar estudiante" : "Agregar estudiante"}/>
        </div>
    </form>

    </div>
  )
}

export default Formulario