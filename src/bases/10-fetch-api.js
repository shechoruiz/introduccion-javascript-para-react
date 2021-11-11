// Fetch API

const API_KEY = 'kx88TEZM2i1M6R4HS35zxEarXqOLCjz1';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

peticion
  .then((resp) => resp.json())
  .then( ({ data }) => {
    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  })
  .catch(console.warn)
