const url = 'https://www.univ-larochelle.fr/';

// Création d’un objet permettant de créer des requêtes
let xhr = new XMLHttpRequest();

// Ouverture d’une connexion avec le serveur
// methode = GET ou POST
// asynch_flag = false pour synchrone, true pour asynchrone
xhr.open('GET', url, false);

xhr.onreadystatechange = function() {
  console.log(`Statut de la connexion : ${xhr.status}`);
  console.log(`Etat de la connexion : ${xhr.readyState}`);
  console.log(`Longueur de la réponse texte : ${xhr.responseText.length}`);
};

// Envoi d’une requête ‐ bloquant
xhr.send();
