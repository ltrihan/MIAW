// Ecrire la fonction majuscules(s) qui transforme et retourne la chaîne
// s en mettant en majuscule la première lettre de chaque mot et
// tout le reste en minuscule.

// Exemple : majuscules("il fait beau") -> Il Fait Beau

// Longueur attendue : 1 à 5-6 lignes

const majuscules = (s) => {
  s.split(' ').forEach((word) => {
    word.toUpperCase();
  });
  return s;
};

console.log(majuscules('il fait beau'));
