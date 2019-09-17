// Ecrire la fonction alpha(str) qui retourne une chaîne avec toutes les lettres dans l’ordre
// alphabétique en supprimant ts les espaces.
// S'il y a des majuscules elle doivent être avant les minuscules (comme en ASCII).

// Exemple : alpha("je suis en cours") -> ceeijnorsssuu

// Longueur attendue : 1 ligne

const alpha = (str) => str.replace(/\s/g, '').split('').sort().join('');
console.log(alpha('je suis en cours'));
