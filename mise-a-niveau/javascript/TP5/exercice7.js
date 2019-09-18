const url = 'https://www.univ-larochelle.fr/';

fetch(url)
  .then((response) => response.text())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => { // en cas d'échec
    console.log(err.message);
  });
