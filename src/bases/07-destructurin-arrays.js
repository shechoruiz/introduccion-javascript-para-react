// Desestructuración de arrays o  asignación desestructurante

const personajes = ['Goku', 'Vegeta', 'Trunks']

// console.log(personajes[0])
// console.log(personajes[1])
// console.log(personajes[2])

// Para extraer de manera independiente cada valor, hacemos uso del siguiente método

const [ , , p1 ] = personajes

/* Recordando que los arreglos vienen definidos por sus posiciones, en el ejemplo anterior le
  pedimos a Javascript que ignore las posiciones que no deseo dejandolas sin valor y separadas
  por las comas
*/

console.log(p1) // A pesar de que dice p1, estoy imprimiendo el tercer valor de ese array

const retornaArreglo = () => {
  return ['ABC', 123]
}

const [ letras, numeros ] = retornaArreglo()
console.log(letras, numeros)

// Ejercicio
// 1. El 1er valor del arr se llamara nombre
// 2. El 2do valor del arr se llamara setNombre

// const useState = ( valor ) => {
//   return [ valor, () => {console.log('Hola mundo')}]
// }

// const arr = useState('Goku')
// console.log(arr)

const useState = ( valor ) => {
  return [ valor, () => {console.log('Hola mundo')}]
}

const [ nombre, setNombre ] = useState('Goku')
console.log(nombre)
setNombre()