const numbersArray = [1, 2, 3, 10, 20, 30];

const square = (numbers) => numbers.map((number) => number * number);

console.log(square(numbersArray));

const gt10 = (numbers) => numbers.filter((number) => number >= 10);

console.log(gt10(numbersArray));

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const sum = (numbers) => numbers.reduce(reducer, 0);

console.log(sum(numbersArray));

const sentence = 'je suis en cours';

const vowels = (str) => {
  const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter((char) => vowelsArray.indexOf(char.toLowerCase()) !== -1).length;
};

console.log(vowels(sentence));
