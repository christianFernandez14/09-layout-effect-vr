TRABAJANDO CON Los Hooks useEffect y useLayoutEffect

1.- Trabajan practicamente bajo el mismo metodo, pero de se diferencia en que:

  El useLayoutEffect se ejecuta de manera sincrona, despues de hacer todas mutaciones y cambios en el DOM
  El useEffect, no se ejecuta despues de hacer esos cambios, sino despues de que el componenente termina de renderizarse

  Por lo tanto se recomienda usar siempre usar antes el useEffect antes que el useLayoutEffect

  En resumen el useLayoutEffect, se aplicaria solo si presenta algun tipo de retrasos el renderizado de algo, ahi colocaria todo lo que tu requieres para que se pueda aplicar.

