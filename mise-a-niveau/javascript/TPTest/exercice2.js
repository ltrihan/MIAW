// Ecrire la fonction miroir(tab) qui retourne true si tab est symétrique et false sinon.

// Exemple : miroir([1,2,1]) -> true

// Longueur attendue : 5-6 lignes

const miroir = (tab) => {
  if (tab.join('') === tab.reverse().join('')) {
    return true;
  } return false;
};

console.log(miroir([1, 2, 2, 2, 1]));
console.log(miroir([1, 2, 3, 1]));
