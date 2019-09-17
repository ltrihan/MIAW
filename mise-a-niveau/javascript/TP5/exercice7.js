const url = 'https://www.univ-larochelle.fr/';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => { // en cas d'échec
    console.log(err.message);
  });
