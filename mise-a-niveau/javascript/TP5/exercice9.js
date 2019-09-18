// clef API nommée WEATHER_API
// url pour La Rochelle
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Rochelle,fr&appid=15378a92f6e22911fdaa023aae27734c';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => { // en cas d'échec
    console.log(err.message);
  });
