// Template Strings

const nombre = "Sergio"
const apellido = "Ruiz"

// Modo viejo
// const nombreCompleto = nombre + " " + apellido

// Versión nueva
const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)

function getSaludo(nombre = "Andrés") {
  return "Hola " + nombre
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)
