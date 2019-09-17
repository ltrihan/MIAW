const miroir = (arr) => {
  if (arr === arr.reverse()) {
    return true;
  } return false;
};

console.log(miroir([1, 2, 1, 3])); // false
console.log(miroir([1, 2, 1])); // true
console.log(miroir([1, 2, 2, 1])); // true
console.log(miroir([1, 2])); // true

// checker spread et rest
// const t = [1, 2, 3];
// const t2 = t;
// t2.push(4);
// console.log(t);
// console.log(t2);


// const afficheRec = (arr) => {
//   // TODO
// };

// const majuscules = (str) => {
//   // TODO
// };

// const alpha = () => {
//   // TODO
// };

// const anagramme = (firstString, secondString) => {
//   // TODO
// };

// const caesar = () => {
//   // TODO
// };

// const vigenere = () => {
//   // TODO
// };
