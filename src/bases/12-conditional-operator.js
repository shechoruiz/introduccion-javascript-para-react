// Operador condicional ternario

/*
  Es una manera corta de tomar una decisión
*/

const activo = true
let mensaje = ''

// Forma antigua

// if(activo) {
//   mensaje = 'activo'
// } else {
//   mensaje = 'inactivo'
// }

// Forma actualizada con el operador condicional ternario

activo ? mensaje = 'activo' : mensaje = 'inactivo'

console.log(mensaje)

