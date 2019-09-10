// function helloWorld() {
//   console.log("Hello World!");
// };

// helloWorld();

// function helloPrenom(prenom) {
//   console.log(`Bonjour ${prenom}`);
// };

// helloPrenom("loic");

function calculPrixTTC(prixHT, TVA = 0.055) {
  console.log(prixHT + (prixHT * TVA));
}

calculPrixTTC(10);
