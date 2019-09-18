const url = 'https://jsonplaceholder.typicode.com/todos';

// afficher une liste
// d'elements qui ont le statut completed: true

// afficher une autre liste
// d'elements qui ont le statut completed: false

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const ulCompleted = document.createElement('ul');
    document.body.appendChild(ulCompleted);
    const ulNotCompleted = document.createElement('ul');
    document.body.appendChild(ulNotCompleted);
    data.forEach((element) => {
      if (element.completed === false) {
        const list = `<li>Completed: ${element.completed} Title: ${element.title}</li>`;
        ulCompleted.insertAdjacentHTML('beforeend', list);
      } else {
        const list = `<li>Completed: ${element.completed} Title: ${element.title}</li>`;
        ulNotCompleted.insertAdjacentHTML('beforeend', list);
      }
    });
  })
  .catch((err) => { // en cas d'échec
    console.log(err.message);
  });
