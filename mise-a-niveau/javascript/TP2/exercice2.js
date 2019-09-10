const sentence = 'je suis en cours';

// compter le nombre de voyelles d'une chaine
const vowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let countVowels = 0;
  // recuperer les voyelles d'une chaine
  // =caracteres compris dans le tableau des voyelles
  for (let i = 0; i < str.length; i += 1) {
    if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
      countVowels += 1;
    }
  // retourner le nombre de voyelles
  } return countVowels;
};

vowel(sentence);

const palindrome = (word) => {
  if (word === word.split('').reverse().join('')) {
    return true;
  } return false;
};

palindrome('kayak');

const uppercase = (str) => {
  const firstLetter = str.charAt(0).toUpperCase();
  const othersLetters = str.slice(1).toLowerCase();
  return firstLetter + othersLetters;
};

uppercase('le wagon BEST coding bootcamp ever');
