import PropTypes from "prop-types";

const Portada = ({titulo = "Desarrollo Web 1", fecha = "1999"}) => {

    // const nuevoMensaje = {
    //     mensaje: "Hola Desarrollo Web 1",
    //     title: "Programacion web"
    // };

  return (
    <div>
    <h1>{titulo}</h1>
    <h3>{fecha}</h3>
    
    {/* {nuevoMensaje.title}
     {JSON.stringify(nuevoMensaje)}  Esto imprime todo el contenido del objeto como objeto en forma de string */}
    
    </div>
  )
}

Portada.propTypes ={
    titulo: PropTypes.string,
    fecha: PropTypes.string
}

export default Portada