// Funciones

function saludar(nombre = "Goku") {
  return `Hola ${nombre}`
}
// con esta manera de declarar una funcion, se pueden presentar problemas como la asignación de valores errados
// saludar = 30;

// Se puede atacar esto con lo siguiente:
const saludar2 = function(nombre = "Vegeta") {
  return `Hola ${nombre}`
}

// El siguiente método sería utilizando las funciones flecha
const saludar3 = ( nombre = "Krillin") => `Hola ${nombre}`

console.log(saludar())
console.log(saludar2())
console.log(saludar3())

// Tarea
// 1. Transformar a una funcion de flecha
// 2. Retornar un objeto implicito
// 3. Probar

// 1.
// function getUsuarioActivo(nombre) {
//   return {
//     uid: "ABC124",
//     username: nombre,
//   }
// }

const getUsuarioActivo = (nombre) => (
  {
    uid: "ABC124",
    username: nombre,
  }
)

const usuarioActivo = getUsuarioActivo("Sergio")
console.log(usuarioActivo)