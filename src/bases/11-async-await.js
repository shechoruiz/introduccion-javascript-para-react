// Async - Await

/*
  Su caracteristica radica en hacer uso de las palabras claves async y await. async convierte una funcion en una
  promesa y await transforma una sentencia en una respuesta que debe ser esperada antes de que la siguiente linea
  se ejecute.

  Lo ideal para el control de errores en este caso, es hacer uso del try / catch
*/

const getImage = async () => {
  try {
    const API_KEY = 'kx88TEZM2i1M6R4HS35zxEarXqOLCjz1';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data } = await resp.json()
    const { url } = data.images.original

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  } catch (error) {
    console.error(error)
  }
}

getImage()