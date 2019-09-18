const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const ul = document.createElement('ul');
  })
  .catch((err) => { // en cas d'échec
    console.log(err.message);
  });
