// import, export y funciones comunes de arreglos

import { heroes } from "./data/heroes"

// 1ra forma de importar
// import { heroes } from './data/heroes';

/* 2da foma de importar: Escribiendo directamente el nombre del elemento a importar y esperar que VSC entregue
  en el Intellisense la ruta
*/
// heroes -->

const getHeroById = (id) => {
  return heroes.find(element => element.id === id)
}

// console.log(getHeroById(3))

const getHeroByOwner = ( owner ) => heroes.filter(element => element.owner === owner)

// console.log(getHeroByOwner('DC'))

export {
  getHeroById,
  getHeroByOwner
}