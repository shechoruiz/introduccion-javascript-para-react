import { getHeroById } from "./bases/08-imports-exports"

// Promesas

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // console.log('2 segundos después')
//     const heroe = getHeroById(2)
//     console.log(heroe)
//     // resolve()
//   , 2000})

//   promesa.then(() => {
//     console.log('Then de la promesa')
//   })
// })

const getHeroByIdAsync = ( id ) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroById(id)
      p1 ? resolve(p1) : reject('No se pudo encontrar el heroe')
    , 2000})
  })
}

getHeroByIdAsync(10)
  // .then( heroe => console.log('Heroe', heroe))
  // .catch( err => console.warn(err))
  .then( console.log ) // Then pasa como referencia de su respuesta lo que se imprimira en console.log
  .catch( console.warn ) // Lo mismo sucede acá