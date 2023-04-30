import React from 'react'
import { TextField, Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const tema = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#4763E4',
      darker: '#3f57c5',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});


const Login = () => {
  return (
    <div>

        <h1 className=' text-center text-indigo-600 font-extrabold text-4xl sm:mt-32 lg:mt-64'>Moistened</h1>
        <div className="sm:w-3/4 mt-2 md:w-1/2 mx-auto text-center">
           <p className="text-center justify-center text-2xl ">Bienvenido, ingrese sus credenciales para acceder al sistema</p>
        </div>
        <div className="flex flex-col mx-auto xl:w-1/3 lg:w-1/3 sm:w-1/2 mt-7 ">
          <p>Nombre de usuario</p>
          <TextField fullWidth label="" id="fullWidth" className="" />
          <p>Contraseña</p>
          <TextField fullWidth label="" id="fullWidth" />
        </div>
        <div className="flex flex-col mx-auto xl:w-1/3 lg:w-1/3 sm:w-1/2 mt-7 ">
        <ThemeProvider theme={tema}>
        <Button variant="contained" color='primary'>Ingresar</Button>
        </ThemeProvider>
        </div>

    </div>
  )
}

export default Login