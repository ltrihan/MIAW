const url = 'https://www.univ-larochelle.fr/';

// Création d’un objet permettant de créer des requêtes
let xhr = new XMLHttpRequest();

// Ouverture d’une connexion avec le serveur
// methode = GET ou POST
// asynch_flag = false pour synchrone, true pour asynchrone
xhr.open('GET', url, false);

// Envoi d’une requête ‐ bloquant
xhr.send();

// Récupération du résultat
const res = xhr.responseText;

console.log(res);
