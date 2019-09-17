// Ecrire la fonction anagramme(s1, s2) qui teste si deux chaines s1 et s2 sont anagrammes
// l’une de l’autre (on suppose que la chaîne contient que des lettres et des espaces et
//   les espaces ne sont pas considérés pour le résultat).

// Exemple : anagramme("chien", "ni che") -> true

// Longueur attendue : 1 ligne

const anagramme = (s1, s2) => s1.split('').sort().join('').trim() === s2.split('').sort().join('').trim();

console.log(anagramme('chien', 'ni che'));
