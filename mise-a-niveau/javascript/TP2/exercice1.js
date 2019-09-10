const numbers = [1, 2, 3, 10, 20, 30];

const lastButOne = (arr) => {
  if (arr.length >= 2) {
    return arr.slice(-2)[0];
  } return false;
};

lastButOne(numbers);

const square = (arr) => {
  const squaredNumbers = [];
  for (let i = 0; i < arr.length; i += 1) {
    squaredNumbers.push(arr[i] * arr[i]);
  } return squaredNumbers;
};

square(numbers);

const gt10 = (arr) => {
  const bigNumbers = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] >= 10) {
      bigNumbers.push(arr[i]);
    }
  } return bigNumbers;
};

gt10(numbers);

const sum = (arr) => {
  let sumNumbers = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sumNumbers += arr[i];
  } return sumNumbers;
};

sum(numbers);
