// clef API nommée WEATHER_API
// url pour La Rochelle
const url = 'https://openweathermap.org/city/3006787';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => { // en cas d'échec
    console.log(err.message);
  });
