import React, { useEffect, useLayoutEffect, useState } from 'react'

export const EjemploComponent = () => {

  const [mostrar, setMostrar] = useState(false)


  // Este lo hara luego de que este todo renderizado
  useEffect(() => {
    console.log('useEffect: Componente Cargado')

  }, [])


  // No importa donde lo coloques en el codigo, se imprimera primero lo que haya dentro de este hook
  useLayoutEffect(() => {
    console.log('useLayoutEffect: Componente Cargado')

  }, [])


  return (
    <div>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>

      {/* De esta manera puedo hacer un Flag muy facil para mostrar y dejar de mostrar algo*/}
      <button onClick={() => setMostrar(prev => {
        // le metimos un clg para que veas el comportamiento del flag, pero puedes quitar los corchetes y dejar implicito
        console.log(!prev)
        return !prev
      })}>Mostrar mensaje</button>

      {mostrar && (
        <div id="caja">
          Hola soy un mensaje {mostrar}
        </div>

      )
      }

    </div>
  )
}
