// Desestructuración de objetos o  asignación desestructurante

const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman"
}

// const { edad, nombre, clave, } = persona;

// console.log(nombre)
// console.log(edad)
// console.log(clave)

// Desestructurando el objeto desde el interior de la funcion
const retornarPersona = (usuario) => {
  const { clave, edad, nombre } = usuario
  console.log(clave, nombre, edad)
}

// Desestructurando el objeto desde los parametros de la funcion
const retornarPersona2 = ({nombre, clave}) => {
  console.log(nombre, clave)
}

retornarPersona(persona)
retornarPersona2(persona)

const useContext = ({clave, nombre, edad, rango = "Capitán"}) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 23.456,
      lng: -9.543,
    }
  }
}

const { nombreClave, anios, latlng:{lat, lng} } = useContext(persona)

console.log(nombreClave, anios)
console.log(lat, lng)