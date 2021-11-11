// Objetos literales

const persona = {
  nombre: "Sergio",
  apellido: "Ruiz",
  edad: 30,
  direccion: {
    ciudad: "New York",
    zip: 456789,
    lat: 34.6789,
    lng: 12.9876,
  }
}

console.log({persona})

// Pilas: Acá se está haciendo una asignacion de referencia (Copia de la posición en memoria)
const persona2 = persona
console.log(persona2)

// Para hacerlo correctamente, se debe hacer así
const persona3 = {...persona}
persona3.nombre = "Andrés"
console.log(persona3)