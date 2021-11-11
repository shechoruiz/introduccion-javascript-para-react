// Arreglos

// Este metodo facilita la creación de arrays cuando se predefine la cantidad de sus elementos
// const arreglo = new Array(100);

// La manera que indica JavaScript es la siguiente
const arreglo = [1,2,3,4]
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)
// Recomendación: Cuidado con la función push ya que modifica el objeto (Array) inicial. Se prefiere usar el spread operator

let arreglo2 = [...arreglo, 5]

const arreglo3 = arreglo2.map((valor) => {
  return valor * 2
})

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)