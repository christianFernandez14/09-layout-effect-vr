import React, { useEffect, useLayoutEffect } from 'react'

export const EjemploComponent = () => {



  // Este lo hara luego de que este todo renderizado
  useEffect(() => {
    console.log('useEffect: Componente Cargado')
    let caja = document.querySelector('#caja')
    // Aca se escribio mal la palabra para que se viera que se esta es el que predomina.
    caja.innerHTML = 'HOLLA 2'
  }, [])


  // No importa donde lo coloques en el codigo, se imprimera primero lo que haya dentro de este hook
  useLayoutEffect(() => {
    console.log('useLayoutEffect: Componente Cargado')
    let caja = document.querySelector('#caja')
    caja.innerHTML = 'HOLAA'
    // Este metodo me trae todo las coordenadas de la caja, ya que ella se la tomo del DOM
    console.log(caja.getBoundingClientRect())
  }, [])


  return (
    <div>
      <h1>Ejemplo useEffect y useLayoutEffect</h1>
      <div id="caja"></div>

    </div>
  )
}
