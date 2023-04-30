import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className='flex flex-row h-screen'>
        <aside className='bg-green-300 w-1/5'>
            <h1>Indice o contenido</h1>
            <div>
                <Link to={"/"}>Inicio</Link>
            </div>
            <div>
                <Link to={"/registro"}>Registro</Link>
            </div>
        </aside>

        <div>
        <Outlet/>
        {/*  Este va a escuchar todos los element del browserrouting */}
        </div>
    </main>
  )
}

export default Layout