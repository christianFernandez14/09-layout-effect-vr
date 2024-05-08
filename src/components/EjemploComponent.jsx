import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const EjemploComponent = () => {

  const [mostrar, setMostrar] = useState(false)

  const caja = useRef()
  const boton = useRef()

  // Este lo hara luego de que este todo renderizado
  useEffect(() => {
    console.log('useEffect: Componente Cargado')

    if (caja.current == null) return

    const { bottom } = boton.current.getBoundingClientRect()
    
    // Me muestra los pixeles del borden de la pantalla
    // console.log(bottom)

    caja.current.style.top = `${bottom + 45}px`
    caja.current.style.left = `${bottom + 45}px`

  }, [mostrar])


  // No importa donde lo coloques en el codigo, se imprimera primero lo que haya dentro de este hook
  useLayoutEffect(() => {
    console.log('useLayoutEffect: Componente Cargado')

  }, [])


  return (
    <div>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>

      {/* De esta manera puedo hacer un Flag muy facil para mostrar y dejar de mostrar algo*/}
      <button ref={boton} onClick={() => setMostrar(prev => !prev)}>Mostrar mensaje</button>

      {mostrar && (
        <div id="caja" ref={caja}>
          Hola soy un mensaje {mostrar}
        </div>

      )
      }

    </div>
  )
}
