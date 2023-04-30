import Link from 'next/link'
import React from 'react'

const rutas = [
    {
        ruta : "/",
        label: "inicio",
    },
    {
        ruta : "/about",
        label: "Acerca de",
    },
    {
        ruta : "/registro",
        label: "Registro",
    },
]

const Navbar = () => {
  return (
    <nav className=' list-none bg-black text-white font-bold'>
        <ul className='flex gap-3'>
            {rutas.map(({ruta,label}) =>(
                <li key={ruta}>
                    <Link href={ruta}>{label}</Link>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar